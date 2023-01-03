import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineSearch} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'

import ThumbnailItem from '../ThumbnailItem'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import AppTheme from '../../context/AppTheme'

import {
  HomeBannerContainer,
  HomeLogo,
  HomeHeading,
  HomeBtn,
  BannerCloseBtn,
  HomeContainer,
  HomeSubContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
  ThumbnailContainer,
  NoResultContainer,
  NoResultImg,
  NoResultHeading,
  NoResultPara,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    closeBanner: true,
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchValue: '',
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const {searchValue} = this.state

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const videosData = data.videos.map(eachVideos => ({
        channel: {
          name: eachVideos.channel.name,
          profileImg: eachVideos.channel.profile_image_url,
        },
        id: eachVideos.id,
        date: eachVideos.published_at,
        thumbnailUrl: eachVideos.thumbnail_url,
        title: eachVideos.title,
        views: eachVideos.view_count,
      }))
      console.log(videosData)
      this.setState({
        videosList: videosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({closeBanner: false})
  }

  onChangeSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickSearch = () => {
    this.getVideosData()
  }

  onKeySearch = event => {
    if (event.key === 'Enter') {
      this.getVideosData()
    }
  }

  onRetry = () => {
    this.onClickSearch()
  }

  renderHomeBanner = () => {
    const {closeBanner} = this.state
    return (
      <>
        {closeBanner ? (
          <HomeBannerContainer data-testid="banner">
            <div>
              <HomeLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <HomeHeading>
                Buy Nxt Watch Premium prepaid plans with UPI
              </HomeHeading>
              <HomeBtn>GET IT NOW</HomeBtn>
            </div>
            <BannerCloseBtn onClick={this.onCloseBanner} data-testid="close">
              <RiCloseLine size={20} color="#383838" />
            </BannerCloseBtn>
          </HomeBannerContainer>
        ) : null}
      </>
    )
  }

  render() {
    const {videosList} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#181818 '
          const border = activeTheme === 'light' ? '#909090' : ' #909090'
          const bgBtn = activeTheme === 'light' ? '#f1f1f1' : ' #424242'
          const headingColor = activeTheme === 'light' ? ' #1e293b' : '#ffffff'
          const paraColor = activeTheme === 'light' ? ' #64748b' : '#94a3b8'

          const renderNoResults = () => (
            <NoResultContainer>
              <NoResultImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoResultHeading color={headingColor}>
                No Search results found
              </NoResultHeading>
              <NoResultPara color={paraColor}>
                Try different key words or remove search filter.
              </NoResultPara>
              <RetryBtn onClick={this.onRetry}>Retry</RetryBtn>
            </NoResultContainer>
          )

          const renderSearchInput = () => {
            const {searchValue} = this.state

            return (
              <SearchContainer>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchValue}
                  onChange={this.onChangeSearch}
                  onKeyDown={this.onKeySearch}
                  inputColor={headingColor}
                />
                <SearchBtn
                  BgBtn={bgBtn}
                  onClick={this.onClickSearch}
                  data-testid="searchButton"
                >
                  <AiOutlineSearch size={15} color={border} />
                </SearchBtn>
              </SearchContainer>
            )
          }

          const renderHomeSuccessView = () => {
            const noResults = videosList.length > 0

            return noResults ? (
              <ThumbnailContainer>
                {videosList.map(eachThumbnail => (
                  <ThumbnailItem
                    ThumbnailDetails={eachThumbnail}
                    key={eachThumbnail.id}
                  />
                ))}
              </ThumbnailContainer>
            ) : (
              renderNoResults()
            )
          }

          const renderHomeApiStatus = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderHomeSuccessView()
              case apiStatusConstants.inProgress:
                return <LoaderView />
              case apiStatusConstants.failure:
                return <FailureView refresh={this.getVideosData()} />
              default:
                return null
            }
          }

          return (
            <>
              <HomeContainer bgColor={bgColor} data-testid="home">
                {this.renderHomeBanner()}
                <HomeSubContainer>
                  {renderSearchInput()}
                  {renderHomeApiStatus()}
                </HomeSubContainer>
              </HomeContainer>
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Home
