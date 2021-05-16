const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: getId } = require('uuid');
const mongoose = require('mongoose');

const User = require('./models/user'); // User model for Mongoose.

const PORT_NUMBER = 9000;
const API_DOMAIN = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080";
const app = express();

// Be able to parse req.body:
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Allow us to speak with our locally-run frontend.
app.use(bodyParser.json()); // Allow us to process incoming request bodies.


const connectToDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/zombieVictims', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Connected to Database.");
        })
        .catch(e => {
            console.log("Connection FAILED to Database: ", e);
        });
}

connectToDatabase();

const getExternalJSON = url => {
    try {
        return axios.get(url);
    } catch (e) {
        console.error(e);
        return {
            data: "Error. Please see the Administrator."
        };
    }
}

// Get all users.
app.get('/users', async (req, res) => {
    const users = await User.find({ })
    res.send(users);
});

// Add new user.
app.post('/users', (req, res) => {
    const {
        name,
        painLevel,
        diagnosisId
    } = req.body;
    const newUser = {
        id: getId(),
        name,
        painLevel,
        diagnosisId
    }
    users.push(newUser);
    console.log("New user added: ", newUser.name);
    console.log("Users: ", users);
    res.send(newUser);
});

// Get a list of illnesses. 
app.get('/illnesses', async (req, res) => {
    const url = `${API_DOMAIN}/illnesses`;
    const illnesses = await getExternalJSON(url);
    console.log("Illesses requested.");
    res.send(illnesses.data);
});

// Get a list of hospitals. 
app.get('/hospitals', async (req, res) => {
    const url = `${API_DOMAIN}/hospitals`;
    const hospitals = await getExternalJSON(url);

    res.send(hospitals.data);
});

app.listen(PORT_NUMBER, () => {
    console.log(`Backend running on port ${PORT_NUMBER}!`);
});