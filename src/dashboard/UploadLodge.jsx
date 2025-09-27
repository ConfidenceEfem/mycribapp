import styled from "styled-components";
import {
  AddAPhotoOutlined,
  Cancel,
} from "@mui/icons-material";
import InputField from "../components/form/InputField";
import Button from "../components/Button";
import { useState } from "react";
import {} from "@mui/material/Select";
import { colors } from "../config/colors";
import { Formik } from "formik";
import ErrorMessage from "../components/form/ErrorMessage";
import * as yup from "yup";
import { useAuthStore } from "../store/useAuthStore";
import CircularProgressComp from "../components/form/CircularProgressComp";

const UploadLodge = () => {
  const { createNewLodge, isNewLodgeCreating } = useAuthStore();

  const [isCheckWithRoomate, setIsCheckWithRoomate] = useState(false);
  const [images, setImages] = useState([]);

  const uploadChangeForImages = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((e) => ({
      preview: URL.createObjectURL(e),
      file: e
    }));
    setImages(newImages);
  };

  const handleRemoveImage = (index) => {
    const removeImages = images.filter((_, i) => i !== index);
    setImages(removeImages);
  };

  const createNewLodgeFunction = async (data) => {
    const formData = new FormData();

    const { title, description, price, typeOfLodge, location } = data;

    images?.forEach((img)=> {
      formData.append("images", img.file)
    })

    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("typeOfLodge", typeOfLodge);
    formData.append("location", location);
    //qualities form data
    //images form data

    await createNewLodge(formData);
  };

  const schema = yup.object().shape({
    title: yup.string().required().label("Title"),
    description: yup.string().required().label("Description"),
    price: yup.number().required().label("Price"),
    typeOfLodge: yup.string().required().label("Type of Lodge"),
    location: yup.string().required().label("Location"),
  });

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
            bio: "",
            description: "",
          }}
          onSubmit={(data) => {
            createNewLodgeFunction(data);
          }}
          validationSchema={schema}
        >
          {({
            handleSubmit,
            handleChange,
            touched,
            visible,
            errors,
            setFieldTouched,
          }) => (
            <FormAndButton onSubmit={handleSubmit}>
              <FormHolder>
                <Div>
                  <ErrorMessage
                    error={errors?.title}
                    visible={touched?.title}
                  />

                  <InputField
                    placeholder={"Title"}
                    onChange={handleChange("title")}
                    onBlur={() => {
                      setFieldTouched("title");
                    }}
                  />
                </Div>
                <Div>
                  <ErrorMessage
                    error={errors?.price}
                    visible={touched?.price}
                  />
                  <InputField
                    placeholder={"Price"}
                    type={"Number"}
                    onChange={handleChange("price")}
                    onBlur={() => {
                      setFieldTouched("price");
                    }}
                  />
                </Div>
                <Div>
                  <ErrorMessage
                    error={errors?.location}
                    visible={touched?.location}
                  />
                  <InputField
                    placeholder={"Location(eg. UpSchool/Aguawka/Amansea)"}
                    onChange={handleChange("location")}
                    onBlur={() => {
                      setFieldTouched("location");
                    }}
                  />
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
                  <ErrorMessage
                    error={errors?.typeOfLodge}
                    visible={touched?.typeOfLodge}
                  />
                  <InputField
                    placeholder={"Type of Lodge(eg. 1 Room self Contain)"}
                    onChange={handleChange("typeOfLodge")}
                    onBlur={() => {
                      setFieldTouched("typeOfLodge");
                    }}
                  />
                </Div>
                <Div>
                  <Label>
                    Qualities of the Lodge?
                    <ErrorMessage
                      error={errors?.qualities}
                      visible={touched?.qualities}
                    />
                  </Label>

                  <InputField
                    placeholder={"24hr Electricity/Security e.t.c"}
                    onChange={handleChange("qualities")}
                    onBlur={() => {
                      setFieldTouched("qualities");
                    }}
                  />
                </Div>
                <TextArea
                  placeholder={"Description"}
                  style={{ flex: "1" }}
                  type="message"
                onChange={handleChange("description")}
                />
              </FormHolder>
              <Button
                text={
                  isNewLodgeCreating ? (
                    <CircularProgressComp/>
                  ) : (
                    "Upload Lodge"
                  )
                }
                type="submit"
              />
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

  @media screen and (max-width: 800px) {
    width: 90%;
  }
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
  width: 650px;
  column-gap: 25px;
  row-gap: 25px;
    @media screen and (max-width: 1000px) {
    width: 520px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
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

  @media screen and (max-width: 450px) {
    justify-content: center;
  }
`;

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

  @media screen and (max-width: 500px) {
  padding-top: 20px;
  }
`;
