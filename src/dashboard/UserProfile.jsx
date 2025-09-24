import styled from "styled-components";
import img from "../assets/avatar.png";
import { AddAPhotoOutlined } from "@mui/icons-material";
import InputField from "../components/form/InputField";
import Button from "../components/Button";
import { colors } from "../config/colors";
import { Formik } from "formik";
import { useAuthStore } from "../store/useAuthStore";
import CircularProgress from "@mui/material/CircularProgress";

const UserProfile = () => {
  const {
    uploadUserProfileImage,
    isImageUploading,
    authUser,
    updateUserData,
    isUserUpdatingData,
  } = useAuthStore();

  const uploadChange = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("image", file);

    await uploadUserProfileImage(formData);
  };

  return (
    <Container>
      <Wrapper>
        <UploadAvatarCont>
          <ImageAndOverlay>
            <DisplayImg src={authUser?.avatarUrl ? authUser?.avatarUrl : img} />
            {isImageUploading && (
              <OverlayForImageLoading>
                <CircularProgress enableTrackSlot size="20px" color="inherit" />
              </OverlayForImageLoading>
            )}
          </ImageAndOverlay>
          <input
            type="file"
            id="pix"
            style={{
              display: "none",
            }}
            onChange={uploadChange}
          />
          <Circle htmlFor="pix">
            <AddAPhotoOutlined />
          </Circle>
        </UploadAvatarCont>
        <Formik
          enableReinitialize
          initialValues={{
            firstName: authUser?.firstName || "",
            lastName: authUser?.lastName || "",
            email: authUser?.email || "",
            phoneNumber: authUser?.phoneNumber || "",
            whatsappLink: authUser?.whatsappLink || "",
            userType: authUser?.userType || "",
            bio: authUser?.bio || "",
          }}
          onSubmit={(data) => {
            updateUserData(data);
          }}
        >
          {({ errors, handleSubmit, handleChange }) => (
            <FormAndButton onSubmit={handleSubmit}>
              <FormHolder>
                <InputField
                  placeholder={"First Name"}
                  defaultValue={authUser?.firstName}
                  onChange={handleChange("firstName")}
                />
                <InputField
                  placeholder={"Last Name"}
                  defaultValue={authUser?.lastName}
                  onChange={handleChange("lastName")}
                />
                <InputField
                  placeholder={"Email"}
                  defaultValue={authUser?.email}
                  onChange={handleChange("email")}
                />
                <InputField
                  placeholder={"Phone Number"}
                  defaultValue={authUser?.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                />
                <InputField
                  placeholder={"WhatsappLink"}
                  onChange={handleChange("whatsappLink")}
                  defaultValue={authUser?.whatsappLink}
                  style={{ flex: "1" }}
                />
                <InputField
                  placeholder={"User type"}
                  defaultValue={authUser?.userType}
                  onChange={handleChange("userType")}
                  style={{ flex: "1" }}
                  type="message"
                />
                <TextArea
                  placeholder={"Bio"}
                  style={{ flex: "1" }}
                  type="message"
                  onChange={handleChange("bio")}
                  defaultValue={authUser?.bio}
                />
              </FormHolder>
              <Button
                text={
                  isUserUpdatingData ? (
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
                disabled={isUserUpdatingData}
              />
            </FormAndButton>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default UserProfile;

const OverlayForImageLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

const ImageAndOverlay = styled.div`
  position: relative;
`;

const FormAndButton = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  width: 100%;
  resize: none;
  padding: 5px;
  font-family: "montserrat";
  border: none;
  outline: 1px solid ${colors.primary};
`;

const FormHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* background-color: green; */
  width: 650px;
  column-gap: 25px;
  row-gap: 15px;
`;

const Circle = styled.label`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
  border: 1px solid ${colors.primary};
`;

const DisplayImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
`;

const UploadAvatarCont = styled.div`
  position: relative;
  /* margin-bottom: 30px; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  padding: 40px 0px;
  height: 100%;
`;
