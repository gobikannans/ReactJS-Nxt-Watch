import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import {formatDistanceToNow} from 'date-fns'

import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import AppTheme from '../../context/AppTheme'

import {
  TrendingContainer,
  TrendingNavbar,
  TrendingCard,
  TrendingIcon,
  TrendingHeading,
  TrendingVideoList,
  TrendingList,
  TrendingImg,
  TrendingDetails,
  TrendingListHeading,
  TrendingPara,
  LargeTrendingContainer,
  ChannelImg,
  TrendingDateContainer,
  TrendingViews,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {videoDataList: '', apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/videos/trending'

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
        channel: {
          name: eachVideo.channel.name,
          profileImg: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        date: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        views: eachVideo.view_count,
      }))
      this.setState({
        videoDataList: fetchedData,
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
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#0f0f0f  '
          const navBg = activeTheme === 'light' ? ' #ebebeb' : ' #212121'
          const iconBg = activeTheme === 'light' ? '  #e2e8f0' : '#181818'
          const headingColor = activeTheme === 'light' ? ' #1e293b' : '#ffffff'

          const renderTrendingSuccessView = () => {
            const {videoDataList} = this.state
            return (
              <TrendingVideoList>
                {videoDataList.map(eachThumbnail => {
                  const timeInWord = formatDistanceToNow(
                    new Date(eachThumbnail.date),
                  )
                  console.log(timeInWord)
                  return (
                    <div key={eachThumbnail.id}>
                      <Link
                        to={`/videos/${eachThumbnail.id}`}
                        className="trending-links"
                      >
                        <TrendingList>
                          <TrendingImg
                            src={eachThumbnail.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <TrendingDetails>
                            <ChannelImg
                              src={eachThumbnail.channel.profileImg}
                              alt="channel logo"
                            />
                            <LargeTrendingContainer>
                              <TrendingListHeading ListHeading={headingColor}>
                                {eachThumbnail.title}
                              </TrendingListHeading>
                              <TrendingViews>
                                <TrendingPara>
                                  {eachThumbnail.channel.name}
                                </TrendingPara>
                                <TrendingDateContainer>
                                  <TrendingPara ml="5px">
                                    {eachThumbnail.views} views .
                                  </TrendingPara>
                                  <TrendingPara mll="5px" ml="5px">
                                    {timeInWord} ago
                                  </TrendingPara>
                                </TrendingDateContainer>
                              </TrendingViews>
                            </LargeTrendingContainer>
                          </TrendingDetails>
                        </TrendingList>
                      </Link>
                    </div>
                  )
                })}
              </TrendingVideoList>
            )
          }

          const renderTrendingApiStatus = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderTrendingSuccessView()
              case apiStatusConstants.inProgress:
                return <LoaderView />
              case apiStatusConstants.failure:
                return <FailureView refresh={this.getVideosData} />
              default:
                return null
            }
          }

          return (
            <TrendingContainer bgColor={bgColor} data-testid="trending">
              <TrendingNavbar navBg={navBg}>
                <TrendingCard>
                  <TrendingIcon iconBg={iconBg}>
                    <HiFire size={30} color="#ff0000" />
                  </TrendingIcon>
                  <TrendingHeading color={headingColor}>
                    Trending
                  </TrendingHeading>
                </TrendingCard>
              </TrendingNavbar>
              {renderTrendingApiStatus()}
            </TrendingContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Trending
