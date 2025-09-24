import styled from "styled-components";
import ListLodgeCard from "../components/cards/ListLodgeCard";
import { useAuthStore } from "../store/useAuthStore";
import React, { useEffect } from "react";

const MyLodgs = () => {
  const userListing = useAuthStore((state) => state.userListing);
  const allLodgesByUser = useAuthStore((state) => state.allLodgesByUser);
  const isLoadingListings = useAuthStore((state) => state.isLoadingListings)

useEffect(async ()=>{
 allLodgesByUser()
}, [allLodgesByUser])

  return (
    <Container>
      <Wrapper>
        {isLoadingListings ? (
          <CircularProgress enableTrackSlot size="20px"  />
        ) : (
          userListing?.map((lodge) => (
            <ListLodgeCard  />
          ))
        )}
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
