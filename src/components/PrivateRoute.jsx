import React from 'react'
import { Navigate } from 'react-router'
import { useAuthStore } from "../store/useAuthStore";

const PrivateRoute = ({children}) => {

const {accessToken} = useAuthStore()

 return !accessToken ? <Navigate to={"/login"}/> : children
}

export default PrivateRoute