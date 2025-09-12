import { colors } from "../config/colors"
import styled from "styled-components"

const Button = ({text, style, ...inputProps}) => {
  return (
    <Container style={style} type="submit" {...inputProps}>
      <Text>{text}</Text>
    </Container>
  )
}

export default Button       

const Container = styled.button`
  outline: none;
  border: none;
  background-color: ${colors.primary};
  /* display: inline-block; */
  border-radius: 5px;
  transform: scale(1);
  transition: all 450ms;
  cursor: pointer;
  text-decoration: none;
  :hover{
    transform: scale(1.02);
  }
  text-align: center;
  width: 200px;
  height: 45px;
display:flex;
justify-content: center;
align-items: center;
font-size: 14px;
:focus {
  outline: none;
  border: none;
}

`

const Text = styled.span`
  color: ${colors.white};
  font-weight: bold;
    font-family: "Mochiy Pop P One", sans-serif;
`

