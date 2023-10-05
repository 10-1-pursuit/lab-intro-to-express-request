const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (request, response) => {
  response.send("Welcome 99 Pokemon");
});

// - 99 Little Bugs In the Code
app.get("/bugs", (request, response) => {
  response.send(
    "<h1><u>99 little bugs in the code</u></h1>99 little bugs in the code,<br />99 little bugs...<a href='./bugs/101' ><br />pull one down, patch it around...</a>"
  );
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  const { numberOfBugs } = request.params;
  const newNumberOfBugs = Number(numberOfBugs) + 2;

  if (numberOfBugs > 199) {
    response.send(
      "<a href='/bugs/'><h3><font color='red'>Too many bugs!! Start over!</font color></h3></a>"
    );
  } else {
    response.send(
      `<strong>...${numberOfBugs} little bugs in the code.</strong><br /><br /> ${numberOfBugs} little bugs in the code,<br />${numberOfBugs} little bugs...<br /><a href="./${newNumberOfBugs}">Pull one down, patch it around...</a>`
    );
  }
});

// - Poke-Express
const pokemon = require("./models/pokemon.json");

app.get("/pokemon", (request, response) => {
  response.json(pokemon);
});
console.log(pokemon[0]);

app.get("/pokemon/search", (request, response) => {
  const { name } = request.query;
  let matchedPokemon = pokemon.filter(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  response.send(matchedPokemon);
});

app.get("/pokemon/:index", (request, response) => {
  const { index } = request.params;
  if (!pokemon[index]) {
    response.send(`Sorry, no pokemon found at ${index}`);
  } else {
    response.json(pokemon[index]);
  }
});

// - New Project Name Generator
app.get("/:verb/:adjective/:noun", (request, response) => {
  const { verb, adjective, noun } = request.params;
  const generatedName = `${verb}-${adjective}-${noun}`;
  response.send(
    `Congratulations on starting a new project called ${generatedName}!`
  );
});

// EXPORT
module.exports = app;
