import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  axiosInstance,
  axiosWithToken,
  axiosWithTokenFormData,
} from "../lib/axios";
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
      userListing: [],
      agents: [],
      lodges: [], 
      lodge:{},
      isNewLodgeCreating: false,
      isUserUpdatingData: false,
      isImageUploading: false,
      isallLodgesByUser: false,
      isResettingPassword: false,
      isGettingAllLodge: false,
      isGettingOneLodge: false,
      isGettingAllAgents: false,
      isUpdatingLodgeData: false,


      signup: async (data) => {
        set({ isSigningUp: true });
        try {
          const res = await axiosInstance.post("/auth/signup", data);
          set({ authUser: res?.data?.data });
          return true;
        } catch (error) {
          console.log("error while signing up", error, getErrorMessage(error));
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 2000,
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
            timer: 2000,
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
          if(res){
            Swal.fire({
              showConfirmButton: false,
              icon: "success",  
              title: "Lodge Created Successfully",
              timer: 2000,
            });
          }
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
            timer: 2000,
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
            timer: 2000,
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
          console.log("my tokken", token)
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
      updateLodgeData: async (data, id) => {
        try {
          set({ isUpdatingLodgeData: true });
          const token = get().accessToken;
          console.log("my tokken", token)
          const res = await axiosWithToken(token).patch(
            `/listing/${id}`,
            data
          );

          if (res) {
            Swal.fire({
              showConfirmButton: false,
              icon: "success",
              title: "Updated Lodge data Successfully",
              timer: 1000,
            });
          }
          return true;
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: getErrorMessage(error),
            timer: 1000,
            showConfirmButton: false,
          });
        } finally {
          set({ isUpdatingLodgeData: false });
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
        set({userListing: res?.data?.data})
          return res?.data
        } catch (error) {
          console.log(getErrorMessage(error), "error while fetching all lodges by user");
         
        } finally {
          set({ isallLodgesByUser: false });
        }
      },
      getAllLodges: async () => {
        try {
          set({isGettingAllLodge: true})
          const res = await axiosInstance.get("/listing")
            if(res?.data?.data?.length === 0) {
          set({lodges: []})
          return []
        }
          set({lodges: res?.data?.data})
          return res?.data?.data
        } catch (error) {
          console.log(getErrorMessage(error))
        }finally{
          set({isGettingAllLodge: false})
        }
      },
      getOneLodge: async (id) => {
        try {
          set({isGettingOneLodge: true})
          const res = await axiosInstance.get(`/listing/${id}`)
            if(res?.data?.data?.length === 0) {
          set({lodge: []})
          return []
        }
          set({lodge: res?.data?.data})
          return res?.data?.data
        } catch (error) {
          console.log(getErrorMessage(error))
        }finally{
          set({isGettingOneLodge: false})
        }
      },

      getAllAgents: async () => {
        try {
          set({isGettingAllAgents: true})
          const res = await axiosInstance.get("/user/agents")
          console.log("all agents data", res?.data)
          if(res?.data?.data?.length === 0) {
            set({agents: []})
            return []
          }
          set({agents: res?.data?.data})
        } catch (error) {
          console.log(getErrorMessage(error))
        }finally{
          set({isGettingAllAgents: false})
        }
      },
      logoutUser: async () => {
        try {
            const token = get().accessToken
          const res = await axiosWithToken(token).post("/auth/logout")
        console.log(res?.data)
      set({authUser: null, accessToken: null, refreshToken: null})
        } catch (error) {
           set({authUser: null, accessToken: null, refreshToken: null})
           console.log("error while sending otp", error);
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
