const express = require('express')
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
    console.log(number)
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

app.get('/bugs/:number')


module.exports = app