const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Testing");
});

app.get("/:verb/:adjective/:noun/", (req, res)=>{
    console.log(req.params);
    const {verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})


















module.exports = app;