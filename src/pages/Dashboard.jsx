import React from 'react'
import {useAuthStore} from "../store/useAuthStore"

const Dashboard = () => {

    const {authUser} = useAuthStore()

  return (
    <div style={{paddingTop: "100px"}}>This is dashboard page {authUser?.firstName}{authUser?.lastName}</div>
  )
}

export default Dashboard