const express = require('express');

const app = express();
const PORT_NUMBER = 9000;

app.get('/test', (req, res) => {
    console.log("Received /test!");
    res.send("Hello from /test");
});

app.listen(PORT_NUMBER, () => {
    console.log(`Backend running on port ${PORT_NUMBER}!`);
});