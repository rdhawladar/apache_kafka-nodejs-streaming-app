
const express = require('express');
const app = express();
const port = process.env.HOST_PORT;

app.listen(port, () => {
    console.log(`Server Started:: Server listening at: ${process.env.HOST_ADDRESS}:${port}`)
});

module.exports = app;
