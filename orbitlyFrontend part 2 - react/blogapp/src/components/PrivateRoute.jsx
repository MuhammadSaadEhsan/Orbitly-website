import React from 'react'
import { isLoggedIn } from '../Auth'
import { Navigate, Outlet } from 'react-router-dom'
import Login from '../pages/login'

function PrivateRoute() {

    // return <h1>i am private route</h1>
    return isLoggedIn() ? <Outlet/> : <Navigate to={'/login'} />
    // return <Outlet/>;
}

export default PrivateRoute