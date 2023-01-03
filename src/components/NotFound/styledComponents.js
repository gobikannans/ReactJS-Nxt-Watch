import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 115vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 0.5;
`
export const NotFoundImg = styled.img`
  width: 40%;

  @media screen and (max-width: 776px) {
    width: 50%;
  }
`

export const NotFoundHeading = styled.h1`
  font-size: 40px;
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-top: 50px;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const NotFoundPara = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => props.color};

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
