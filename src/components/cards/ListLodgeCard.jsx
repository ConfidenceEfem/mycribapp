import React from 'react'
import styled from "styled-components"
import img from "../../assets/hero2.png"
import img1 from "../../assets/hero1.png"
import Whatsappp from "@mui/icons-material/WhatsApp";
import CallIcon from '@mui/icons-material/Call';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import {Delete, ModeEdit} from "@mui/icons-material"
import { useNavigate } from 'react-router';

const ListLodgeCard = ({data}) => {

    const navigate = useNavigate()
    console.log(data, "from lodge card")

  return (
    <Container>
        <ImageContainer>
            <LargeImageCont>
                <LargeImage src={img}/>
                <NumberOfImagesCont>
                    <CameraIcon>i</CameraIcon>
                    <span>12</span>
                </NumberOfImagesCont>
            </LargeImageCont>
            <SmallImageCont>
                {
                    data?.myImages?.map( (item)=> <SmallImage key={item} src={item} />)
                }
                {/* <SmallImage src={img1} /> */}
            </SmallImageCont>
        </ImageContainer>
        <DescriptionContainer>
            <LeftItems>
                <LodgeDesc>
                    <LodgeTitle>
                        {data?.title}
                    </LodgeTitle>
                    <NameOfLodge>{data?.location}</NameOfLodge>
                </LodgeDesc>
                <LodgeAttraction>
                    <AttractionItems>24hr Electricity</AttractionItems>
                    <AttractionItems>Newly Built</AttractionItems>
                    <AttractionItems>Security</AttractionItems>
                </LodgeAttraction>
                <AgentProfileAndDate>
                    <AgentProfile>
                        <AgentAvatar src={data?.agentId?.avatarUrl}/>
                        <AgentName>{data?.agentId?.firstName} {data?.agentId?.lastName}</AgentName>
                    </AgentProfile>
                    <DatePosted>Updated 23 Dec 2024, Added 06 Nov 2024</DatePosted>
                </AgentProfileAndDate>
            </LeftItems>
            <RightItems>
                <TopContainer>
                    <PriceAndDuration>
                        <Price>N{data?.price}</Price>
                        <Duration>Annually</Duration>
                    </PriceAndDuration>
                    <LikeAndBookmark>
                        <BookmarkIcon><FavoriteBorderIcon/></BookmarkIcon>
                        <BookmarkIcon><BookmarkBorderIcon/></BookmarkIcon>
                    
                    </LikeAndBookmark>
                </TopContainer>
                <PremiumContainer>Premium <StarRateIcon/></PremiumContainer>
                <SocialContainer>
                    <Social bc="#216CFD">
                        <CallIcon/>
                        Call
                    </Social>
                    <Social bc="#00B548">
                        
                        <Whatsappp/>
                    </Social>
                </SocialContainer>
                <Div>
                    <ActionButton>
                    <Delete/>
                        <label>Delete</label>

                    </ActionButton>
                    <ActionButton style={{
                        backgroundColor: "rgba(0,0,255,0.7)"
                    }}
                    onClick={()=>{
                        navigate(`/edit/${data?._id}`)
                    }}

                    >
                    <ModeEdit/>
                        <label>Edit</label>

                    </ActionButton>
                   
                    
                </Div>
            </RightItems>
        </DescriptionContainer>
    </Container>
  )
}

export default ListLodgeCard

const ActionButton = styled.div`
display: flex;
align-items: center;
color: white;
font-size: 13px;
background-color: rgba(255,0,0,0.7);
cursor: pointer;
border-radius: 3px;
padding: 5px 15px;
:hover{
    opacity: 0.5;
}
label{
    cursor: pointer;
}
`

const Div = styled.div`
display:flex;
align-items: center;
gap: 15px;
`

const Social = styled.div`
display:flex;
align-items: center;
color: white;
padding: 8px 13px;
border-radius: 7px;
gap: 5px;
background-color: ${({bc})=>bc};
cursor:pointer;
`

const BookmarkIcon = styled.div`
cursor: pointer;
`

const LikeAndBookmark = styled.div`
display:flex;
flex-direction: column;
gap: 5px;
`

const Duration = styled.div`
font-size: 14px;
`
const Price = styled.div`
font-size: 20px;
font-weight: bold;
`

const PriceAndDuration = styled.div`
display:flex;
flex-direction: column;
gap: 5px;
`
const SocialContainer = styled.div`
display:flex;
align-items: center;
gap: 15px;
`

const PremiumContainer = styled.div`
border: 1px solid gold;
padding: 8px 20px;
font-size: 15px;
border-radius: 5px;
margin-bottom: 20px;
display:flex;
align-items: center;
color: darkgoldenrod;
`

const TopContainer = styled.div`
display:flex;
border-left: 1px solid lightgray;
padding-left: 30px;
padding-bottom: 30px;
width: calc(100% - 30px);
justify-content: space-between;
/* background-color: red; */
`

const LodgeAttraction = styled.div`
display:flex;
gap: 10px;
margin-bottom: 40px;
flex-wrap: wrap;
`

const AttractionItems = styled.div`
font-size: 13px;
padding: 5px;
border-radius: 5px;
background-color:#F0F6FF ;
`

const DatePosted = styled.div`
font-size: 14px;
`

const AgentName = styled.div`
font-weight: 500;
`

const AgentAvatar = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`

const AgentProfile = styled.div`
display:flex;
align-items: center;
gap: 20px;
font-size: 15px;

margin-bottom: 20px;
`

const AgentProfileAndDate = styled.div``

const NameOfLodge = styled.div`
font-size: 14px;
`

const LodgeTitle = styled.div`
font-size: 18px;
font-weight: 700;
`

const LodgeDesc = styled.div`
margin-bottom: 25px;
`

const RightItems = styled.div`
width: 200px;
display:flex;
flex-direction: column;
align-items: flex-end;
gap: 15px;
`

const LeftItems = styled.div`
flex: 1;
`

const CameraIcon = styled.div``

const NumberOfImagesCont = styled.div`
background-color: rgba(0,0,0,0.6);
padding: 5px;
border-radius: 4px;
position: absolute;
bottom: 20px;
display:flex;
left: 20px;
color: white;
gap: 5px;
span{
    font-weight: bold;
    font-size: 15px;
}
`

const SmallImage = styled.img`
width: 75px;
height: 50px;
object-fit: cover;
border-radius: 5px;
`
const SmallImageCont = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
`
const LargeImage = styled.img`
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 10px;
border: 1px solid #eee;
`
const LargeImageCont = styled.div`
width: 100%;
margin-bottom: 15px;
position:relative;
`

const DescriptionContainer = styled.div`
flex: 1;
display:flex;
gap: 20px;
`

const ImageContainer = styled.div`
width: 240px;
@media screen and (max-width: 800px){
  width: 100%;
    
}
`

const Container = styled.div`
/* width: calc(100% - 35px); */
border-radius: 10px;
font-family: "Montserrat";
padding: 15px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
display:flex;
/* align-items: center; */
gap: 20px;
@media screen and (max-width: 800px){
    flex-direction: column;
    
}
`