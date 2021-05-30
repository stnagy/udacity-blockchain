// import express
const express = require("express");

// initialize app
const app = express();

// set port
const port = 8080;

// handle http request to "/" with "Hello world!" response
app.get("/", (req, res) => {
    console.log("Request received, sending response.");
    res.send("Hello world!");
});

// tell the app to start listening at the port
app.listen(port, () =>{
    console.log(`The app is listening at port ${port}`);
})