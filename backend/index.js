const express = require('express');
const axios = require('axios');

const app = express();
const PORT_NUMBER = 9000;
const API_DOMAIN = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080";

const getExternalJSON = url => {
    try {
        return axios.get(url);
    } catch (e) {
        console.error(e);
        return { data: "Error. Please see the Administrator." };
    }
}

app.get('/test', (req, res) => {
    console.log("Received /test!");
    res.send("Hello from /test");
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