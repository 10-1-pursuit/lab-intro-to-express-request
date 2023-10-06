const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json")

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    const projectName = `${verb}-${adjective}-${noun}`;
    res.send(`Congratulations on starting a new project called ${projectName}!`);
})


let bugCount = 99;

app.get("/bugs", (req, res) => {
    res.send(`
    <p>${bugCount} little bugs in the code<p>
    <a href="/bugs/${bugCount + 2}">Pull one down, Patch it around</a>
    `)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    const bugCount = parseInt(numberOfBugs)
    if (bugCount < 200) {
        res.send(`
        <p>${bugCount} little bugs in the code</p>
        <a href="/bugs/${bugCount + 2}">Pull one down, Patch it around</a>
        `)
    } else {
        res.send(`<p>Too many bugs! <a href="/bugs">Start Over</a><p>`)
    }
})


app.get("/pokemon", (req, res) => {
    res.json(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query
    const foundPokemon = pokemon.find(p => p.name.toLowerCase() === name.toLowerCase())

    if (foundPokemon) {
        res.json([foundPokemon])
    } else {
        res.json([])
    }
})

app.get("/pokemon/:indexOfArr", (req, res) => {
    const { indexOfArr } = req.params
    const index = parseInt(indexOfArr)

    if (index >= 0 && index < pokemon.length) {
        res.json(pokemon[index])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArr}`)
    }
})

function generatePokeList(pokemonData) {
    let htmlList = "<ul>"
    pokemonData.forEach((p, index) => {
        htmlList += `<li><a href="/pokemon-pretty/${index}">${p.name}</a></li><br>`
    })
    htmlList += "</ul>"
    return htmlList
}

function generatePokeDetails(pokemonData) {
    return `
    <img src="${pokemonData.img}" alt="${pokemonData.name}">
    <p>Type: ${pokemonData.type.join(', ')}</p>
    `
}

app.get("/pokemon-pretty", (req, res) => {
    const pokeList = generatePokeList(pokemon)
    const htmlResponse = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>List of Pokémon</title>
    </head>
    <body>
      <h1>List of Pokémon</h1>
      ${pokeList}
    </body>
    </html>
  `
    res.send(htmlResponse)
})

app.get("/pokemon-pretty/:indexOfArr", (req, res) => {
    const { indexOfArr } = req.params
    const index = parseInt(indexOfArr)

    if (index >= 0 && index < pokemon.length) {
        const selectedPokemon = pokemon[index]
        const pokemonDetails = generatePokeDetails(selectedPokemon)
        const htmlResponse = `
        <!DOCTYPE html>
      <html>
      <head>
        <title>${selectedPokemon.name} Details</title>
      </head>
      <body>
        <h1>${selectedPokemon.name} Details</h1>
        ${pokemonDetails}
      </body>
      </html>
        `
        res.send(htmlResponse)
    } else {
        res.status(404).send("Pokemon not found")
    }
})

module.exports = app