import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {
  ThumbnailList,
  ThumbnailImg,
  ChannelContainer,
  ChannelViews,
  ChannelDetails,
  ThumbnailPara,
} from './styledComponents'

import './index.css'

import AppTheme from '../../context/AppTheme'

const ThumbnailItem = props => {
  const {ThumbnailDetails} = props
  const {channel, id, date, views, thumbnailUrl, title} = ThumbnailDetails
  const {name, profileImg} = channel

  return (
    <AppTheme.Consumer>
      {value => {
        const {activeTheme} = value
        const color = activeTheme === 'light' ? '#313131' : '#f4f4f4'
        const timeInWord = formatDistanceToNow(new Date(date))
        console.log(timeInWord)
        return (
          <ThumbnailList>
            <Link to={`/videos/${id}`} className="video-links">
              <ThumbnailImg
                src={thumbnailUrl}
                width="100%"
                alt="video thumbnail"
              />
              <ChannelContainer center="flex-start">
                <ThumbnailImg src={profileImg} width="10%" alt="channel logo" />
                <ChannelDetails>
                  <ThumbnailPara size="17px" color={color}>
                    {title}
                  </ThumbnailPara>
                  <ChannelViews>
                    <ThumbnailPara size="16px" color="#7e858e">
                      {name}
                    </ThumbnailPara>
                    <ChannelContainer center="center" width="80%">
                      <ThumbnailPara size="16px" color="#7e858e">
                        {views} views .
                      </ThumbnailPara>
                      <ThumbnailPara size="16px" color="#7e858e" ml="5px">
                        {timeInWord} ago
                      </ThumbnailPara>
                    </ChannelContainer>
                  </ChannelViews>
                </ChannelDetails>
              </ChannelContainer>
            </Link>
          </ThumbnailList>
        )
      }}
    </AppTheme.Consumer>
  )
}

export default ThumbnailItem
