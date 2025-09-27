import React from "react";
import styled from "styled-components";
import InputField from "../components/form/InputField";
import Button from "../components/Button";
import ErrorMessage from "../components/form/ErrorMessage";
import GoBack from "./components/GoBack";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useAuthStore } from "../store/useAuthStore";
import CircularProgress from "@mui/material/CircularProgress";

const ResetPassword = () => {
  const { resetPassword, isResettingPassword } = useAuthStore();

  const navigate = useNavigate();

  const schema = yup.object().shape({
    currentPassword: yup.string().required("Current password is required"),
    newPassword: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("New password is required"),
  });

  const handleResetPassword = async (data) => {
    const success = await resetPassword(data);
    if (success) {
      Swal.fire({
        icon: "success",
        title: "Password Reset Successful",
        text: "Your password has been updated successfully",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        navigate("/settings", { replace: true });
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <GoBack />
        <Formik
          onSubmit={(data) => {
            handleResetPassword(data);
          }}
          validationSchema={schema}
          initialValues={{
            newPassword: "",
            currentPassword: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <FormHolder onSubmit={handleSubmit}>
              <Div>
                <ErrorMessage
                  error={errors?.currentPassword}
                  visible={touched?.currentPassword}
                />
                <InputField
                  onChange={handleChange("currentPassword")}
                  onBlur={() => {
                    setFieldTouched("currentPassword");
                  }}
                  style={{
                    width: "100%",
                  }}
                  placeholder={"Current Password"}
                />
              </Div>
              <Div>
                <ErrorMessage
                  error={errors?.newPassword}
                  visible={touched?.newPassword}
                />
                <InputField
                  onChange={handleChange("newPassword")}
                  onBlur={() => {
                    setFieldTouched("newPassword");
                  }}
                  style={{
                    width: "100%",
                  }}
                  placeholder={"New Password"}
                />
              </Div>
              <Button
                text={
                  isResettingPassword ? (
                    <CircularProgress
                      enableTrackSlot
                      size="20px"
                      color="inherit"
                    />
                  ) : (
                    "Update Profile"
                  )
                }
                type="submit"
              />
            </FormHolder>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default ResetPassword;

const Div = styled.div`
  width: 100%;
`;

const FormHolder = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;

  width: 88%;
  flex-direction: column;
  gap: 40px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 40px 0px;
  height: 100%;
`;
