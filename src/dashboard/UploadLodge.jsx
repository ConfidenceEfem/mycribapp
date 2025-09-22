import styled from "styled-components";
import {
  AddAPhotoOutlined,
  Cancel,
  HandymanOutlined,
} from "@mui/icons-material";
import InputField from "../components/form/InputField";
import Button from "../components/Button";
import { useState } from "react";
import {} from "@mui/material/Select";
import { colors } from "../config/colors";
import { Formik } from "formik";
import ErrorMessage from "../components/form/ErrorMessage";

const UploadLodge = () => {
  const [isCheckWithRoomate, setIsCheckWithRoomate] = useState(false);
  const [images, setImages] = useState([]);

  const uploadChangeForImages = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((e) => ({
      preview: URL.createObjectURL(e),
    }));
    setImages(newImages);
  };

  const handleRemoveImage = (index) => {
    const removeImages = images.filter((_, i) => i !== index);
    setImages(removeImages);
  };

  console.log(images, "images");

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
            multiple
            style={{
              display: "none",
            }}
            onChange={uploadChangeForImages}
          />
          <DisplayImages>
            {images?.map((props, i) => (
              <ImgAndIcon key={i}>
                <Image src={props?.preview} />
                <Icon
                  onClick={() => {
                    handleRemoveImage(i);
                  }}
                >
                  <Cancel />
                </Icon>
              </ImgAndIcon>
            ))}
          </DisplayImages>
        </UploadPicsCont>
        <Formik
        initialValues={{
          title: "",
          price: "",
          location: "",
          withRoomate: isCheckWithRoomate,
          noOfRoomate: 0,
          typeOfLodge: "",
          qualities: [],
          bio: ""
        }}
        >
          {({ handleSubmit, handleChange, touched, visible }) => (
            <FormAndButton onSubmit={handleSubmit}>
              <FormHolder>
                <Div>
                  <InputField placeholder={"Title"} 
                  onChange={handleChange("title")}
                  />
             
                </Div>
                <Div>
                  <InputField placeholder={"Price"} type={"Number"} />
                  <ErrorMessage />
                </Div>
                <Div>
                  <InputField
                    placeholder={"Location(eg. UpSchool/Aguawka/Amansea)"}
                  />
                  <ErrorMessage />
                </Div>
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
                <Div>

                <InputField
                  placeholder={"Type of Lodge(eg. 1 Room self Contain)"}
                />
                <ErrorMessage/>
                </Div>
                <Div>
                  <Label>Qualities of the Lodge?</Label>

                  <InputField
                    placeholder={"24hr Electricity/Security e.t.c"}
                    type={"Number"}
                    disabled={!isCheckWithRoomate}
                  />
                  <ErrorMessage />
                </Div>
                <TextArea
                  placeholder={"Bio"}
                  style={{ flex: "1" }}
                  type="message"
                />
              </FormHolder>
              <Button text={"Upload Lodge"} type="submit" />
            </FormAndButton>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default UploadLodge;

const FormAndButton = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.div`
  position: absolute;
  top: 5px;
  right: 3px;
  color: red;
  font-size: 10px;
  cursor: pointer;
`;
const ImgAndIcon = styled.div`
  position: relative;
  width: auto;
  height: auto;
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  width: 98%;
  height: 60px;
  resize: none;
  padding: 5px;
  font-family: "montserrat";
  border: none;
  outline: 1px solid ${colors.primary};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-end;
`;

const FormHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* background-color: green; */
  width: 650px;
  column-gap: 25px;
  row-gap: 25px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid ${colors.primary};
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
