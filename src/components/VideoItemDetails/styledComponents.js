import styled from 'styled-components'

export const VideoContainer = styled.div`
  padding: 30px;
  height: 115vh;
  width: 100%;
  background-color: ${props => props.bgColor};
  overflow: auto;

  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const VideoDetailsIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${props => props.width};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};

  @media screen and (max-width: 767px) {
    align-items: flex-start;
    margin-top: 40px;
  }
`

export const VideoHeading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
`
export const DetailsPara = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-size: ${props => props.size};
  color: ${props => props.color};
  text-decoration: none;
  margin-left: ${props => props.ml};
  margin-bottom: ${props => props.mb};
  padding-bottom: ${props => props.pb};
`
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  margin-right: ${props => props.mr};
  cursor: pointer;
`
export const VideoBtn = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-right: 10px;
  cursor: pointer;
`
export const ChannelContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
`

export const ChannelDetails = styled.div`
  margin-left: 18px;
  margin-top: 0px;
`
export const ChannelImg = styled.img`
  width: 4%;
  height: 60%;
  margin-top: 18px;

  @media screen and (max-width: 767px) {
    width: 8%;
    height: 45%;
  }
`
export const VideoPara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
  font-weight: ${props => props.fw};
  margin-left: 50px;

  @media screen and (max-width: 767px) {
    margin-left: 0px;
  }
`
