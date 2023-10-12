const express = require('express')
const pokemon = require('./models/pokemon.json')
const app = express()



app.get('/', (req, res) => {
    res.send('Welcome 99 Pokemon')
}
)

app.get(`/:verb/:adjective/:noun`, (req, res) => {
    res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`)
})

app.get('/bugs', (req, res) => {
    let number = '99';

    res.send(`
    ${number} little bugs in the code
    <a href='/bugs/${(Number(number) + 2).toString()}'>Pull one down, patch it around
    </a>`)
})

app.get('/bugs/:number', (req, res) => {
    let number = req.params.number;

    if (Number(number) >= 200) {
        res.send(`
        ${number} little bugs in the code
        <a href='/bugs'> Too many bugs!! Start over!
        </a>
        `)
    } else {
        res.send(`
    ${number} little bugs in the code
    <a href='/bugs/${(Number(number) + 2).toString()}'> Pull one down, patch it around
    </a>`)
    }
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

app.get(`/pokemon/search`, (req, res) => {
    const { name } = req.query
    const searchedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();



    for (let poke of pokemon) {
        if (poke.name === searchedName) {
            res.send([poke])
        } else {
            res.send([])
        }
    }
})


app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params;
    if (pokemon[indexOfArray]) {
        res.send(pokemon[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})



module.exports = app