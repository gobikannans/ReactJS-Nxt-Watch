import styled from 'styled-components'

export const ThumbnailList = styled.li`
  width: 45%;
  height: 50vh;
  margin-right: 15px;
  margin-bottom: 40px;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 33px;
  }
`

export const ThumbnailImg = styled.img`
  margin-bottom: 10px;
  margin-top: 4px;
`
export const ChannelViews = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    display: flex;
  }
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: ${props => props.center};
  width: ${props => props.width};
`

export const ChannelDetails = styled.div`
  margin-left: 14px;
  margin-right: 5px;
  line-height: 1.6;
`

export const ThumbnailPara = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-size: ${props => props.size};
  color: ${props => props.color};
  text-decoration: none;
  margin-left: ${props => props.ml};
`
