import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginBgContainer,
  LoginContainer,
  CompanyLogo,
  Form,
  CustomLabel,
  CustomInput,
  VisiblePassword,
  CheckInput,
  CheckLabel,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

import AppTheme from '../../context/AppTheme'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    visibility: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = event => {
    if (event.target.checked) {
      this.setState({visibility: true})
    } else {
      this.setState({visibility: false})
    }
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      visibility,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value

          const bgColor = activeTheme === 'light' ? '#ffffff' : '#313131'
          const loginBg = activeTheme === 'light' ? '#ffffff' : '#181818'
          const color = activeTheme === 'light' ? '#7e858e' : ' #f1f1f1'
          const showColor = activeTheme === 'light' ? '#000000' : '#ffffff'
          const boxShadow =
            activeTheme === 'light' ? '0px 4px 4px 4px #f1f1f1' : ''
          const borderColor = activeTheme === 'light' ? ' #cbd5e1' : '#64748b'

          const websiteLogo =
            activeTheme === 'light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <LoginBgContainer bgColor={bgColor}>
              <LoginContainer loginBg={loginBg} bs={boxShadow}>
                <CompanyLogo src={websiteLogo} alt="website logo" />
                <Form onSubmit={this.onSubmitForm}>
                  <CustomLabel htmlFor="username" color={color}>
                    USERNAME
                  </CustomLabel>
                  <CustomInput
                    id="username"
                    placeholder="Username"
                    type="text"
                    onChange={this.onChangeUsername}
                    value={username}
                    bc={borderColor}
                  />
                  <CustomLabel htmlFor="password" color={color}>
                    PASSWORD
                  </CustomLabel>
                  <CustomInput
                    id="password"
                    type={visibility ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                    bc={borderColor}
                  />
                  <VisiblePassword>
                    <CheckInput
                      id="checkbox"
                      type="checkbox"
                      onChange={this.onShowPassword}
                    />
                    <CheckLabel htmlFor="checkbox" labelColor={showColor}>
                      Show Password
                    </CheckLabel>
                  </VisiblePassword>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {showSubmitError ? <ErrorMsg>*{errorMsg}</ErrorMsg> : null}
                </Form>
              </LoginContainer>
            </LoginBgContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}
export default Login
