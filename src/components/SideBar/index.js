import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiHome, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  HomeBarContainer,
  HomeBarItems,
  HomeIcons,
  ParaEl,
} from './styledComponents'

import ContactUs from '../ContactUs'
import AppTheme from '../../context/AppTheme'

import './index.css'

class SideBar extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, activeTabItem, activeTab} = value

          const bgColor = activeTheme === 'light' ? '#ffffff' : ' #313131'
          const color = activeTheme === 'light' ? '#000000' : ' #ebebeb'
          const iconColor = activeTheme === 'light' ? '#424242' : '#7e858e'
          const bgColour = activeTheme === 'light' ? ' #d7dfe9' : '#606060'

          const onActiveHome = () => {
            activeTabItem('HOME')
          }

          const onActiveTrending = () => {
            activeTabItem('TRENDING')
          }

          const onActiveGaming = () => {
            activeTabItem('GAMING')
          }

          const onActiveSavedVideos = () => {
            activeTabItem('SAVEDVIDEOS')
          }

          return (
            <HomeBarContainer bgColor={bgColor}>
              <HomeBarItems>
                <Link to="/" onClick={onActiveHome} className="nav-links">
                  <HomeIcons bgColour={activeTab === 'HOME' ? bgColour : null}>
                    <HiHome
                      size={18}
                      color={activeTab === 'HOME' ? 'red' : iconColor}
                      className="nav-icons"
                    />
                    <ParaEl color={color}>Home</ParaEl>
                  </HomeIcons>
                </Link>
                <Link
                  to="/trending"
                  onClick={onActiveTrending}
                  className="nav-links"
                >
                  <HomeIcons
                    bgColour={activeTab === 'TRENDING' ? bgColour : null}
                  >
                    <HiFire
                      size={18}
                      color={activeTab === 'TRENDING' ? 'red' : iconColor}
                      className="nav-icons"
                    />
                    <ParaEl color={color}>Trending</ParaEl>
                  </HomeIcons>
                </Link>

                <Link
                  to="/gaming"
                  onClick={onActiveGaming}
                  className="nav-links"
                >
                  <HomeIcons
                    bgColour={activeTab === 'GAMING' ? bgColour : null}
                  >
                    <SiYoutubegaming
                      size={18}
                      color={activeTab === 'GAMING' ? 'red' : iconColor}
                      className="nav-icons"
                    />
                    <ParaEl color={color}>Gaming</ParaEl>
                  </HomeIcons>
                </Link>

                <Link
                  to="/saved-videos"
                  onClick={onActiveSavedVideos}
                  className="nav-links"
                >
                  <HomeIcons
                    bgColour={activeTab === 'SAVEDVIDEOS' ? bgColour : null}
                  >
                    <MdPlaylistAdd
                      size={18}
                      color={activeTab === 'SAVEDVIDEOS' ? 'red' : iconColor}
                      className="nav-icons"
                    />
                    <ParaEl color={color}>Saved Videos</ParaEl>
                  </HomeIcons>
                </Link>
              </HomeBarItems>
              <ContactUs />
            </HomeBarContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default SideBar
