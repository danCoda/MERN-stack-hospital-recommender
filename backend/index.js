const express = require('express');
const axios = require('axios');
const {
    v4: getId
} = require('uuid');

const PORT_NUMBER = 9000;
const API_DOMAIN = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080";
const app = express();
// Be able to parse req.body:
app.use(express.urlencoded({
    extended: true
}));

let users = [{
        id: 1,
        name: "Tod Tester",
        painLevel: 3,
        diagnosisId: 1,
    },
    {
        id: getId(),
        name: "Dan",
        painLevel: 4,
        diagnosisId: 2,
    },
    {
        id: getId(),
        name: "Peter",
        painLevel: 5,
        diagnosisId: 2,
    }
]

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

app.get('/test', (req, res) => {
    console.log("Received /test!");
    res.send("Hello from /test");
});

// Get all users.
app.get('/users', (req, res) => {
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
    // Redirect to list of users.
    res.redirect('/users');
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

app.listen(PORT_NUMBER, () => {
    console.log(`Backend running on port ${PORT_NUMBER}!`);
});