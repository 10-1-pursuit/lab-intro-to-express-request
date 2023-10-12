const express = require('express')
const pokemon = require('./models/pokemon.json')
const app = express()



app.get('/', (req, res) => {
    res.send('This is my App!')
}
)

app.get(`/:verb/:adjective/:noun`, (req, res) => {
    res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`)
})

app.get('/bugs', (req, res) => {
    let number = '99';

    res.send(`<body>
    <p>
    ${number} little bugs in the code
    </p>
    <a href='/bugs/${(parseInt(number) + 2).toString()}'> pull one down, patch it around
    </a>
</body>`)
})

app.get('/bugs/:number', (req, res) => {
    let number = req.params.number;

    if (Number(number) > 200) {
        res.send(`
        <body>
        <p>
        ${number} little bugs in the code
        </p>
        <a href='/bugs'> Start Over
        </a>
        </body>
        `)
    } else {
        res.send(`
    <body>
    <p>
    ${number} little bugs in the code
    </p>
    <a href='/bugs/${(parseInt(number) + 2).toString()}'> pull one down, patch it around
    </a>
</body>`)
    }
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

app.get(`/pokemon/search`, (req, res) => {
    const { name } = req.query;
    for (let poke of pokemon) {
        if (poke.name === name) {
            res.send(poke)
        }
    }
})


app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params;
    if (pokemon[indexOfArray]) {
        res.send(pokemon[indexOfArray])
    } else {
        res.send(`sorry, no pokemon found at /pokemon${indexOfArray}`)
    }
})



module.exports = app