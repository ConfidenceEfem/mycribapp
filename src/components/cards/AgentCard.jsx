import { useNavigate } from "react-router"
import img from "../../assets/avatar.png"
import { colors } from "../../config/colors"
import Button from '../Button'
import {VerifiedRounded,WhatsApp, Phone,} from "@mui/icons-material"
import styled from "styled-components"

const AgentCard = ({props}) => {

    const navigate = useNavigate()

  return (
    <Container
    onClick={()=>{
        navigate("i")
    }}
    >
           <Profile src={props?.avatarUrl? props?.avatarUrl : img}/>
           <Top>
               <Verified>
                   <VerifiedRounded/>
                   </Verified>
           </Top>
           <AgentDetails>
               <AgentNames>{props?.firstName} {props?.lastName}</AgentNames>
               <AgentEmail>{props?.email}</AgentEmail>
               <SocialIcons>
                   <Icon bg="#00B548">
   
   
                   <WhatsApp  style={{
                       fontSize: "18px"
                   }}/>
                   </Icon>
                   <Icon bg="#216CFD">
   
                   <Phone style={{
                       fontSize: "17px"
                   }}/>
                   </Icon>
               </SocialIcons>
               <Button text={"View more..."}/>
           </AgentDetails>
         </Container>
  )
}

export default AgentCard


const Icon = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: ${({bg})=>bg};
color: white;
display:flex;
justify-content: center;
align-items: center;
font-size: 13px;
cursor: pointer;
`

const SocialIcons = styled.div`
display:flex;
gap: 10px;
align-items: center;
margin-top: 10px;
margin-bottom: 15px;
`

const AgentEmail = styled.div`
font-family: "montserrat";
font-size: 12px;
`

const Profile = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px dashed ${colors.primary};
    position: absolute;
    top: -20px;
    left: 40%;
    object-fit: cover;
`

const AgentNames = styled.div`
font-size: 14px;
`

const AgentDetails = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`

const Verified = styled.div`
font-size: 13px;
color: gold;
font-family: "montserrat";
font-weight: bold;
display:flex;
align-items: center;
`

const Top = styled.div`

display:flex;
justify-content: flex-end;`

const Container = styled.div`
width:280px;
outline: 1px solid lightgrey;
/* height: 100px; */
background-color: white;
border-radius: 5px;
padding: 10px;
position: relative;
cursor:pointer;
`
