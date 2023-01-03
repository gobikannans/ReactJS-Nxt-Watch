import styled from 'styled-components'

export const FailureContainer = styled.div`
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

export const FailureImg = styled.img`
  width: 30%;

  @media screen and (max-width: 576px) {
    width: 50%;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const FailurePara = styled.p`
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
`
