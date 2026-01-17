import styled from "styled-components";


import { useEffect, useState } from "react";
import {} from "@mui/material/Select";
import { Formik } from "formik";

import * as yup from "yup";
import { useAuthStore } from "../store/useAuthStore";
import UploadLodgeForm from "./components/UploadLodgeForm";
import { useParams } from "react-router";
import UploadDisplayImages from "./components/UploadDisplayImages";
import CircularProgressComp from "../components/form/CircularProgressComp";



const EditLodge = () => {

    const {id} = useParams()

  const { isGettingOneLodge, getOneLodge, lodge,updateLodgeData,isUpdatingLodgeData} = useAuthStore();

  const [isCheckWithRoomate, setIsCheckWithRoomate] = useState(false);


  const schema = yup.object().shape({
    title: yup.string().required().label("Title"),
    description: yup.string().required().label("Description"),
    price: yup.number().required().label("Price"),
    typeOfLodge: yup.string().required().label("Type of Lodge"),
    location: yup.string().required().label("Location"),
  });

  useEffect( ()=>{
   getOneLodge(id)
  }, [getOneLodge])

 
  console.log(lodge, "this is lodge data")

  return (
    <Container>
      {
        isGettingOneLodge? <CircularProgressComp/> : 
      
      <Wrapper>
        <UploadDisplayImages images={lodge?.myImages} isHideRemoveImage={true}/>
    
        <Formik
          initialValues={{
            title: lodge?.title || "",
            price: lodge?.price || "",
            location:lodge?.location || "",
            withRoomate: lodge?.withRoomate || isCheckWithRoomate,
            noOfRoomate: lodge?.numberOfRoomates || 0,
            typeOfLodge: lodge?.typeOfLodge || "",
            qualities: [],
            bio: lodge?.bio || "",
            description: lodge?.description || "",
          }}
          enableReinitialize
          onSubmit={(data) => {
            updateLodgeData(data, id);
          }}
          validationSchema={schema}
        >
          {({
            handleSubmit,
            handleChange,
            touched,
            errors,
            setFieldTouched,
            values
          }) => (
            <UploadLodgeForm
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isCheckWithRoomate={isCheckWithRoomate}
            setFieldTouched={setFieldTouched}
            setIsCheckWithRoomate={setIsCheckWithRoomate}
            touched={touched}
            isNewLodgeCreating={isUpdatingLodgeData}
            values={values}
            />
          )}
        </Formik>
      </Wrapper>}
    </Container>
  );
};

export default EditLodge;



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
