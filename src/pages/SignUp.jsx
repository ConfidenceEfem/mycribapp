import styled from "styled-components";
import Button from "../components/Button";
import FormCard from "../components/form/FormCard";
import InputField from "../components/form/InputField";
import * as yup from "yup";
import { Formik } from "formik";
import React from "react";
import ErrorMessage from "../components/form/ErrorMessage";
import { colors } from "../config/colors";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";

const SignUp = () => {
  const navigate = useNavigate();

  const { isSigningUp, signup } = useAuthStore();

  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    userType: yup.string().required("You have to select one"),
    phoneNumber: yup.string().required("Phone Number is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSignUp = async (e) => {
    const success = await signup(e);
    if (success) {
      Swal.fire({
        showConfirmButton: false,
        icon: "success",
        title: "Account created successfully",
        text: "Please check your email for the OTP to verify your account",
        timer: 3000,
      }).then(() => {
        navigate("/verify-account", { replace: true });
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <FormCard
          title={"Create an Account"}
          subText={
            " Join the league of students that study easier and live better."
          }
          reRouteCaption={"Already have an account?"}
          reRouteLabel={"Login"}
          reRouteFunction={() => {
            navigate("/login");
          }}
        >
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              userType: "Student",
              phoneNumber: "",
              password: "",
            }}
            validationSchema={schema}
            onSubmit={(e) => {
              console.log("Form Submitted", e);
              handleSignUp(e);
            }}
          >
            {({
              errors,
              setFieldTouched,
              handleChange,
              touched,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Div>
                  <ErrorMessage
                    error={errors?.firstName}
                    visible={touched?.firstName}
                  />
                  <InputField
                    placeholder="First Name"
                    onBlur={() => {
                      setFieldTouched("firstName");
                    }}
                    onChange={handleChange("firstName")}
                  />
                </Div>
                <Div>
                  <ErrorMessage
                    error={errors?.lastName}
                    visible={touched?.lastName}
                  />
                  <InputField
                    placeholder="Last Name"
                    onBlur={() => {
                      setFieldTouched("lastName");
                    }}
                    onChange={handleChange("lastName")}
                  />
                </Div>
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
                    error={errors?.userType}
                    visible={touched?.userType}
                  />

                  <SelectInput onChange={handleChange("userType")}>
                    <option value={"Student"}>Student</option>
                    <option value={"Agent"}>Agent</option>
                    <option value={"Landlord"}>Landlord</option>
                  </SelectInput>
                </Div>
                <Div>
                  <ErrorMessage
                    error={errors?.phoneNumber}
                    visible={touched?.phoneNumber}
                  />
                  <InputField
                    placeholder="Phone Number"
                    onBlur={() => {
                      setFieldTouched("phoneNumber");
                    }}
                    onChange={handleChange("phoneNumber")}
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

                <Button
                  text={isSigningUp ? <CircularProgress /> : "Sign Up"}
                  disabled={isSigningUp}
                  type="submit"
                />
              </Form>
            )}
          </Formik>
        </FormCard>
      </Wrapper>
    </Container>
  );
};

export default SignUp;

const SelectInput = styled.select`
  width: 99%;
  height: 45px;
  border: 1px solid ${colors.primary};
  padding: 5px 8px;
  font-family: "montserrat";
  outline: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  /* margin-top: 20px; */
  /* height: 35px; */
`;

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
