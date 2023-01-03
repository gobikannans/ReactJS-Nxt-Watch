import AppTheme from '../../context/AppTheme'
import {
  ContactUsContainer,
  ContactHeading,
  ContactIcons,
  ContactImg,
  ContactParaEl,
} from './styledComponents'

const ContactUs = () => (
  <AppTheme.Consumer>
    {value => {
      const {activeTheme} = value
      const color = activeTheme === 'light' ? '#475569' : '#ffffff'

      return (
        <ContactUsContainer>
          <ContactHeading color={color}> CONTACT US</ContactHeading>
          <ContactIcons>
            <ContactImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt=" facebook logo"
            />
            <ContactImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt=" twitter logo"
            />
            <ContactImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt=" linked in logo"
            />
          </ContactIcons>
          <ContactParaEl color={color}>
            Enjoy! Now to see your channels and recommendations!
          </ContactParaEl>
        </ContactUsContainer>
      )
    }}
  </AppTheme.Consumer>
)

export default ContactUs
