import styled from "styled-components"
import InputField from "../components/form/InputField";
import Button from "../components/Button";
import GoBack from "./components/GoBack";

const PhoneNumberVerification = () => {
  return (
    <Container>
        <Wrapper>
        <GoBack/>

            <TitleAndDesc>
                <Title>Verify Phone Number</Title>
                 <Desc>We sent an OTP to your phone number🎉</Desc>
            </TitleAndDesc>
            <FormHolder>
                <InputField
                placeholder={"OTP Code"}
                type={"Number"}
                />
                <Button text={"Verify Phone Number"}/>
            </FormHolder>
        </Wrapper>
    </Container>
  )
}

export default PhoneNumberVerification

const FormHolder = styled.div`
width: 300px;
display:flex;
flex-direction: column;
gap: 15px;
`
const Desc = styled.div`
font-family: "montserrat";
`
const Title = styled.div`
font-size: 18px;
`
const TitleAndDesc = styled.div``

const Wrapper = styled.div`
  display: flex;
 flex-direction: column;
  width: 88%;
  gap: 30px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 40px 0px;
  height: 100%;
`;
