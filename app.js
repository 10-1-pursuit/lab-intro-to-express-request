const express = require('express');
const app = express();

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params;
    const projectName = `${verb}-${adjective}-${noun}`;
    res.send(`Congratulations on starting a new project called ${projectName}!`)
})

app.get('/bugs', (req, res) => {
    res.send('99 little bugs in the code <a href="/bugs/101">pull one down, patch it around</a>')
})

app.get('/bugs/:numberOfBugs', (req, res) => {
    const numberOfBugs = parseInt(req.params.numberOfBugs);
    if (numberOfBugs <= 0) {
        res.send('No bugs left!');
    } else if (numberOfBugs <= 200) {
        res.send(`${numberOfBugs} little bugs in the code <a href="/bugs/${numberOfBugs + 2}">pull one down, patch it around</a>`)
    } else {
        res.send('<a href="/bugs">Start over</a>')
    }
})

module.exports = app