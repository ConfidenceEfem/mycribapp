import styled from "styled-components";
import img from "../assets/avatar.png";
import { AddAPhotoOutlined } from "@mui/icons-material";
import InputField from "../components/form/InputField";
import Button from "../components/Button";
import { colors } from "../config/colors";
import {Formik} from "formik"
import { useState } from "react";

const UserProfile = () => {

  const [image, setImage] = useState("")

  const uploadChange = (e) => {
    const file = e.target.files[0]
    const image = URL.createObjectURL(file)

    //upload image function goes here

    console.log(image)
    setImage(image)
  }
  

  return (
    <Container>
      <Wrapper>
        <UploadAvatarCont>
          <DisplayImg src={image === ""  ? img : image} />
          <input
          type="file"
          id="pix"
          style={{
            display:"none"
          }}
          onChange={uploadChange}
          />
          <Circle
          htmlFor="pix"
          >
            <AddAPhotoOutlined />
          </Circle>
        </UploadAvatarCont>
        <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          whatsappLink: "",
          userType: "",
          bio: "",
        }}
        >
          {({errors, handleSubmit})=>(
              <FormAndButton
              onSubmit={handleSubmit}
              >

                <FormHolder>
                    <InputField 
                    placeholder={"First Name"}
                    />
                    <InputField
                    placeholder={"Last Name"}
                    />
                    <InputField
                    placeholder={"Email"}
                    />
                    <InputField
                    placeholder={"Phone Number"}
                    />
                    <InputField
                    placeholder={"WhatsappLink"}
                    style={{flex: "1"}}
              
                    
                    />
                    <InputField
                    placeholder={"User type"}
                    style={{flex: "1"}}
                    type="message"
                    />
                    <TextArea
                    placeholder={"Bio"}
                    style={{flex: "1"}}
                    type="message"
                  />
        
                </FormHolder>
                <Button text={"Update Profile"} type="submit"/>
              </FormAndButton>
          )}
        </Formik>
       
      </Wrapper>
    </Container>
  );
};

export default UserProfile;

const FormAndButton = styled.form`
display:flex;
flex-direction: column;
align-items: center;
gap: 30px;
`

const TextArea = styled.textarea`
 grid-column: span 2;
 width: 100%;
 resize: none;
 padding: 5px;
 font-family: "montserrat";
 border:none;
 outline: 1px solid ${colors.primary};
`

const FormHolder = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
/* background-color: green; */
width: 650px;
column-gap: 25px;
row-gap: 15px;
`

const Circle = styled.label`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
  border: 1px solid ${colors.primary};
`;

const DisplayImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

const UploadAvatarCont = styled.div`
position: relative;
/* margin-bottom: 30px; */
`;

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
