import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  background-color: ${props => props.BgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  padding-left: 40px;
  padding-right: 40px;
  position: fixed;
  width: 100%;
  @media screen and (max-width: 767px) {
    height: 13vh;
  }
`

export const HeaderLogo = styled.img`
  width: 38%;

  @media screen and (max-width: 767px) {
    width: 48%;
  }
`
export const HeaderSubContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 80%;
    display: none;
  }
`

export const SmallHeaderSubContainer = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 28%;
  }
`

export const ProfileLogo = styled.img`
  width: 30%;

  @media screen and (max-width: 567px) {
    width: 68%;
  }
`

export const ButtonElLarge = styled.button`
  width: ${props => props.width};
  padding: ${props => props.padding};
  background-color: transparent;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border: ${props => props.border};
  border-style: 'solid'
  border-color: #3b82f6;
  border-radius: 3px;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  background-color: ${props => props.popupBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 5px;

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`
export const LogoutWord = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-bottom: 40px;
`
export const CancelBtn = styled.button`
  color: #909090;
  border: 1px solid #909090;
  border-radius: 4px;
  background-color: transparent;
  padding: 10px;
  margin-right: 18px;
  width: 80px;
  height: 5vh;
  cursor: pointer;
`
export const ConfirmBtn = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 4px;
  border: none;
  padding: 10px;
  width: 80px;
  height: 5vh;
  cursor: pointer;
`
