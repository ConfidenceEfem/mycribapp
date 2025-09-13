import styled from 'styled-components'
import { colors } from '../config/colors'
import img from "../assets/logo.png"
import Button from './Button'
import {NavLink, useNavigate} from "react-router"
import MenuIcon from '@mui/icons-material/Menu';
// import {} from "@mui/icons-material"

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
            <Hamburger>
                <MenuIcon style={{color: colors?.primary}}/>
            </Hamburger>
        </Wrapper>
    </Container>
  )
}

export default Header

const Hamburger = styled.div`
display:none;
@media screen and (max-width: 800px){
    display:flex;
}
`

const Nav = styled(NavLink)`
cursor: pointer;
text-decoration: none;
color: ${colors.primary};
`

const Logo = styled.img`
height: 80px;
@media screen and (max-width: 500px){
height: 60px;
}
`

const Navs = styled.div`
display:flex;
align-items: center;
gap: 20px;
@media screen and (max-width: 800px){
    display:none;
}
`
const Right = styled.div`
display:flex;
align-items: center;
gap: 20px;
@media screen and (max-width: 800px){
    display:none;
}
`

const Left = styled.div`
display:flex;
align-items: center;
gap: 30px;
flex:1;

/* @media screen and (max-width: 1200px){
    flex: none;
    margin-right: 30px;
} */
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