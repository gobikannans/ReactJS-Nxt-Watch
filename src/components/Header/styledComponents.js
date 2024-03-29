import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  background-color: ${props => props.BgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  position: fixed;
  width: 100%;

  @media screen and (max-width: 767px) {
    height: 12vh;
  }

  @media screen and (max-width: 550px) {
    height: 13vh;
  }

  @media screen and (max-width: 400px) {
    padding-left: 20px;
    padding-right: 15px;
  }
`

export const HeaderLogo = styled.img`
  width: 130px;

  @media screen and (max-width: 767px) {
    width: 110px;
  }

  @media screen and (max-width: 500px) {
    width: 105px;
  }
`
export const HeaderSubContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SmallHeaderSubContainer = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 43%;
  }
`

export const ProfileLogo = styled.img`
  width: 24%;

  @media screen and (max-width: 500px) {
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

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`
export const LogoutWord = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-bottom: 40px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
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

  @media screen and (max-width: 400px) {
    width: 60px;
    font-size: 13px;
  }
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

  @media screen and (max-width: 400px) {
    width: 60px;
    font-size: 13px;
  }
`

export const HomeBarItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  padding: 0px;
  margin-top: 20px;
`

export const HomeIcons = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColour};
  width: 100%;
`
export const ParaEl = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 15px;
  color: ${props => props.color};
`
export const SmallSideBarContainer = styled.div`
  background-color: ${props => props.popupBg};
  padding: 0px;
  margin: 0px;
  height: 100vh;
  width: 50%;
`

export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  padding-right: 20px;
  color: ${props => props.color};
`
