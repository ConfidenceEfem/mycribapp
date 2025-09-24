import styled from "styled-components";
import Button from "../components/Button";
import FormCard from "../components/form/FormCard";
import InputField from "../components/form/InputField";
import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import ErrorMessage from "../components/form/ErrorMessage";
import {useNavigate} from "react-router"
import { useAuthStore } from "../store/useAuthStore";
import Swal from "sweetalert2";

const Login = () => {

  const navigate = useNavigate()

  const {login, isLogingin, authUser} = useAuthStore()

  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (e) => {  
    const success = await login(e)
    console.log("check loging status", success, authUser)
    if(success?.status){
    if(success?.isEmailVerified){
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        showConfirmButton: false,
        timer: 3000
      }).then(()=>{
        navigate("/user-profile",{replace: true})
      })
    }else{
      Swal.fire({
        icon: "info",
        title: "Email not verified",
        text: "OTP sent to your mail. Please verify your email to continue",
        showConfirmButton: false,
        timer: 3000
      }).then(()=>{
        navigate("/verify-account",{replace: true})
      })
    }
      // navigate("/dashboard",{replace: true})
    }
  }

  return (
    <Container>
      <Wrapper>
        <FormCard
          title={"Login to your Account"}
          subText={
            " Continue your experience with the league of students that study easier and live better."
          }
          reRouteCaption={"Don't have an account?"}
          reRouteLabel={"Sign Up"}
          reRouteFunction={() => {
            navigate("/signup")
          }}
        >
          <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(e) => {
              console.log("Form Submitted", e);
              handleLogin(e)
            }}
          >
            {({ errors, handleChange, handleSubmit, touched, setFieldTouched }) => (
              <Form onSubmit={handleSubmit}>
                <Div>
                  <ErrorMessage
                    error={errors?.email}
                    visible={touched?.email}
                  />
                  <InputField
                    placeholder="Email"
                    onBlur={() => {
                      setFieldTouched("email");
                    }}
                    onChange={handleChange("email")}
                  />
                </Div>
               <Div>
                  <ErrorMessage
                    error={errors?.password}
                    visible={touched?.password}
                  />
                  <InputField
                    placeholder="Password"
                    type="password"
                    isShowPassword={isShowPassword}
                    showPassword={() => {
                      setIsShowPassword(!isShowPassword);
                    }}
                    onBlur={() => {
                      setFieldTouched("password");
                    }}
                    onChange={handleChange("password")}
                  />
                </Div>

                <Button text={isLogingin? "Loading...": "Login"} disabled={isLogingin} />
              </Form>
            )}
          </Formik>
        </FormCard>
      </Wrapper>
    </Container>
  );
};

export default Login;

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
