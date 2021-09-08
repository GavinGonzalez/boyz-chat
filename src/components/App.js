import React, {useState, useContext} from 'react';
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute"; 
import Home from "./Home";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Board from './Board';
import Profile from './Profile';
import Rock from './Rock';
import Signin from './Signin';
import { Context } from '../contexts/DataProvider';
import { useCookies } from 'react-cookie';

/*
 <Container 
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh"}}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup/>
        </div>
  </Container>
*/


function App() {

  

  return (

    

      <Router>
        <Switch>
          
          <Route exact path="/Home" component={Home} />
          <Route path="/Rock" component={Rock} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Signin" component={Signin} />
          <Route path="/Profile" component={Profile} />
          
          <ProtectedRoute path="/Board" component={Board} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router> 
   
  );
}

export default App;
