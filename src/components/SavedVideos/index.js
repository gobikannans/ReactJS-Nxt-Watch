import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'

import {formatDistanceToNow} from 'date-fns'

import {
  SavedContainer,
  SavedNavbar,
  SavedCard,
  SavedHeading,
  SavedIcon,
  SavedVideoList,
  SavedList,
  SavedImg,
  ChannelImg,
  SavedViews,
  SavedListHeading,
  SavedDetails,
  SavedPara,
  SavedDateContainer,
  LargeSavedContainer,
  SavedFailureContainer,
  SavedFailureImg,
  SavedFailureHeading,
  SavedFailurePara,
} from './styledComponents'

import './index.css'

import AppTheme from '../../context/AppTheme'

class SavedVideos extends Component {
  renderSavedVideos = (savedVideos, activeTheme) => {
    console.log(savedVideos)

    const noSaved = savedVideos.length === 0

    const headingColor = activeTheme === 'light' ? ' #1e293b' : '#ffffff'
    const failureHeadingColor = activeTheme === 'light' ? ' #1e293b' : '#ffffff'
    const failureParaColor = activeTheme === 'light' ? ' #64748b' : '#94a3b8'

    const renderNoSaved = () => (
      <SavedFailureContainer>
        <SavedFailureImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <SavedFailureHeading color={failureHeadingColor}>
          No saved videos found
        </SavedFailureHeading>
        <SavedFailurePara color={failureParaColor}>
          You can save your videos while watching them
        </SavedFailurePara>
      </SavedFailureContainer>
    )

    return (
      <>
        {noSaved ? (
          renderNoSaved()
        ) : (
          <SavedVideoList>
            {savedVideos.map(eachVideo => {
              const timeInWord = formatDistanceToNow(new Date(eachVideo.date))
              console.log(timeInWord)
              return (
                <div key={eachVideo.id}>
                  <Link to={`/videos/${eachVideo.id}`} className="saved-links">
                    <SavedList>
                      <SavedImg
                        src={eachVideo.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <SavedDetails>
                        <ChannelImg
                          src={eachVideo.channel.profileImg}
                          alt="channel logo"
                        />
                        <LargeSavedContainer>
                          <SavedListHeading ListHeading={headingColor}>
                            {eachVideo.title}
                          </SavedListHeading>
                          <SavedViews>
                            <SavedPara>{eachVideo.channel.name}</SavedPara>
                            <SavedDateContainer>
                              <SavedPara ml="5px">
                                {eachVideo.views} views .
                              </SavedPara>
                              <SavedPara mll="5px" ml="5px">
                                {timeInWord} ago
                              </SavedPara>
                            </SavedDateContainer>
                          </SavedViews>
                        </LargeSavedContainer>
                      </SavedDetails>
                    </SavedList>
                  </Link>
                </div>
              )
            })}
          </SavedVideoList>
        )}
      </>
    )
  }

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, savedVideos} = value
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#0f0f0f  '
          const navBg = activeTheme === 'light' ? ' #ebebeb' : ' #212121'
          const iconBg = activeTheme === 'light' ? '  #e2e8f0' : '#181818'
          const headingColor = activeTheme === 'light' ? ' #1e293b' : '#ffffff'

          return (
            <SavedContainer bgColor={bgColor} data-testid="savedVideos">
              <SavedNavbar navBg={navBg}>
                <SavedCard>
                  <SavedIcon iconBg={iconBg}>
                    <MdPlaylistAdd size={30} color="#ff0000" />
                  </SavedIcon>
                  <SavedHeading color={headingColor}>Saved Videos</SavedHeading>
                </SavedCard>
              </SavedNavbar>
              {this.renderSavedVideos(savedVideos, activeTheme)}
            </SavedContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default SavedVideos
