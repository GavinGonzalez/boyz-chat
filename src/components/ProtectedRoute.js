
import React, { Component, useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { Context } from '../contexts/DataProvider';
import { useCookies } from 'react-cookie';



function ProtectedRoute(props) {
  

  //const { isSignedIn, setIsSignedIn } = useContext(Context);
  
  const [cookies, setCookie] = useCookies(["user"]);
  
  return (
    <Route {...props.rest} render={() => {

      /*
      we want to be able to access private routes though the 
      URL bar at the top of the website but the promblem
      is that them we use that bar the page refreshes and we
      loose our state (isSignedIn) 

      The solution to this is to let the user navigate
      to private pages based on the JWT token in cookies storage
      shown on the line below
      */

      if (cookies.token) {
        console.log("true");
        return <props.component/>
      } else {
        console.log("false");
        return (
          <Redirect to={{pathname: '/Home', state: { from: props.location}}}/>
        );
      }
    }}/>
  );
};

export default ProtectedRoute;
