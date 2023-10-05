const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT
const pokemon = require("./models/pokemon.json")

app.get("/:verb/:adjective/:noun", (req,res) => {
    const {verb, adjective, noun} = req.params;
    const projectName = `${verb}-${adjective}-${noun}`;
    res.send(`Congratulations on starting a new project called ${projectName}!`);
})


let bugCount = 99;

app.get("/bugs", (req,res) => {
    res.send(`
    <p>${bugCount} little bugs in the code<p>
    <a href="/bugs/${bugCount + 2}">Pull one down, Patch it around</a>
    `)
})

app.get("/bugs/:numberOfBugs", (req,res) => {
    const {numberOfBugs} = req.params
    const bugCount = parseInt(numberOfBugs)
    if (bugCount > 200){
        res.send(`<p>Too many bugs! <a href="/bugs">Start Over</a><p>`)
    } else {
        res.send(`
        <p>${bugCount} little bugs in the code</p>
        <a href="/bugs/${bugCount + 2}">Pull one down, Patch it around</a>
        `)
    }
})


app.get("/pokemon", (req,res) => {
    res.json(pokemon)
})

app.get("/pokemon/search", (req,res) => {
    const {name} = req.query
    const foundPokemon = pokemon.find(p => p.name.toLowerCase() === name.toLowerCase())

    if (foundPokemon) {
        res.json(foundPokemon)
    } else {
        res.status(404).json({error: `No Pokemon found with the name: ${name}`})
    }
})

app.get("/pokemon/:indexOfArr", (req,res) => {
    const {indexOfArr} = req.params
    const index = parseInt(indexOfArr)

    if (index >= 0 && index < pokemon.length){
        res.json(pokemon[index])
    } else {
        res.status(404).json({error: `Sorry, no Pokemon found at /pokemon/${indexOfArr}`})
    }
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})