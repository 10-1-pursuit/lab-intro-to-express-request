const express = require('express');
const app = express();

const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

app.get('/bugs', (req, res) => {
    res.send("99 little bugs in the code");
});





app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

app.get('/pokemon/:indexOfArray', (req, res) => {

    res.send(pokemon[req.params.indexOfArray]);
});






app.get("/:running/:silly/:name", (req, res) => {
    res.send("Congratulations on starting a new project called jumping-joyous-jellybean!");
});










module.exports = app