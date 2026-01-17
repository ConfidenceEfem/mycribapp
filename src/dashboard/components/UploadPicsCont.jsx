import styled from "styled-components"
import {
  AddAPhotoOutlined,
  Cancel,
} from "@mui/icons-material";

import { useState } from "react";
import {} from "@mui/material/Select";
import { colors } from "../../config/colors";
import CircularProgressComp from "../../components/form/CircularProgressComp";
import UploadDisplayImages from "./UploadDisplayImages";

const UploadPicsCont = ({handleRemoveImage, uploadChangeForImages, images}) => {
    return (
        <Container>
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
                
                  <UploadDisplayImages handleRemoveImage={handleRemoveImage} images={images}/>
                </Container>
    )
}

export default UploadPicsCont


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


const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid ${colors.primary};
`;

// const DisplayImages = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;

//   @media screen and (max-width: 450px) {
//     justify-content: center;
//   }
// `;

const Label = styled.div`
  font-size: 14px;
  font-family: "montserrat";
  display: flex;
  flex-wrap: nowrap;
  div {
    display: flex;
    flex-wrap: nowrap;
  }
 
  @media screen and (max-width: 400px) {
   font-size: 11px;
   text-align: center;
   
  }
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
  padding: 0px 10px;
`;
const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;