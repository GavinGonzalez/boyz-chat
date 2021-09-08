const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("connected to database");
});

app.use(express.json());
app.use(cors());
app.use('/boyz-chat', authRoutes);

app.get('/boyz-chat', async (req, res) => {
    
});

app.listen(4000, () => {
    console.log("server is up and running");
});

/*
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ server: app, path: "/yellow" });

wss.on('connection', (socket) => {

    console.log("this is from the server");
    socket.on('message', (msg) => {
        console.log('Received: ' + msg);
    });

    socket.send('something');
});
*/