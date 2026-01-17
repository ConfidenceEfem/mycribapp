import styled from "styled-components";

import AgentCard from "../components/cards/AgentCard";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import CircularProgressComp from "../components/form/CircularProgressComp";

const Agents = () => {

  const navigate = useNavigate()

  const { isGettingAllAgents, getAllAgents, agents } = useAuthStore()

  useEffect(() => {
    getAllAgents()
  }, [getAllAgents])

  console.log(agents)

  return (
    <Container>
      <Wrapper>

        {
          isGettingAllAgents ? <CircularProgressComp /> : agents?.length === 0 ? <div>No Agents Found</div> :
            agents?.map((props) => (
              <AgentCard props={props} />

            ))
        }
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
