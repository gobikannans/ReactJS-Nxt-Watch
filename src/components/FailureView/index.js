import {
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryBtn,
} from './styledComponents'
import AppTheme from '../../context/AppTheme'

const FailureView = props => {
  const {refresh} = props
  return (
    <AppTheme.Consumer>
      {value => {
        const {activeTheme} = value

        const ErrorImg =
          activeTheme === 'light'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        const headingColor = activeTheme === 'light' ? ' #1e293b' : '#ffffff'
        const paraColor = activeTheme === 'light' ? ' #64748b' : '#94a3b8'

        return (
          <FailureContainer>
            <FailureImg src={ErrorImg} alt="failure view" />
            <FailureHeading color={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara color={paraColor}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <RetryBtn type="button" onClick={refresh}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </AppTheme.Consumer>
  )
}

export default FailureView
