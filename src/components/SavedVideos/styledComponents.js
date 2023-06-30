import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  overflow-y: auto;
  height: 115vh;
`

export const SavedNavbar = styled.div`
  height: 18vh;
  padding-top: 20px;
  padding-left: 40px;
  background-color: ${props => props.navBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  width: 100%;

  @media screen and (max-width: 767px) {
    height: 20vh;
    padding-left: 30px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 25px;
  }
`

export const SavedCard = styled.div`
  display: flex;
  align-items: center;
`

export const SavedIcon = styled.div`
  background-color: ${props => props.iconBg};
  padding: 15px;
  border-radius: 38px;
  margin-right: 30px;

  @media screen and (max-width: 767px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 500px) {
    padding: 10px;
    margin-right: 10px;
  }
`

export const SavedHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 28px;

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`

export const SavedVideoList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 50px;
  margin-left: 40px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;

  @media screen and (max-width: 767px) {
    margin-left: 0px;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media screen and (max-width: 500px) {
    padding-left: 20px;
  }
`

export const SavedList = styled.li`
  width: 80%;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  @media screen and (max-width: 1000px) {
    width: 95%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
  }
`

export const SavedImg = styled.img`
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const SavedDetails = styled.div`
  margin-left: 15px;
  margin-right: 5px;
  line-height: 1.6;
  width: 40%;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0px;
    display: flex;
    align-items: center;
  }
`

export const ChannelImg = styled.img`
  display: none;

  @media screen and (max-width: 576px) {
    display: flex;
    width: 10%;
    height: 30%;
    margin-top: 3px;
    margin-right: 10px;
  }
`

export const LargeSavedContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    margin-top: 10px;
  }
`
export const SavedViews = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    flex-direction: row;
  }
`
export const SavedDateContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SavedListHeading = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 450;
  color: ${props => props.ListHeading};
  text-decoration: none;

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const SavedPara = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-size: ${props => props.size};
  color: #7e858e;
  text-decoration: none;
  margin-left: ${props => props.mll};

  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }

  @media screen and (max-width: 576px) {
    font-size: 13px;
    margin-left: ${props => props.ml};
  }
`

export const SavedFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  text-align: center;
  @media screen and (max-width: 576px) {
    margin-top: 50px;
  }
`

export const SavedFailureImg = styled.img`
  width: 30%;

  @media screen and (max-width: 576px) {
    width: 50%;
  }
`

export const SavedFailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-top: 30px;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const SavedFailurePara = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};

  @media screen and (max-width: 576px) {
    font-size: 14px;
    line-height: 1.6;
  }
`
