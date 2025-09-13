import styled from "styled-components"
import { colors } from "../../config/colors"
import Button from "../Button"
import img1 from "../../assets/hero1.png"
import img2 from "../../assets/hero2.png"
const Hero = () => {
  return (
    <Container>
        <Wrapper>
            <Content>
                <Title>Live Better <br/>Study Easier</Title>
                <SubText>
                    MyCrib connects student with safe, affordable and nearby accomodation. Browse verified listings, book with confidence and move in stress-free.
                </SubText>
                <Button text={"Sign Up"}/>
            </Content>
            <Picture>
                {/* <Frame1> */}
                    <Img src={img1}/>
                    <Img src={img2}/>
                {/* </Frame1> */}
            </Picture>
        </Wrapper>
    </Container>
  )
}

export default Hero

const Img = styled.img`
object-fit: cover;
width: 200px;
height: 360px;
border-radius: 100px;
@media screen and (max-width: 970px){
  width: 150px;
  height: 310px;
}
@media screen and (max-width: 850px){
   width: 130px;
   
}
@media screen and (max-width: 800px){
   width: 200px; 
}
@media screen and (max-width: 600px){
  width: 100px;
  height: 180px;
}
`

const Frame1 = styled.div`
width: 200px;
height: 350px;
border-radius: 400px;
`

const SubText = styled.div`
font-family: "montserrat";
font: 18px;
@media screen and (max-width: 1050px){
    font-size: 15px;
}
@media screen and (max-width: 800px){
    font-size: 18px;
}
@media screen and (max-width: 400px){
    font-size: 15px;
}
`
const Title = styled.div`
font-size: 55px;
color: ${colors.primary};

@media screen and (max-width: 1050px){
    font-size: 40px;
}
@media screen and (max-width: 850px){
    font-size: 55px;
    text-align: center;
}
@media screen and (max-width: 600px){
    font-size: 35px;
}
@media screen and (max-width: 400px){
    font-size: 27px;
}
`

const Picture = styled.div`
display: flex;
gap: 50px;
@media screen and (max-width: 1100px){
   gap: 20px;
}
`

const Content = styled.div`
width: 550px;
display:flex;
flex-direction: column;
gap: 20px;
@media screen and (max-width: 1200px){
    width: 450px;
}
@media screen and (max-width: 1050px){
    width: 350px;
    /* background-color: blue; */
}
@media screen and (max-width: 970px){
  gap: 15px;
}
@media screen and (max-width: 800px){
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 25px;
}

/* flex: 1; */
`

const Wrapper = styled.div`
width: 83%;
padding-top: 30px;
display:flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 800px){
    flex-direction: column-reverse;
    width: 90%;
}
@media screen and (max-width: 600px){
   gap: 30px;
}
`

const Container = styled.div`
width: 100%;
display:flex;
justify-content: center;
`
