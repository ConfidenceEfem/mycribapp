import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  axiosInstance,
  axiosWithToken,
  axiosWithTokenFormData,
} from "../lib/axios";
import { useNavigate } from "react-router";
import { getErrorMessage } from "../lib/errorHandler";
import Swal from "sweetalert2";


export const useAuthStore = create(
  persist(
    (set, get) => ({
      isSigningUp: false,
      isLogingin: false,
      isVerifyingAccount: false,
      isResendingOTP: false,
      authUser: null,
      accessToken: null,
      refreshToken: null,
      userListing: null,
      isNewLodgeCreating: false,
      isUserUpdatingData: false,
      isImageUploading: false,
      isallLodgesByUser: false,
      isResettingPassword: false,

      signup: async (data) => {
        set({ isSigningUp: true });
        try {
          const res = await axiosInstance.post("/auth/signup", data);
          console.log(res?.data, "sign up data");
          set({ authUser: res?.data?.data });
          return true;
        } catch (error) {
          console.log("error while signing up", error, getErrorMessage(error));
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 3000,
            showConfirmButton: false,
          });
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
          if (res?.data?.data?.token) {
            set({ accessToken: res?.data?.data?.token?.accessToken });
            set({ refreshToken: res?.data?.data?.token?.refreshToken });
          }
          return {
            status: true,
            isEmailVerified: res?.data?.data?.isEmailVerified,
          };
        } catch (error) {
          console.log("error while signing up", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 3000,
            showConfirmButton: false,
          });
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
          if (res?.data?.data?.token) {
            set({ accessToken: res?.data?.data?.token?.accessToken });
            set({ refreshToken: res?.data?.data?.token?.refreshToken });
          }
          return true;
        } catch (error) {
          console.log("error while verifying account up", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 3000,
            showConfirmButton: false,
          });
        } finally {
          set({ isVerifyingAccount: false });
        }
      },
      createNewLodge: async (data) => {
        set({ isNewLodgeCreating: true });
        try {
          const token = get().accessToken;
          const res = await axiosWithTokenFormData(token).post(
            "/listing/new",
            data
          );
          console.log(res?.data, "create new lodge data");
          set({ authUser: res?.data?.data });
          return true;
        } catch (error) {
          console.log("error while creating new lodge", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 3000,
            showConfirmButton: false,
          });
        } finally {
          set({ isNewLodgeCreating: false });
        }
      },
      resetPassword: async (data) => {
        set({ isResettingPassword: true });
        try {
          const token = get().accessToken;
           await axiosWithToken(token).post("/user/reset-password", data);
          return true;
        } catch (error) {
           Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 3000,
            showConfirmButton: false,
          });
        } finally {
          set({ isResettingPassword: false });
        }
      },
      uploadUserProfileImage: async (data) => {
        set({ isImageUploading: true });
        try {
          const token = get().accessToken;
          const res = await axiosWithTokenFormData(token).post(
            "/user/upload-avatar",
            data
          );
          set({ authUser: res?.data?.data });
          return true;
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 3000,
            showConfirmButton: false,
          });
        } finally {
          set({ isImageUploading: false });
        }
      },
      updateUserData: async (data) => {
        try {
          set({ isUserUpdatingData: true });
          const token = get().accessToken;
          const res = await axiosWithToken(token).post(
            "/user/update-user",
            data
          );

          if (res) {
            set({ authUser: res?.data?.data });
            Swal.fire({
              showConfirmButton: false,
              icon: "success",
              title: "User Updated Successfully",
              timer: 3000,
            });
          }
          return true;
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 3000,
            showConfirmButton: false,
          });
        } finally {
          set({ isUserUpdatingData: false });
        }
      },
      allLodgesByUser: async () => {
        try {
          set({isallLodgesByUser: true})
          const token = get().accessToken
          if(!token) throw new Error("No token found")
          const res = await axiosWithToken(token).get("/listing/user-lodges")
        if(res?.data?.data?.length === 0) {
          set({userListing: []})
          return []
        }
          console.log(res?.data?.data, "all lodges by user");
          set({userListing: res?.data?.data})
          return res?.data
        } catch (error) {
          console.log(error, "error while fetching all lodges by user");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 3000,
            showConfirmButton: false,
          });
        } finally {
          set({ isallLodgesByUser: false });
        }
      },
      resendOTP: async (data) => {
        set({ isResendingOTP: true });
        try {
          const res = await axiosInstance.post("/auth/resend-otp", data);
          console.log(res?.data, "resend otp data");
          set({ authUser: res?.data?.data });
          return true;
        } catch (error) {
          console.log("error while sending otp", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 3000,
            showConfirmButton: false,
          });
        } finally {
          set({ isResendingOTP: false });
        }
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
      partialize: (state) => ({
        authUser: state.authUser,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
);
