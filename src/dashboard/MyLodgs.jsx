import styled from "styled-components";
import ListLodgeCard from "../components/cards/ListLodgeCard";
import { useAuthStore } from "../store/useAuthStore";
import React, { useEffect } from "react";

const MyLodgs = () => {


  const {allLodgesByUser, userListing, isLoadingListings} = useAuthStore()
  

useEffect(async ()=>{
 allLodgesByUser()
}, [allLodgesByUser])

  return (
    <Container>
      <Wrapper>
       <ListLodgeCard/>
      </Wrapper>
    </Container>
  );
};

export default MyLodgs;

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
