import {Component} from 'react'
import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import AppTheme from '../../context/AppTheme'

import {
  GamingContainer,
  GamingNavbar,
  GamingCard,
  GamingIcon,
  GamingHeading,
  GamingVideoList,
  GamingList,
  GamingImg,
  GamingDetails,
  GamingListHeading,
  GamingPara,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {videoList: '', apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/videos/gaming'

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const fetchedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        views: eachVideo.view_count,
      }))
      this.setState({
        videoList: fetchedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#0f0f0f '
          const navBg = activeTheme === 'light' ? ' #ebebeb' : ' #212121'
          const iconBg = activeTheme === 'light' ? '  #e2e8f0' : '#181818'
          const headingColor = activeTheme === 'light' ? ' #1e293b' : '#ffffff'

          const renderGamingSuccessView = () => {
            const {videoList} = this.state
            return (
              <GamingVideoList>
                {videoList.map(eachThumbnail => (
                  <GamingList key={eachThumbnail.id}>
                    <Link
                      to={`/videos/${eachThumbnail.id}`}
                      className="gaming-link"
                    >
                      <GamingImg
                        src={eachThumbnail.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <GamingDetails>
                        <GamingListHeading
                          listHeading={headingColor}
                          size="18px"
                        >
                          {eachThumbnail.title}
                        </GamingListHeading>
                        <GamingPara>
                          {eachThumbnail.views} Watching Worldwide
                        </GamingPara>
                      </GamingDetails>
                    </Link>
                  </GamingList>
                ))}
              </GamingVideoList>
            )
          }

          const renderGamingApiStatus = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderGamingSuccessView()
              case apiStatusConstants.inProgress:
                return <LoaderView />
              case apiStatusConstants.failure:
                return <FailureView refresh={this.getVideosData} />
              default:
                return null
            }
          }

          return (
            <GamingContainer bgColor={bgColor} data-testid="gaming">
              <GamingNavbar navBg={navBg}>
                <GamingCard>
                  <GamingIcon iconBg={iconBg}>
                    <SiYoutubegaming size={30} color="#ff0000" />
                  </GamingIcon>
                  <GamingHeading color={headingColor}>Gaming</GamingHeading>
                </GamingCard>
              </GamingNavbar>
              {renderGamingApiStatus()}
            </GamingContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Gaming
