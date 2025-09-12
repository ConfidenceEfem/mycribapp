import styled from 'styled-components'
import { colors } from '../config/colors'
import img from "../assets/logo.png"
import Button from './Button'
import {NavLink, useNavigate} from "react-router"

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo src={img} alt="Logo" />
                <Navs>
                    <Nav style={{color: "black"}} to={"/"}>Home</Nav>
                    <Nav style={{color: "black"}} to={"/services"}>Services</Nav>
                    <Nav style={{color: "black"}} to={"/agent"}>Agent</Nav>
                    <Nav style={{color: "black"}} to={"/contact"}>Contact</Nav>
                </Navs>
            </Left>
            <Right>
               <Nav to={"/signup"}>Sign up</Nav>
               <Button text="Login"  onClick={() => {
                navigate("/login")
               }} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Header

const Nav = styled(NavLink)`
cursor: pointer;
text-decoration: none;
color: ${colors.primary};
`

const Logo = styled.img`
height: 80px;
`

const Navs = styled.div`
display:flex;
align-items: center;
gap: 20px;
`
const Right = styled.div`
display:flex;
align-items: center;
gap: 20px;
`

const Left = styled.div`
display:flex;
align-items: center;
gap: 30px;
flex:1;
`

const Wrapper = styled.div`
width: 90%;
display:flex;
align-items: center;
`

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${colors.white};
    display:flex;
    justify-content: center;
    align-items: center;
font-family: "montserrat", sans-serif;
font-weight: 500;
position: fixed;

`