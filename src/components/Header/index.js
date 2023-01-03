import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

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
} from './styledComponents'

import './index.css'

class Header extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, changeTheme} = value

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
                <ButtonElLarge
                  border="none"
                  color={activeTheme === 'light' ? '#000000' : '#ffffff'}
                >
                  <GiHamburgerMenu size={28} />
                </ButtonElLarge>
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
