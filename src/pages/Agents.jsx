import styled from "styled-components";

import AgentCard from "../components/cards/AgentCard";

const Agents = () => {
  return (
    <Container>
      <Wrapper>
        <AgentCard />
        <AgentCard />
        <AgentCard />
   
      </Wrapper>
    </Container>
  );
};

export default Agents;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
flex-wrap: wrap;
  gap: 30px;
`;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
