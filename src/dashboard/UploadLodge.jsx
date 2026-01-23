import styled from "styled-components";


import { useState } from "react";
import {} from "@mui/material/Select";
import { Formik } from "formik";

import * as yup from "yup";
import { useAuthStore } from "../store/useAuthStore";

import UploadPicsCont from "./components/UploadPicsCont";
import UploadLodgeForm from "./components/UploadLodgeForm";

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
    if(images?.length >= 1){
      setImages(prev => {
     const existingKeys = prev.map(
      img =>
        `${img.file.name}-${img.file.size}-${img.file.lastModified}`
    );

    const filteredNewImages = newImages.filter(img => {
      const key = `${img.file.name}-${img.file.size}-${img.file.lastModified}`;
      return !existingKeys.includes(key);
    });
        return [...prev, ...filteredNewImages]
      })
    }else{

      setImages(newImages);
    }
  };

  const handleRemoveImage = (index) => {
    const removeImages = images.filter((_, i) => i !== index);
    setImages(removeImages);
  };

  const createNewLodgeFunction = async (data) => {
    const formData = new FormData();

    const { title, description, price, typeOfLodge, location, qualities, withRoomate, numberOfRoomates } = data;

    images?.forEach((img)=> {
      formData.append("images", img.file)
    })

    qualities?.forEach((e)=>{
      formData.append("qualities[]", e)
    })

    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("typeOfLodge", typeOfLodge);
    formData.append("location", location);
    formData.append("withRoomate", withRoomate);
    formData.append("numberOfRoomates", numberOfRoomates);
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
        <UploadPicsCont uploadChangeForImages={uploadChangeForImages} images={images} handleRemoveImage={handleRemoveImage}/>
        <Formik
          initialValues={{
            title: "",
            price: "",
            location: "",
            withRoomate: isCheckWithRoomate,
            numberOfRoomates: 0,
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
            values,
            setFieldValue
          }) => (
            <UploadLodgeForm
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isCheckWithRoomate={isCheckWithRoomate}
            setFieldTouched={setFieldTouched}
            setIsCheckWithRoomate={setIsCheckWithRoomate}
            touched={touched}
            isNewLodgeCreating={isNewLodgeCreating}
            values={values}
            setFieldValue={setFieldValue}
            />
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default UploadLodge;



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
