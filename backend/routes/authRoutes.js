const express = require('express');
const mongoose = require('mongoose');
const signupTemplate = require('../models/SignupModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





const router = express.Router();
let y = 0;
router.post('/signup', async (req, res) => {
    /*
     req.body.password = hashPwd;


                const signupUser = new signupTemplate({
                    fullName: req.body.fullName,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                });

                await signupUser.save();
                console.log("user created");
                
    */
    

    try {
        const saltRounds = 10;
        
        let hashPwd = '';
        
        const isNewUser = await signupTemplate.findOne({email: req.body.email});
        console.log("user found", isNewUser);
        if(isNewUser) {
            bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            hashPwd = hash;

            if(err) {
                console.log("something went wrong with generating a salt");
                return;
            }

            req.body.password = hashPwd;


            const user = new signupTemplate({
                fullName: req.body.fullName,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });

            await user.save();
            console.log("user created");

            const token = jwt.sign(
                { userId: user._id }, 
                process.env.JWT_TOKEN_KEY, 
                {expiresIn: '2h'}
            );
            
            console.log(token);

            res.send(token);
         
        });
    } else {
        res.status(422).send("user with this email already exits");
    }
        
        
    } catch(err) {
        console.log("something went wrong");
        console.log(err);

        return res.status(422).send(err.response);
    }
    
});

router.post('/signin', async (req, res) => {

    const saltRounds = 10;

    try {

        const searchedUser = await signupTemplate.findOne({email: req.body.email});
        if(searchedUser) {
            bcrypt.compare(req.body.password, searchedUser.password, function(err, data) {
                if(err) {
                    res.status(422).send(err.response);
                } 

                if(data) {
                    const token = jwt.sign(
                        { userId: searchedUser._id }, 
                        process.env.JWT_TOKEN_KEY, 
                        {expiresIn: '2h'}
                    );

                    res.send(token);

                } else {
                    res.status(400).json({ msg: "User not exist" });
                    //return response.json({success: false, message: 'passwords do not match'});
                }
            })
    } else {
        res.status(422).send("user does not exist in signin route");
    }
    
    } catch(err) {
        console.log("err happended in signin route", err);
        res.status(422).send(err.response);
    }

});



module.exports = router;