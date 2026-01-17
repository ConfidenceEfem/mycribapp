import styled from "styled-components";
import ListLodgeCard from "../components/cards/ListLodgeCard";
import { useAuthStore } from "../store/useAuthStore";
import React, { useEffect } from "react";
import CircularProgressComp from "../components/form/CircularProgressComp";

const MyLodgs = () => {


  const {allLodgesByUser, userListing, isLoadingListings, isallLodgesByUser} = useAuthStore()

  console.log(userListing, "user listing from my lodges page")
  

useEffect( ()=>{
 allLodgesByUser()
}, [allLodgesByUser])

  return (
    <Container>
      <Wrapper>
        {
          isallLodgesByUser ? <CircularProgressComp/> : userListing?.length === 0 ? <div>No lodge found</div> : userListing?.map( (item)=> <ListLodgeCard key={item._id} data={item}/>)
        }
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
