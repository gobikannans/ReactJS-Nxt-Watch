import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  overflow: auto;
  height: 115vh;
`

export const SavedNavbar = styled.div`
  height: 18vh;
  padding-top: 30px;
  padding-left: 50px;
  background-color: ${props => props.navBg};
  align-self: flex-start;
  width: 100%;
`

export const SavedCard = styled.div`
  display: flex;
  align-items: center;
`

export const SavedIcon = styled.div`
  background-color: ${props => props.iconBg};
  padding: 25px;
  border-radius: 38px;
  margin-right: 30px;
`

export const SavedHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';

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
  padding-right: 20px;
  width: 100%;

  @media screen and (max-width: 776px) {
    margin-left: 0px;
  }
`

export const SavedList = styled.li`
  width: 80%;
  margin-bottom: 80px;
  display: flex;

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
  width: 39%;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0px;
  }
`
export const SmallSavedContainer = styled.div`
  display: none;

  @media screen and (max-width: 576px) {
    display: flex;
    margin-top: 10px;
  }
`

export const SmallSavedViews = styled.div`
  display: flex;
`

export const ChannelImg = styled.img`
  width: 10%;
  height: 10%;
  margin-right: 10px;
`

export const LargeSavedContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const SavedViews = styled.div`
  display: flex;
  margin-top: ${props => props.mt};
`

export const SavedListHeading = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 450;
  color: ${props => props.ListHeading};
  text-decoration: none;

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
  margin-left: ${props => props.ml};

  @media screen and (max-width: 576px) {
    font-size: 13px;
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
    font-size: 16px;
    line-height: 1.6;
  }
`
