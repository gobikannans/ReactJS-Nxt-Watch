import styled from 'styled-components'

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding-bottom: 20px;
  margin-top: 30px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`

export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
`

export const ContactImg = styled.img`
  width: 23%;
`

export const ContactParaEl = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  font-weight: 500;
  width: 80%;
  line-height: 1.2;
`
