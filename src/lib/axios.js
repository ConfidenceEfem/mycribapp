import axios from "axios"

const baseUrl = "http://localhost:5000/api"
const mainUrl = "https://mycribserver.onrender.com/api"

export const axiosInstance = axios.create({
    baseURL: baseUrl
})

export const axiosWithToken = (token) =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  
  export const axiosWithTokenFormData = (token) =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });


//   axiosWithToken(accessToken).post("/listings", { name: "Lodge A" });
    // axiosWithTokenFormData(accessToken).post("/listings", formData);