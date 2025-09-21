import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import styled from "styled-components";
import SideBar from "../dashboard/components/SideBar";
import UserProfile from "../dashboard/UserProfile";

const DashboardWrapper = ({children}) => {
  const { authUser } = useAuthStore();

  return (
    <Container style={{ paddingTop: "80px" }}>
      <SideBar />
      <PagesContainer>
      {children}
      </PagesContainer>
    </Container>
  );
};

export default DashboardWrapper;

const PagesContainer = styled.div`
height: 100%;
flex: 1;
`;

const Container = styled.div`
display:flex;
height: 100%;
`;
