import styled from "styled-components";
import Button from "../components/Button";
import FormCard from "../components/form/FormCard";
import InputField from "../components/form/InputField";
import * as yup from "yup";
import { Formik } from "formik";
import React from "react";
import ErrorMessage from "../components/form/ErrorMessage";

const VerifyAccount = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const schema = yup.object().shape({
    otpCode: yup.string().required("OTP Code is required"),
  });

  return (
    <Container>
      <Wrapper>
        <FormCard
          title={"Verify your Account"}
          subText={
            "Enter the 6-digit code we sent to your email to verify your account."
          }
          reRouteCaption={"Didn't get a code?"}
          reRouteLabel={"Resend Code"}
        >
          <Formik
            initialValues={{
              otpCode: "",
            }}
            validationSchema={schema}
            onSubmit={(e)=>{
              console.log(e, "otp code submitted")
            }}
          >
            {({ errors, setFieldTouched, touched, handleChange, handleSubmit }) => (
              <Form
              onSubmit={handleSubmit}
              >
                <Div>
                  <ErrorMessage
                    error={errors?.otpCode}
                    visible={touched?.otpCode}
                  />
                  <InputField
                    placeholder="OTP Code"
                    type="password"
                    isShowPassword={isShowPassword}
                    showPassword={() => {
                      setIsShowPassword(!isShowPassword);
                    }}
                    onBlur={() => {
                      setFieldTouched("otpCode");
                    }}
                    onChange={handleChange("otpCode")}
                  />
                </Div>
                <Button text={"Verify Account"} />
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
