import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'

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
  SmallSavedContainer,
  SmallSavedViews,
  ChannelImg,
  SavedViews,
  SavedListHeading,
  SavedDetails,
  SavedPara,
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
                <Link to={`/videos/${eachVideo.id}`} className="saved-links">
                  <SavedList key={eachVideo.id}>
                    <SavedImg
                      src={eachVideo.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <SavedDetails>
                      <SmallSavedContainer>
                        <ChannelImg src={eachVideo.channel.profileImg} />
                        <div>
                          <SavedListHeading ListHeading={headingColor}>
                            {eachVideo.title}
                          </SavedListHeading>
                          <SmallSavedViews>
                            <SavedPara color="#7e858e">
                              {eachVideo.channel.name}
                            </SavedPara>
                            <SavedPara color="#7e858e" ml="5px">
                              . {eachVideo.views} views .
                            </SavedPara>
                            <SavedPara color="#7e858e" ml="5px">
                              {eachVideo.date}
                            </SavedPara>
                          </SmallSavedViews>
                        </div>
                      </SmallSavedContainer>

                      <LargeSavedContainer>
                        <SavedListHeading ListHeading={headingColor}>
                          {eachVideo.title}
                        </SavedListHeading>
                        <SavedPara>{eachVideo.channel.name}</SavedPara>
                        <SavedViews mt="3px">
                          <SavedPara>{eachVideo.views} views .</SavedPara>
                          <SavedPara ml="5px">{timeInWord}</SavedPara>
                        </SavedViews>
                      </LargeSavedContainer>
                    </SavedDetails>
                  </SavedList>
                </Link>
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
                    <HiFire size={30} color="#ff0000" />
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
