import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  overflow: auto;
  height: 115vh;
`

export const TrendingNavbar = styled.div`
  height: 20vh;
  padding-top: 10px;
  padding-left: 30px;
  background-color: ${props => props.navBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  width: 100%;

  @media screen and (max-width: 767px) {
    height: 20vh;
  }
`

export const TrendingCard = styled.div`
  display: flex;
  align-items: center;
`

export const TrendingIcon = styled.div`
  background-color: ${props => props.iconBg};
  padding: 15px;
  border-radius: 38px;
  margin-right: 30px;

  @media screen and (max-width: 500px) {
    padding: 10px;
    margin-right: 10px;
  }
`

export const TrendingHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 28px;

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`

export const TrendingVideoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding-top: 50px;
  margin-left: 40px;
  padding-left: 40px;
  width: 100%;

  @media screen and (max-width: 776px) {
    margin-left: 0px;
    padding-right: 20px;
  }

  @media screen and (max-width: 577px) {
    padding-left: 20px;
  }
`

export const TrendingList = styled.li`
  width: 80%;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const TrendingImg = styled.img`
  width: 50%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const TrendingDetails = styled.div`
  margin-left: 15px;
  margin-right: 5px;
  line-height: 1.6;
  width: 48%;
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

export const LargeTrendingContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    margin-top: 10px;
  }
`
export const TrendingViews = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    flex-direction: row;
  }
`
export const TrendingDateContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrendingListHeading = styled.p`
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

export const TrendingPara = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-size: ${props => props.size};
  color: #7e858e;
  text-decoration: none;
  margin-left: ${props => props.mll};

  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }

  @media screen and (max-width: 576px) {
    font-size: 12px;
    margin-left: ${props => props.ml};
  }
`
