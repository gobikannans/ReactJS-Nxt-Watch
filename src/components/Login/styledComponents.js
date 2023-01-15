import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const LoginContainer = styled.div`
  width: 30%;
  height: 60%;
  border-radius: 5px;
  box-shadow: ${props => props.bs};
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.loginBg};

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`
export const CompanyLogo = styled.img`
  width: 50%;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Form = styled.form`
  width: 100%;
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const CustomLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 500;
`
export const CustomInput = styled.input`
  background-color: transparent;
  width: 100%;
  height: 5vh;
  padding: 5px;
  padding-left: 10px;
  font-family: 'Roboto';
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.bc};
  border-radius: 3px;
  outline: none;
`
export const VisiblePassword = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 13px;
  padding: 0px;
`
export const CheckLabel = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.labelColor};
`

export const CheckInput = styled.input`
  border: 1px solid #cbd5e1;
  margin: 0px;
  margin-right: 5px;
  outline: none;
  margin-top: 1px;
`

export const LoginBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  border-radius: 5px;
  align-self: center;
  margin-top: 30px;
  cursor: pointer;
`

export const GuestBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  border-radius: 5px;
  align-self: center;
  margin-top: 15px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: #ff0000;
`
