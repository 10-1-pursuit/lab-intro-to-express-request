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


app.get("/", (req, res) => {
  const pokemonCount = req.pokemon.length;
  res.send(`Welcome ${pokemonCount} Pokemon`);
});

module.exports = app;
