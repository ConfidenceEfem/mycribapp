import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import {useNavigate} from "react-router"
import { getErrorMessage } from "../lib/errorHandler";
import Swal from "sweetalert2"

const navigate = useNavigate

export const useAuthStore = create((set) => ({
  isSigningUp: false,
  isLogingin: false,
  isVerifyingAccount: false,
  isResendingOTP: false,
  authUser: null,
  accessToken:null,
  refreshToken:null,

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(res?.data, "sign up data");
      set({ authUser: res?.data?.data});
      return true
    
    } catch (error) {
      console.log("error while signing up", error, getErrorMessage(error));
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: getErrorMessage(error),
        timer: 3000,
        showConfirmButton: false,
      })
    } finally {
      set({ isSigningUp: false });
    }
  },
  login: async (data) => {
    set({ isLogingin: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log(res?.data, "loging data");
      set({ authUser: res?.data?.data });
      if(res?.data?.data?.token){
        set({accessToken: res?.data?.data?.token?.accessToken})
        set({refreshToken: res?.data?.data?.token?.refreshToken})
        localStorage.setItem("accessToken", JSON.stringify(res?.data?.data?.token?.accessToken))
        localStorage.setItem("refreshToken", JSON.stringify(res?.data?.data?.token?.refreshToken))
      }
      return {status: true, isEmailVerified: res?.data?.data?.isEmailVerified}
    } catch (error) {
      console.log("error while signing up", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: getErrorMessage(error),
        timer: 3000,
        showConfirmButton: false,
      })
    } finally {
      set({ isLogingin: false });
    }
  },
  verifyAccount: async (data) => {
    set({ isVerifyingAccount: true });
    try {
      const res = await axiosInstance.post("/auth/verify-account", data);
      console.log(res?.data, "verify account data");
      set({ authUser: res?.data?.data });
      return true
    } catch (error) {
      console.log("error while verifying account up", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: getErrorMessage(error),
        timer: 3000,
        showConfirmButton: false,
      })
    } finally {
      set({ isVerifyingAccount: false });
    }
  },
  resendOTP: async (data) => {
    set({ isResendingOTP: true });
    try {
      const res = await axiosInstance.post("/auth/resend-otp", data);
      console.log(res?.data, "resend otp data");
      set({ authUser: res?.data?.data });
      return true
    } catch (error) {
      console.log("error while sending otp", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: getErrorMessage(error),
        timer: 3000,
        showConfirmButton: false,
      })
    } finally {
      set({ isResendingOTP: false });
    }
  },
}));
