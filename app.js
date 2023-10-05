const express = require('express');
const app = express();
const pokemon = require("./models/pokemon.json")
// console.log(pokemon[0])

app.get('/', (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params;
    const projectName = `${verb}-${adjective}-${noun}`;
    res.send(`Congratulations on starting a new project called ${projectName}!`)
})

app.get('/bugs', (req, res) => {
    res.send('99 little bugs in the code <a href="/bugs/101">pull one down, patch it around</a>')
})

app.get('/bugs/:numberOfBugs', (req, res) => {
    const numberOfBugs = req.params.numberOfBugs;
    if (numberOfBugs <= 0) {
        res.send('No bugs left!');
    } else if (numberOfBugs <= 200) {
        res.send(`${numberOfBugs} little bugs in the code <a href="/bugs/${numberOfBugs + 2}">pull one down, patch it around</a>`)
    } else {
        res.send('<a href="/bugs">Start over</a>')
    }
})

app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params;
    const index = parseInt(indexOfArray)
    if (index < 0 || index >= pokemon.length) {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    } else {
        res.send(pokemon[index])
    }
})

app.get('/pokemon/search', (req, res) => {
    const { name } = req.query;

    console.log('Searching for:', name);

    const foundPokemon = pokemon.filter((poke) =>
        poke.name.toLowerCase() === name.toLowerCase()
    );

    console.log('Found Pokémon:', foundPokemon);

    res.json(foundPokemon || []);
});
app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

module.exports = app