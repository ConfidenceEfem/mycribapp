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
`

const Frame1 = styled.div`
width: 200px;
height: 350px;
border-radius: 400px;
`

const SubText = styled.div`
font-family: "montserrat";
font: 18px;
`
const Title = styled.div`
font-size: 55px;
color: ${colors.primary};
`

const Picture = styled.div`
display: flex;
gap: 50px;
`

const Content = styled.div`
width: 550px;
display:flex;
flex-direction: column;
gap: 20px;
/* flex: 1; */
`

const Wrapper = styled.div`
width: 83%;
padding-top: 30px;
display:flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
display:flex;
justify-content: center;
`
