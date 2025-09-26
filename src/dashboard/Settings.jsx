import styled from "styled-components";
import { ArrowRight } from "@mui/icons-material";
import { colors } from "../config/colors";
import { useNavigate } from "react-router";
const Settings = () => {

    const navigate = useNavigate()

  return (
    <Container>
      <Wrapper>
        <NavsContainer>
          <NavAndIcon>
            <NavAndDesc
            >
              <Nav>Phone Number Verification</Nav>
              <Desc>
                Verify phone number so that your account will be verified and
                your listing can be visible for everyone
              </Desc>
            </NavAndDesc>
            <ArrowRight
              style={{
                fontSize: "40px",
                cursor: "pointer",
              }}
              onClick={()=>{
                navigate("verify-phone-number")
              }}
            />
          </NavAndIcon>
          <NavAndIcon>
            <NavAndDesc>
              <Nav>Reset Password</Nav>
              <Desc>
                Update your password incase of security breach and to protect
                your account
              </Desc>
            </NavAndDesc>
            <ArrowRight
              style={{
                fontSize: "40px",
                cursor: "pointer",
              }}
               onClick={()=>{
                navigate("reset-password")
              }}
            />
          </NavAndIcon>
        </NavsContainer>
      </Wrapper>
    </Container>
  );
};

export default Settings;

const Desc = styled.div`
  font-family: "montserrat";
  font-size: 13px;
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

const Nav = styled.div`
@media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const NavAndDesc = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  @media screen and (max-width: 650px) {
    width: 90%;
  }
  
`;

const NavAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 35px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 88%;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 40px 0px;
  height: 100%;
`;
