const express = require("express");
const app = express();



app.get("/verb/adj/noun", (req, res) => {
    res.send("Congratulations on starting a new project called /verb/adj/noun");
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
    res.send('101 little bugs in the code <a href="/bugs/101">pull one down, patch it around</a>')
})

app.get("/bugs/101", (req, res) => {
    res.send(
      '99 little bugs in the code <a href="/bugs/101">pull one down, patch it around</a>'
    );
  });

app.get("/", (req, res) => {
  const pokemonCount = req.pokemon.length;
  res.send(`Welcome ${pokemonCount} Pokemon`);
});

module.exports = app;
