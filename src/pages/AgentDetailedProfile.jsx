import styled from "styled-components";
import img from "../assets/avatar.png";
import { colors } from "../config/colors";
import Whatsappp from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import ListLodgeCard from "../components/cards/ListLodgeCard";

const AgentDetailedProfile = () => {
  const details = [
    {
      label: "Name",
      content: "Confidence Efem",
    },
    {
      label: "Email",
      content: "confidence.efem@example.com",
    },
    {
      label: "Phone",
      content: "+1234567890",
    },

    {
      label: "Location",
      content: "Lagos, Nigeria",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <UserProfileHolder>
          <LeftDetails>
            <DetailsHolder>
              {details?.map((e) => (
                <LabelAndContent>
                  <Label>{e?.label}</Label>
                  <Content>{e?.content}</Content>
                </LabelAndContent>
              ))}
            </DetailsHolder>
          </LeftDetails>
          <RightProfile>
            <Profile src={img} />
          </RightProfile>
        </UserProfileHolder>
        <BioAndSocialMedia>
          <Bio>
            <label
              style={{
                fontWeight: "bold",
              }}
            >
              Bio:
            </label>
            The Tutorials section of this guide presents you with independent
            tutorial sessions. Each tutorial guides you step-by<label></label>
          </Bio>
          <SocialContainer>
            <Social bc="#216CFD">
              <CallIcon />
              Call
            </Social>
            <Social bc="#00B548">
              <Whatsappp />
            </Social>
          </SocialContainer>
        </BioAndSocialMedia>
        <AgentLodgeContainer>
          <LodgesContainer>
            <ListLodgeCard/>
            <ListLodgeCard/>
            <ListLodgeCard/>
          </LodgesContainer>
        </AgentLodgeContainer>
      </Wrapper>
    </Container>
  );
};

export default AgentDetailedProfile;

const LodgesContainer = styled.div`
display:flex;
flex-direction: column;
gap: 35px;
`

const AgentLodgeContainer = styled.div`
width: 90%;
`

const Social = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 8px 13px;
  border-radius: 7px;
  gap: 5px;
  background-color: ${({ bc }) => bc};
  cursor: pointer;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Bio = styled.div``;

const BioAndSocialMedia = styled.div`
  font-family: "montserrat";
  font-size: 18px;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const UserProfileHolder = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  /* background-color: red; */
`;

const Profile = styled.img`
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid ${colors.primary};
  width: 150px;
  height: 150px;
`;

const Content = styled.label`
  font-weight: bold;
  font-size: 18px;
`;

const Label = styled.label``;

const LabelAndContent = styled.div`
  display: flex;
  gap: 20px;
`;

const DetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RightProfile = styled.div``;

const LeftDetails = styled.div`
  width: 500px;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
