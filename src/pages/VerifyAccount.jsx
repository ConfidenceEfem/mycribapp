import styled from "styled-components";
import Button from "../components/Button";
import FormCard from "../components/form/FormCard";
import InputField from "../components/form/InputField";
import * as yup from "yup";
import { Formik } from "formik";
import React from "react";
import ErrorMessage from "../components/form/ErrorMessage";
import {useAuthStore} from "../store/useAuthStore"
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router";

const VerifyAccount = () => {

  const navigate = useNavigate()

const {isResendingOTP, resendOTP, isVerifyingAccount, verifyAccount, authUser} = useAuthStore()

  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const schema = yup.object().shape({
    otp: yup.string().min(6).max(6).required("OTP Code is required"),
  });

  const handleVerifyAccount = async (e) => {  
  const success =   await verifyAccount(e)
  if(success){

       Swal.fire({
             showConfirmButton: false,
             icon: 'success',
             title: 'Account verified successfully'
             ,
             text: 'You can now login to your account',
             timer: 3000
           }).then(()=>{
             navigate("/dashboard",{replace: true})
           }) 
  }}

  return (
    !authUser?.email? <Navigate to={"/login"}/> : 
    <Container>
      <Wrapper>
        <FormCard
          title={"Verify your Account"}
          subText={
            "Enter the 6-digit code we sent to your email to verify your account."
          }
          reRouteCaption={"Didn't get a code?"}
          reRouteLabel={isResendingOTP? "Resending...": "Resend Code"}
          reRouteFunction={()=>{
            resendOTP({
              email: authUser?.email
            }).then(()=> {
              Swal.fire({
                icon: "success",
              title : "OTP Resent",
              text: "Please check your email for the new OTP code",
              timer: 3000,
              showConfirmButton: false,
              })
            })
          }}
        >
          <Formik
            initialValues={{
              otp: "",
              email: authUser?.email
            }}
            validationSchema={schema}
            onSubmit={(e)=>{
              console.log(e, "otp code submitted")
              handleVerifyAccount(e)
            }}
          >
            {({ errors, setFieldTouched, touched, handleChange, handleSubmit }) => (
              <Form
              onSubmit={handleSubmit}
              >
                <Div>
                  <ErrorMessage
                    error={errors?.otp}
                    visible={touched?.otp}
                  />
                  <InputField
                    placeholder="OTP Code"
                    type="password"
                    isShowPassword={isShowPassword}
                    showPassword={() => {
                      setIsShowPassword(!isShowPassword);
                    }}
                    onBlur={() => {
                      setFieldTouched("otp");
                    }}
                    onChange={handleChange("otp")}
                  />
                </Div>
                <Button text={isVerifyingAccount? "Loading...": "Verify Account"} disabled={isVerifyingAccount}/>
              </Form>
            )}
          </Formik>
        </FormCard>
      </Wrapper>
    </Container>
  );
};

export default VerifyAccount;

const Div = styled.div`
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 130px;
`;
