import styled from "styled-components"
import ListLodgeCard from "../components/cards/ListLodgeCard";

const MyLodgs = () => {
  return (
    <Container>
        <Wrapper>
            <ListLodgeCard/>
        </Wrapper>
    </Container>
  )
}

export default MyLodgs


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`;

const Container = styled.div`

  display: flex;
  flex: 1;

  justify-content: center;
  padding: 40px 0px;
height: 100%;
`;
