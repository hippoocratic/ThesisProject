
import React from 'react';
import {Route, Redirect } from "react-router-dom";

function ProtectedRoute({isAuthenticated : isAuth, component:Component, ...rest}){
    return(
        <Route
        {...rest} 
        render={(props)=>{
if (isAuth){
    console.log(1)
    return <Component/>;
}
else
{
    return (
    <Redirect to= {{pathname : '/notfound', state: {from: props.location}}}/>
       )
    } 
  }}/>
);
}
export default ProtectedRoute;