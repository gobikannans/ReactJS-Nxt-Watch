import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  overflow: auto;
  height: 115vh;
`

export const GamingNavbar = styled.div`
  height: 18vh;
  padding-top: 30px;
  padding-left: 50px;
  background-color: ${props => props.navBg};
  align-self: flex-start;
  width: 100%;
`

export const GamingCard = styled.div`
  display: flex;
  align-items: center;
`

export const GamingIcon = styled.div`
  background-color: ${props => props.iconBg};
  padding: 25px;
  border-radius: 38px;
  margin-right: 30px;
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
  font-size: ${props => props.size};

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
  line-height: 1;
  width: 100%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const GamingListHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.listHeading};

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

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`
