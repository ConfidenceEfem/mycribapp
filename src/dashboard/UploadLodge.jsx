import styled from "styled-components";
import { AddAPhotoOutlined } from "@mui/icons-material";
import img from "../assets/hero1.png";
import InputField from "../components/form/InputField";
import Button from "../components/Button";
import { useState } from "react";
import Select from "@mui/material/Select";
import {} from "@mui/material/Select";
import { colors } from "../config/colors";

const UploadLodge = () => {
  const [isCheckWithRoomate, setIsCheckWithRoomate] = useState(false);

  return (
    <Container>
      <Wrapper>
        <UploadPicsCont>
          <UploadInput htmlFor="images">
            <Circle>
              <AddAPhotoOutlined />
            </Circle>
            <Label>
              Upload multiple pictures of Lodge or drag and drop here{" "}
            </Label>
          </UploadInput>
          <input
            type="file"
            id="images"
            style={{
              display: "none",
            }}
          />
          <DisplayImages>
            <Image src={img} />
            <Image src={img} />
            <Image src={img} />
          </DisplayImages>
        </UploadPicsCont>
        <FormHolder>
          <InputField placeholder={"Title"} />
          <InputField placeholder={"Price"} type={"Number"} />
          <InputField placeholder={"Location(eg. UpSchool/Aguawka/Amansea)"} />
          <Div>
            <Label>
              <input
                type="checkbox"
                checked={isCheckWithRoomate}
                onClick={() => {
                  setIsCheckWithRoomate(!isCheckWithRoomate);
                }}
              />
              With Roomates?
            </Label>

            <InputField
              placeholder={"How many roomates"}
              type={"Number"}
              disabled={!isCheckWithRoomate}
            />
          </Div>
          <InputField placeholder={"Type of Lodge(eg. 1 Room self Contain)"} />
          <Div>
            <Label>Qualities of the Lodge?</Label>

            <InputField
              placeholder={"24hr Electricity/Security e.t.c"}
              type={"Number"}
              disabled={!isCheckWithRoomate}
            />
          
          </Div>
          <TextArea
            placeholder={"Bio"}
            style={{flex: "1"}}
            type="message"
          />
        </FormHolder>
        <Button text={"Upload Lodge"} />
      </Wrapper>
    </Container>
  );
};

export default UploadLodge;


const TextArea = styled.textarea`
 grid-column: span 2;
 width: 98%;
 height: 60px;
 resize: none;
 padding: 5px;
 font-family: "montserrat";
 border:none;
 outline: 1px solid ${colors.primary};
`

const Div = styled.div`
display:flex;
flex-direction: column;
gap: 5px;
`;

const FormHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* background-color: green; */
  width: 650px;
  column-gap: 25px;
  row-gap: 15px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const DisplayImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Label = styled.div`
  font-size: 14px;
  font-family: "montserrat";
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const UploadInput = styled.label`
  width: 100%;
  background-color: lightgrey;
  height: 130px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
const UploadPicsCont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex: 1;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
