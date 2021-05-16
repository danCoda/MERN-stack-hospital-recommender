const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/user'); // User model for Mongoose.

const PORT_NUMBER = 9000;
const DATABASE_NAME = 'zombieVictims';
const API_DOMAIN = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080";
const app = express();

app.use(express.urlencoded({ extended: true })); // Be able to parse req.body.
app.use(cors()); // Allow us to communicate with our locally-run frontend.
app.use(bodyParser.json()); // Allow us to process incoming request bodies.

const connectToDatabase = () => {
    mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE_NAME}`, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
        .then(() => {
            console.log(`Connected to Database ${DATABASE_NAME}!`);
        })
        .catch(e => {
            console.log("Connection FAILED to Database: ", e);
        });
}

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

connectToDatabase();

//========================
// Routes:
//========================

app.listen(PORT_NUMBER, () => {
    console.log(`Backend running on port ${PORT_NUMBER}!`);
});

// Get all users.
app.get('/users', async (req, res) => {
    const users = await User.find({});
    res.send(users);
});

// Get a user.
app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.send(user);
});

// Add new user.
app.post('/users', async (req, res) => {
    const newUser = new User({
        name,
        painLevel,
        diagnosisId
    } = req.body);

    await newUser.save();
    res.send(req.body);
});

// Delete user. 
app.delete('/users/:id', async (req, res) => {
    const deletedProduct = await User.findByIdAndDelete(req.params.id);
    // Return available users.
    const users = await User.find({});
    res.send(users);
});

// Get a list of illnesses. 
app.get('/illnesses', async (req, res) => {
    const url = `${API_DOMAIN}/illnesses`;
    const illnesses = await getExternalJSON(url);
    res.send(illnesses.data);
});

// Get a list of hospitals. 
app.get('/hospitals', async (req, res) => {
    const url = `${API_DOMAIN}/hospitals`;
    const hospitals = await getExternalJSON(url);

    res.send(hospitals.data);
});