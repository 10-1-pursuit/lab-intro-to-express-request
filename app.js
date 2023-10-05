const express = require("express");
const app = express();
const PORT = 8888;

// Function to generate the response for the "/bugs/:numberOfBugs" route
function generateBugsResponse(numberOfBugs) {
    const bugsMessage = `${numberOfBugs} little bugs in the code`;

    if (numberOfBugs <= 200) {
        const nextLink = `<a href="/bugs/${numberOfBugs + 2}">pull one down, patch it around</a>`;
        return `${bugsMessage}<br>${nextLink}`;
    } else {
        const startOverLink = `<a href="/bugs">Start Over</a>`;
        return `${bugsMessage}<br>${startOverLink}`;
    }
}

app.get('/', (req, res) => {
    res.send('99 little bugs in the code<br><a href="/bugs/101">pull one down, patch it around</a>');
});

app.get('/bugs', (req, res) => {
    const numberOfBugs = 99;
    res.send(generateBugsResponse(numberOfBugs));
});

app.get('/bugs/:numberOfBugs', (req, res) => {
    const numberOfBugs = parseInt(req.params.numberOfBugs);
    if (!isNaN(numberOfBugs)) {
        res.send(generateBugsResponse(numberOfBugs));
    } 
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app;
