import {Component} from 'react'

import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import AppTheme from '../../context/AppTheme'

import './index.css'

import {
  VideoContainer,
  VideoDetails,
  VideoDetailsIcon,
  VideoHeading,
  DetailsPara,
  VideoBtn,
  BtnContainer,
  ChannelContainer,
  ChannelImg,
  ChannelDetails,
  VideoPara,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoItemList: '',
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSave: false,
  }

  componentDidMount() {
    this.getVideoItemData()
  }

  getVideoItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = `https://apis.ccbp.in/videos/${id}`

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

      const fetchedData = data.video_details
      const convertedData = {
        channel: {
          name: fetchedData.channel.name,
          profileImg: fetchedData.channel.profile_image_url,
          count: fetchedData.channel.subscriber_count,
        },
        description: fetchedData.description,
        id: fetchedData.id,
        date: fetchedData.published_at,
        thumbnailUrl: fetchedData.thumbnail_url,
        title: fetchedData.title,
        videoUrl: fetchedData.video_url,
        views: fetchedData.view_count,
      }

      this.setState({
        videoItemList: convertedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  onClickDisLike = () => {
    this.setState({isLiked: false, isDisliked: true})
  }

  onClickSaved = async () => {
    const {isSave} = this.state
    if (isSave) {
      await this.setState({isSave: false})
    } else {
      await this.setState({isSave: true})
    }
  }

  renderVideoSuccessView = (headingColor, addSavedVideos, savedVideos) => {
    const {videoItemList, isLiked, isDisliked} = this.state
    const {description, views, videoUrl, date, title, channel} = videoItemList
    const {name, profileImg, count} = channel

    const isSave =
      savedVideos.filter(eachVideo => eachVideo.id === videoItemList.id)
        .length !== 0

    console.log(isSave)

    const dateInWord = formatDistanceToNow(new Date(date))

    const activeLikeColor = isLiked ? '#2563eb ' : '#64748b'
    const activeDislikeColor = isDisliked ? '#2563eb ' : '#64748b'
    const activeSaveColor = isSave ? '#2563eb ' : '#64748b'
    const savedWrd = isSave ? 'Saved' : 'Save'

    const onSave = () => {
      addSavedVideos(videoItemList)
    }

    return (
      <>
        <ReactPlayer controls url={videoUrl} className="react" />
        <VideoHeading color={headingColor} mb="30px">
          {title}
        </VideoHeading>
        <VideoDetails mb="30px">
          <div>
            <DetailsPara size="15px" color="#7e858e">
              {views} views . {dateInWord} ago
            </DetailsPara>
          </div>
          <VideoDetailsIcon width="20%">
            <BtnContainer onClick={this.onClickLike}>
              <AiOutlineLike size={20} color={activeLikeColor} />
              <VideoBtn color={activeLikeColor}>Like</VideoBtn>
            </BtnContainer>
            <BtnContainer onClick={this.onClickDisLike}>
              <AiOutlineDislike size={20} color={activeDislikeColor} />
              <VideoBtn color={activeDislikeColor}>Dislike</VideoBtn>
            </BtnContainer>
            <BtnContainer onClick={onSave} ml="5px">
              <MdPlaylistAdd size={20} color={activeSaveColor} />
              <VideoBtn color={activeSaveColor}>{savedWrd}</VideoBtn>
            </BtnContainer>
          </VideoDetailsIcon>
        </VideoDetails>
        <div>
          <hr className="hr-line" />
        </div>

        <ChannelContainer>
          <ChannelImg src={profileImg} alt="channel logo" />
          <ChannelDetails>
            <VideoHeading color={headingColor} mt="0px">
              {name}
            </VideoHeading>
            <DetailsPara mb="40px" size="13px" color="#7e858e">
              {count} subscribers
            </DetailsPara>
          </ChannelDetails>
        </ChannelContainer>
        <VideoPara color={headingColor} fw="400">
          {description}
        </VideoPara>
      </>
    )
  }

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, addSavedVideos, savedVideos} = value
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#0f0f0f '
          const headingColor = activeTheme === 'light' ? ' #313131' : '#ffffff'

          const renderVideoApiStatus = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusConstants.success:
                return this.renderVideoSuccessView(
                  headingColor,
                  addSavedVideos,
                  savedVideos,
                )
              case apiStatusConstants.inProgress:
                return <LoaderView />
              case apiStatusConstants.failure:
                return <FailureView refresh={this.getVideoItemData} />
              default:
                return null
            }
          }

          return (
            <VideoContainer bgColor={bgColor} data-testid="videoItemDetails">
              {renderVideoApiStatus()}
            </VideoContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default VideoItemDetails
