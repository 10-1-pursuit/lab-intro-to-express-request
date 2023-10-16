const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

app.get("/:verb/:adj/:noun", (req, res) => {
  const {verb, adj, noun} = req.params
  const projNameGen = `${verb}-${adj}-${noun}`
  const response = `Congratulations on starting a new project called ${projNameGen}`
    res.send(response);
  });

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send(
    '99 little bugs in the code <a href="/bugs/101">pull one down, patch it around</a>'
  );
});

app.get("/bugs/:numberOfBugs" , (req, res)=> {
  const numberOfBugs = parseInt(req.params.numberOfBugs);
    if (numberOfBugs <= 200) {
       
        const nextNumberOfBugs = numberOfBugs + 2;
        const linkText = `pull one down, patch it around`;
        const linkHref = `/bugs/${nextNumberOfBugs}`;
        res.send(`${numberOfBugs} little bugs in the code<br><a href="${linkHref}">${linkText}</a>`);
    } else {
        
        res.send('Too many bugs!! Start over!<br><a href="/bugs">Go back to home page</a>');
    }
});


app.get("/pokemon", (req, res) => {
res.status(200).send(pokemon)
  // const pokemonCount = req.pokemon.length;
  // res.send(`Welcome ${pokemonCount} Pokemon`);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const indexOfArray = req.params.indexOfArray;
  const pokemonId = (indexOfArray >= 0 &&  indexOfArray < pokemon.length)
  ? `Pokemon at index ${indexOfArray}: ${pokemon[indexOfArray]}`
  : `Sorry, no Pokemon found at /pokemon/${indexOfArray}`;

const status = (indexOfArray >= 0 && indexOfArray < pokemon.length) ? 200 : 404;

res.status(status).send(pokemonId);
});

module.exports = app;
