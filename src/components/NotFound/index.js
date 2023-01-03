import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

import AppTheme from '../../context/AppTheme'

const NotFound = () => (
  <AppTheme.Consumer>
    {value => {
      const {activeTheme} = value

      const notFoundImg =
        activeTheme === 'light'
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#181818 '
      const headingColor = activeTheme === 'light' ? ' #1e293b' : '#ffffff'
      const paraColor = activeTheme === 'light' ? ' #64748b' : '#94a3b8'

      return (
        <NotFoundContainer bgColor={bgColor}>
          <NotFoundImg src={notFoundImg} alt="not found" />
          <NotFoundHeading color={headingColor}>Page Not Found</NotFoundHeading>
          <NotFoundPara color={paraColor}>
            we are sorry, the page you requested could not be found.
          </NotFoundPara>
        </NotFoundContainer>
      )
    }}
  </AppTheme.Consumer>
)

export default NotFound
