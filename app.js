const express = require("express");
const pokemon = require("./models/pokemon.json");
const app = express();


app.get("/", (req, res) => {
  res.send("Home Page");
});

// app.get("/:verb/:adjective/:noun", (req, res) => {
//   const { verb, adjective, noun } = req.params;
//   res.send(
//     `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
//   );
// });

let numOfBugs = 99;

app.get("/bugs", (req, res) => {
  numOfBugs = 99;
  numBugs = numOfBugs;
  res.send(
    `${numOfBugs} little bugs in the code </br> ${numOfBugs} little bugs, </br> <a href=/bugs/${
      numBugs + 1
    }">pull one down, patch it around </a>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  let { numberOfBugs } = req.params;
  numberOfBugs = parseInt(numberOfBugs);
  console.log("This is the number that's typed in the URL is", numberOfBugs);
  if (numberOfBugs > 200) {
    res.send(`<a href="/bugs">Start Over</a>`);
  } else {
    numOfBugs = numberOfBugs + 1;
    res.send(
      `${numOfBugs} little bugs in the code </br> ${numOfBugs} little bugs </br> <a href="/bugs/${
        Number(numberOfBugs) + 2
      }">pull one down, patch it around </a>`
    );
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {

    console.log(req.query)
    // console.log(pokemon[0])

    const { name } = req.query

    if(name){
        const foundPokemon = pokemon.find(poke => poke.name.toLowerCase() === name.toLowerCase());
        if(foundPokemon){
            const response = {
                name: foundPokemon.name,
                img: foundPokemon.img,
                type: foundPokemon.type,
                stats: foundPokemon.stats,
                damages: foundPokemon.damages,
                misc: foundPokemon.misc,
            }
            res.send(response)
        } else{
            res.send("<h1>Sorry no Pokémon found</h1>")
        }
    } else{
        res.send("<h1>Please provide a 'name' query parameter</h1>")
    }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry no pokemon found at /pokemon ${indexOfArray}`);
  }
});

module.exports = app;
