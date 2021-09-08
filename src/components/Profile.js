import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';

function Profile() {
  return (

    <>
    <div>
        your in the home page
    </div>
    
    <Link className="btn btn-primary" to="/Profile" >Sign up</Link>

    </>
    
  );
};

export default Profile;
