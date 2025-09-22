import styled from "styled-components";
import { Person, AddHomeSharp, HomeWorkRounded, Settings } from "@mui/icons-material";
import { colors } from "../../config/colors";
import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <Container>
      <NavsHolder>
        <Nav to="/user-profile">
         <TextAndIcon>
           <Person />
          <Label>User Profile</Label>
         </TextAndIcon>
        </Nav>
        <Nav to="/upload-lodges">
         <TextAndIcon>
           <AddHomeSharp />
          <label>Upload Lodges</label>
         </TextAndIcon>
        </Nav>
        <Nav to="/mylodges">
         <TextAndIcon>
           <HomeWorkRounded />
          <label>My Lodges</label>
         </TextAndIcon>
        </Nav>
        <Nav to="/settings">
         <TextAndIcon>
           <Settings />
          <label>Settings</label>
         </TextAndIcon>
        </Nav>
   
      </NavsHolder>
    </Container>
  );
};

export default SideBar;

const Label = styled.div``

const TextAndIcon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  gap: 20px;
  
  `

const Nav = styled(NavLink)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  /* padding-left: 30px; */
  cursor: pointer;
  width: 100%;
  height: 40px;
  align-items: center;
  text-decoration: none;

 &.active{
  background-color: ${colors.primary};
 }
`;

const NavsHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  gap: 40px;
`;

const Container = styled.div`
  width: 300px;
  background-color: black;
  height: 700px;
  /* position: sticky; */
`;
