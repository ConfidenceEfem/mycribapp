import styled from "styled-components";
import Header from "./components/Header";
import { colors } from "./config/colors";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import VerifyAccount from "./pages/VerifyAccount";
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import DashboardWrapper from "./pages/DashboardWrapper";
import PrivateRoute from "./components/PrivateRoute";
import Lodges from "./pages/Lodges";
import UserProfile from "./dashboard/UserProfile";
import UploadLodge from "./dashboard/UploadLodge";
import MyLodgs from "./dashboard/MyLodgs";
import Agents from "./pages/Agents";
import AgentDetailedProfile from "./pages/AgentDetailedProfile";
import Settings from "./dashboard/Settings";
import ResetPassword from "./dashboard/ResetPassword";
import PhoneNumberVerification from "./dashboard/PhoneNumberVerification";
import EditLodge from "./dashboard/EditLodge";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lodges" element={<Lodges />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/i" element={<AgentDetailedProfile />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
          <Route
            path="/user-profile"
            element={
              <PrivateRoute>
             <DashboardWrapper>
              <UserProfile/>
             </DashboardWrapper>
               </PrivateRoute>
            }
          />
          <Route
            path="/upload-lodges"
            element={
              <PrivateRoute>
             <DashboardWrapper>
              <UploadLodge/>
             </DashboardWrapper>
               </PrivateRoute>
            }
          />
          <Route
            path="/mylodges"
            element={
              <PrivateRoute>
             <DashboardWrapper>
              <MyLodgs/>
             </DashboardWrapper>
               </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
             <DashboardWrapper>
              <Settings/>
             </DashboardWrapper>
               </PrivateRoute>
            }
          />
          <Route
            path="/settings/reset-password"
            element={
              <PrivateRoute>
             <DashboardWrapper>
              <ResetPassword/>
             </DashboardWrapper>
               </PrivateRoute>
            }
          />
          <Route
            path="/settings/verify-phone-number"
            element={
              <PrivateRoute>
             <DashboardWrapper>
              <PhoneNumberVerification/>
             </DashboardWrapper>
               </PrivateRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
             <DashboardWrapper>
              <EditLodge/>
             </DashboardWrapper>
               </PrivateRoute>
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
  color:black;
`;
