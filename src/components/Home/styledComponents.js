import styled from 'styled-components'

export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 50px;
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    margin-top: 20px;
  }
`
export const HomeLogo = styled.img`
  width: 50%;
`
export const HomeHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #383838;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 40px;
`
export const HomeBtn = styled.button`
  width: 130px;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #383838;
  background-color: transparent;
  border: 1px solid #383838;
`
export const BannerCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-start;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 115vh;
  overflow: auto;
`
export const HomeSubContainer = styled.div`
  padding-bottom: 40px;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 40px;
  width: 100%;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 5vh;
  width: 500px;
  border: 1px solid #909090;
  margin-top: 20px;

  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const SearchInput = styled.input`
  height: 3vh;
  width: 100%;
  border: none;
  padding-left: 20px;
  background-color: transparent;
  outline: none;
  color: ${props => props.inputColor};
`

export const SearchBtn = styled.button`
  height: 5vh;
  width: 80px;
  background-color: ${props => props.BgBtn};
  border: 1px solid #909090;
  border-right: 0px;
`
export const ThumbnailContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  margin-top: 40px;
  width: 100%;
`
export const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  line-height: 1;

  @media screen and (max-width: 576px) {
    margin-top: 50px;
  }
`

export const NoResultImg = styled.img`
  width: 30%;

  @media screen and (max-width: 576px) {
    width: 50%;
  }
`

export const NoResultHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const NoResultPara = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};

  @media screen and (max-width: 576px) {
    font-size: 16px;
    line-height: 1.6;
  }
`

export const RetryBtn = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  background-color: #4f46e5;
  padding: 10px;
  border: none;
  width: 100px;
  height: 5vh;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`
