const express = require('express');
const app = express();

app.get('/bugs', (req,res)=>{
res.send("99 little bugs in the code");
});

app.get("/:running/:silly/:name", (req, res) => {
    res.send("Congratulations on starting a new project called jumping-joyous-jellybean!");
  });










module.exports = app