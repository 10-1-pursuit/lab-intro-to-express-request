const express = require("express");



const app = express();

const { PORT } = process.env


app.get("/:verb/:adjective/:noun", (req, res) => {
    //     console.log(req.query)
    const verb = req.params.verb;
    const adjective = req.params.adjective;
    const noun = req.params.noun;

    //     const {foo} = req.query;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

app.get("/bugs", (req, res) => {
    res.send(`
    <h1>99 little bugs in the code</h1>
    <a href="/bugs/101">pull one down, patch it around</a> `)
});

// app.get("bugs/:101", (req,res ) => {
//     res.send(`<h1>${numberOfBugs} little bugs in the code</h1>`)
// });
app.get('/bugs/:numberOfBugs', (req, res) => {
    const numberOfBugs = req.params.numberOfBugs
    if (numberOfBugs > 200) {
        res.send(` <h1>${numberOfBugs} little bugs in the code</h1>
    <a href="/bugs">Start over</a>
    `);
    } else {
        const nextNumberOfBugs = numberOfBugs + 2;
        res.send(`
      <h1>${numberOfBugs} little bugs in the code</h1>
      <a href="/bugs/${nextNumberOfBugs}">Pull one down, patch it around</a>`
        );
    }
});


const pokemonData = require("./models/pokemon.json");
console.log(pokemonData[0]);

app.get("/pokemon", (req, res) => {

    res.json(pokemonData)
});


app.get('/pokemon/:indexOfArray', (req, res) => {
    const indexOfArray = req.params.indexOfArray
    res.send(pokemonData[indexOfArray])
})






// EXPORT
module.exports = app;