import React from 'react'
import { Route, Redirect } from 'react-router-dom'
function ProtectedRoute({ component: Component, ...rest }) {
    const isAuth = localStorage.getItem('isAuth');
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    // console.log("pr :",isAuth)
    
    
    return (
        <>
        {isLoggedIn == "true" ? <Component /> : isAuth == "true" ? <Component /> : <Redirect to={{path:'/'}}/>}
            
        {/* {isAuth == "true" ? <Component /> : <Redirect to={{path:'/'}}/>} */}

        </>
    )
 }

 export default ProtectedRoute