import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';

function Home() {
  return (

    <>
    <div>
        your in the home page
    </div>
    
    <Link className="btn btn-primary" to="/Signup" >Sign up</Link>

    </>
    
  );
};

export default Home;
