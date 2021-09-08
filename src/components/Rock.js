import React, { useContext } from 'react';
import { withRouter, Link } from "react-router-dom";
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Context } from '../contexts/DataProvider';
import axios from 'axios';



//ws://localhost:300
function Rock() {
    /*
    var client = new WebSocket('ws://localhost:4000/yellow');
    console.log(client);
    client.onopen = function() {
        console.log('hello from the client');
    };
    */
  
    return (
  
        <>
        <div>
            your in the rock page
        </div>

        
        </>
    );
  };
  
export default Rock;
  