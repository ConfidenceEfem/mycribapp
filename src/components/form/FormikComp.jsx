import React from 'react'
import {Formik} from "formik"

const FormikComp = ({children, initialValues, validationSchema, onSubmit}) => {
  return (
    <Formik
             initialValues={initialValues}
             validationSchema={validationSchema}
             onSubmit={onSubmit}
             >
               {({errors})=>(
             <Form>
              {children}
             </Form>
               )}
             </Formik>
  )
  
}

export default FormikComp

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;