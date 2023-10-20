const express = require("express");
const pokemon = require("./models/pokemon.json");
const app = express();

// Helper function
const generateBugsResponse = (number) => {
  return `${number} little bugs in the code<br>${number} little bugs<br><a href="/bugs/${number + 2}">Pull one down, patch it around </a><br> ${number + 2} bugs in the code`;
};

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  const projectName = `${verb}-${adjective}-${noun}`;
  res.send(`Congratulations on starting a new project called ${projectName}!`);
});

app.get("/bugs", (req, res) => {
  res.send(generateBugsResponse(99));
});

app.get("/bugs/:number", (req, res) => {
  const number = Number(req.params.number);
  if (number >= 200) {
    res.send(`
      ${number} little bugs in the code<br>
      <a href="/bugs">Too many bugs!! Start over!</a>
    `);
  } else {
    res.send(generateBugsResponse(number));
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon)
})


app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const searchedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const matchingPokemon = pokemon.filter((poke) => poke.name === searchedName);

  if (matchingPokemon.length > 0) {
    res.send(matchingPokemon);
  } else {
    res.send([]);
  }
});


app.get("/pokemon/:indexOfArray", (req, res) => {
  const indexOfArray = req.params.indexOfArray;
  const selectedPokemon = pokemon[indexOfArray];

  if (selectedPokemon) {
    res.status(200).send(selectedPokemon);
  } else {
    res.status(404).send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

console.log(pokemon[24]);

// Bonus
app.get("/pokemon-pretty", (req, res) => {
  const pokemonListHTML = pokemon.map((poke, index) => {
    return `<li><a href="/pokemon-pretty/${index}">${poke.name}</a></li>`;
  });

  const htmlResponse = `
    <center>
    <h1>List of Pokemon</h1>
    ${pokemonListHTML.join("")}
    </center>
  `;

  res.send(htmlResponse);
});

app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
  const indexOfArray = req.params.indexOfArray;
  const selectedPokemon = pokemon[indexOfArray];

  if (selectedPokemon) {
    const htmlResponse = `
    <center>
      <h1>${selectedPokemon.name}</h1>
      <img src="http://img.pokemondb.net/artwork/${selectedPokemon.name.toLowerCase()}.jpg" alt="${selectedPokemon.name} Image">
      <p>Type: ${selectedPokemon.type.join(", ")}</p>
      <p>Stats:</p>
        <li>HP: ${selectedPokemon.stats.hp}</li>
        <li>Attack: ${selectedPokemon.stats.attack}</li>
      </center>
    `;

    res.send(htmlResponse);
  } else {
    res.status(404).send(`Sorry, no Pokemon found at /pokemon-pretty/${indexOfArray}`);
  }
});




module.exports = app;
