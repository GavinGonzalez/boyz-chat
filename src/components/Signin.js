import React, { useRef, useState, useReducer, useContext } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import validator from 'validator';
import { Context } from '../contexts/DataProvider';

let u = false;


export default function Signin() {
  
  const { isSignedIn, setIsSignedIn } = useContext(Context);
 
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cookies = new Cookies();
  

  const [ errorMessage, setErrorMessage ] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const query = {
      email: email,
      password: password
    };
    //checking is password is strong before doing anything else
    /*
    if(validator.isStrongPassword(password, {
      minLength: 8,
      
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
      
    })) {
    */
    setErrorMessage("");
    try {

        const response = await axios.post('http://localhost:4000/boyz-chat/signin', query);
        console.log("query was sent successfuly");
        console.log("jwt response from server", response.data);
        
        //saving jwt to cookie storage
        cookies.set('token', response.data, { path: '/' });

        console.log("cookies", cookies.get('token'));

        //clear form
        event.target.reset();
        window.location.reload(false);

        //setting the interal state as signed in
        //navigate user to board page 
        
      
      
      
    } catch(e) {
      console.log(e);
      console.log("cookies", cookies.get('token'));
      setErrorMessage("something went wrong");
    }
  //}

    
    //window.location.href = 'http://localhost:4000/boyz-chat/signin';
    
  }

  
  

  

  


  const retreaveCookie = () => {
    if(cookies.token) {
      return true;
    }
    return false;
  };


  return (
    <>
    <div className="h1">Welcome Boyz-chat</div>
    <div className="h4">Login Loser</div> 
    <form onSubmit={handleSubmit}>
      
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="form-control mb-2"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div> 
        <label htmlFor="password">Password</label>
        <input
          className="form-control mb-3"
          id="password"
          value={password}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
      
    </form>
    <div className="errorMessage">{errorMessage}</div>


    {cookies.get('token') ? <Redirect to="/Board" />: null}

   
    </>

  
  );
};



