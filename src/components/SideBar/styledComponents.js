import styled from 'styled-components'

export const HomeBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  height: 115vh;
  background-color: ${props => props.bgColor};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HomeBarItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  padding: 0px;
  margin-top: 30px;
`

export const HomeIcons = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColour};
  transform-origin: center center;
`
export const ParaEl = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 15px;
  color: ${props => props.color};
`
