import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  overflow: auto;
  height: 115vh;
`

export const GamingNavbar = styled.div`
  height: 20vh;
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
`

export const GamingCard = styled.div`
  display: flex;
  align-items: center;
`

export const GamingIcon = styled.div`
  background-color: ${props => props.iconBg};
  padding: 15px;
  border-radius: 38px;
  margin-right: 30px;

  @media screen and (max-width: 500px) {
    padding: 15px;
    margin-right: 10px;
  }
`

export const GamingImg = styled.img`
  width: 90%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const GamingHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 28px;

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`

export const GamingVideoList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;
  margin-top: 50px;
  padding-right: 20px;
  padding-left: 20px;
  width: 100%;
`
export const GamingList = styled.li`
  width: 30%;
  margin-bottom: 50px;

  @media screen and (max-width: 576px) {
    width: 45%;
    margin-bottom: 40px;
  }
`

export const GamingDetails = styled.div`
  line-height: 0.8;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const GamingListHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.listHeading};

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const GamingPara = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: ${props => props.size};
  color: #475569;
  text-decoration: none;
  margin-left: ${props => props.ml};
  line-height: 1.3;

  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`
