import React from 'react'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
 const getToken = localStorage.getItem("accessToken")

 return !getToken ? <Navigate to={"/login"}/> : children
}

export default PrivateRoute