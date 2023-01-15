import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import {HiHome, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {ImCross} from 'react-icons/im'

import AppTheme from '../../context/AppTheme'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderSubContainer,
  SmallHeaderSubContainer,
  ButtonElLarge,
  ProfileLogo,
  PopupContainer,
  LogoutWord,
  CancelBtn,
  ConfirmBtn,
  HomeBarItems,
  HomeIcons,
  ParaEl,
  SmallSideBarContainer,
  CloseIcon,
} from './styledComponents'

import './index.css'

class Header extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, changeTheme, activeTabItem, activeTab} = value

          const BgColor = activeTheme === 'light' ? '#ffffff' : '#313131'
          const logoutColor = activeTheme === 'light' ? '#00306e' : '#ffffff'

          const onChangeTheme = () => {
            const theme = activeTheme === 'light' ? 'dark' : 'light'
            changeTheme(theme)
          }

          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

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
            <HeaderContainer BgColor={`${BgColor}`}>
              <Link to="/">
                <HeaderLogo
                  src={
                    activeTheme === 'light'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <HeaderSubContainer>
                <ButtonElLarge
                  border="none"
                  onClick={onChangeTheme}
                  data-testid="theme"
                >
                  {activeTheme === 'light' ? (
                    <BsMoon size={30} />
                  ) : (
                    <BsBrightnessHigh size={30} color="#ffffff" />
                  )}
                </ButtonElLarge>
                <ButtonElLarge border="none">
                  <ProfileLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ButtonElLarge>
                <Popup
                  modal
                  trigger={
                    <ButtonElLarge
                      width="110px"
                      padding="6px"
                      border={
                        activeTheme === 'light'
                          ? '2px solid #3b82f6'
                          : '2px solid #ffffff'
                      }
                      color={activeTheme === 'light' ? '#3b82f6' : '#ffffff'}
                    >
                      Logout
                    </ButtonElLarge>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer popupBg={BgColor}>
                      <LogoutWord color={logoutColor}>
                        Are you sure, you want to logout?
                      </LogoutWord>
                      <div>
                        <CancelBtn onClick={() => close()}>Cancel</CancelBtn>
                        <ConfirmBtn onClick={onClickLogout}>Confirm</ConfirmBtn>
                      </div>
                    </PopupContainer>
                  )}
                </Popup>
              </HeaderSubContainer>

              <SmallHeaderSubContainer>
                <ButtonElLarge
                  border="none"
                  onClick={onChangeTheme}
                  data-testid="theme"
                >
                  {activeTheme === 'light' ? (
                    <BsMoon size={28} />
                  ) : (
                    <BsBrightnessHigh size={28} color="#ffffff" />
                  )}
                </ButtonElLarge>

                <div className="small-nav">
                  <Popup
                    modal
                    trigger={
                      <ButtonElLarge
                        border="none"
                        color={activeTheme === 'light' ? '#000000' : '#ffffff'}
                        onClick={this.onClickNav}
                      >
                        <GiHamburgerMenu size={28} />
                      </ButtonElLarge>
                    }
                    className="my-popup"
                    position="right center"
                  >
                    {close => (
                      <SmallSideBarContainer popupBg={BgColor}>
                        <div>
                          <CloseIcon
                            color={
                              activeTheme === 'light' ? '#000000' : '#ffffff'
                            }
                          >
                            <ImCross onClick={() => close()} />
                          </CloseIcon>
                          <HomeBarItems>
                            <Link
                              to="/"
                              onClick={onActiveHome}
                              className="nav-links"
                            >
                              <HomeIcons
                                bgColour={
                                  activeTab === 'HOME' ? bgColour : null
                                }
                                onClick={() => close()}
                              >
                                <HiHome
                                  size={18}
                                  color={
                                    activeTab === 'HOME' ? 'red' : iconColor
                                  }
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
                                bgColour={
                                  activeTab === 'TRENDING' ? bgColour : null
                                }
                                onClick={() => close()}
                              >
                                <HiFire
                                  size={18}
                                  color={
                                    activeTab === 'TRENDING' ? 'red' : iconColor
                                  }
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
                                bgColour={
                                  activeTab === 'GAMING' ? bgColour : null
                                }
                                onClick={() => close()}
                              >
                                <SiYoutubegaming
                                  size={18}
                                  color={
                                    activeTab === 'GAMING' ? 'red' : iconColor
                                  }
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
                                bgColour={
                                  activeTab === 'SAVEDVIDEOS' ? bgColour : null
                                }
                                onClick={() => close()}
                              >
                                <MdPlaylistAdd
                                  size={18}
                                  color={
                                    activeTab === 'SAVEDVIDEOS'
                                      ? 'red'
                                      : iconColor
                                  }
                                  className="nav-icons"
                                />
                                <ParaEl color={color}>Saved Videos</ParaEl>
                              </HomeIcons>
                            </Link>
                          </HomeBarItems>
                        </div>
                      </SmallSideBarContainer>
                    )}
                  </Popup>
                </div>

                <Popup
                  modal
                  trigger={
                    <ButtonElLarge
                      border="none"
                      color={activeTheme === 'light' ? '#000000' : '#ffffff'}
                    >
                      <FiLogOut size={28} />
                    </ButtonElLarge>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer popupBg={BgColor}>
                      <LogoutWord color={logoutColor}>
                        Are you sure you want to logout?
                      </LogoutWord>
                      <div>
                        <CancelBtn onClick={() => close()}>Cancel</CancelBtn>
                        <ConfirmBtn onClick={onClickLogout}>Confirm</ConfirmBtn>
                      </div>
                    </PopupContainer>
                  )}
                </Popup>
              </SmallHeaderSubContainer>
            </HeaderContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default withRouter(Header)
