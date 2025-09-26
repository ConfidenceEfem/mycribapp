import styled from "styled-components";
import { colors } from "../config/colors";
import { Close } from "@mui/icons-material";
import { NavLink } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

const SideBar = ({ onShowSideBar }) => {
  const {  accessToken } = useAuthStore();

  return (
    <Container>
      <Wrapper>
        <Top>
          <Close
            style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
            onClick={onShowSideBar}
          />
        </Top>
        <NavHolder>
          <Nav to="/" onClick={onShowSideBar}>
            Home
          </Nav>
          <Nav to="/lodges" onClick={onShowSideBar}>
            Lodges
          </Nav>
          <Nav to="/agents" onClick={onShowSideBar}>
            Agents
          </Nav>
          <Nav to="/contact" onClick={onShowSideBar}>
            Contact
          </Nav>
          {!accessToken && (
            <Nav to="/signup" onClick={onShowSideBar}>
              Signup
            </Nav>
          )}
          {!accessToken && (
            <Nav to="/login" onClick={onShowSideBar}>
              Login
            </Nav>
          )}
          {accessToken && (
            <Nav to="/user-profile" onClick={onShowSideBar}>
              User Profile
            </Nav>
          )}
          {accessToken && (
            <Nav to="/upload-lodges" onClick={onShowSideBar}>
              Upload Lodges
            </Nav>
          )}
          {accessToken && (
            <Nav to="/mylodges" onClick={onShowSideBar}>
              My Lodges
            </Nav>
          )}
          {accessToken && (
            <Nav to="/settings" onClick={onShowSideBar}>
              Settings
            </Nav>
          )}
        </NavHolder>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Nav = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.white};
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: all 550ms;
  :hover {
    color: #eee;
    border-bottom: 1px solid #eee;
  }
  &.active {
    color: black;
  }
   @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;
const NavHolder = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(1fr, 1);
  row-gap: 10px;
  height: 100%;
  padding-bottom: 30px;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-top: 30px;
  padding-right: 30px;
`;

const Wrapper = styled.div`
  /* width: 90%; */
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const Container = styled.div`
  display: none;
  color: ${colors.white};
  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    position: fixed;
    background-color: ${colors.primary};
    height: 100vh;
    z-index: 10;
    transition: all 660ms;
  }
`;
