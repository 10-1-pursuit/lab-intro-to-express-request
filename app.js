const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json")
console.log(pokemon[0]);

app.get("/", (req, res) => {
  res.send("Testing 1 2 1 2");
});

/////// New Project Name Generator ///////
app.get("/:verb/:adjective/:noun/", (req, res)=>{
    console.log(req.params);
    const {verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (req,res)=>{
    res.send(`
        <body>
            <h1>99 little bugs in the code</h1>
            <a href="/bugs/101">pull one down, patch it around</a>
        </body>`)
})

/////// 99 Little Bugs In the Code ///////
app.get("/bugs/:numberOfBugs", (req, res)=>{
    const {numberOfBugs} = req.params;
    let sumOfBugs= Number(numberOfBugs) + Number(2);
    if(req.params.numberOfBugs <= 200){
        res.send(`
        <body>
            <h1>${numberOfBugs}</h1>
            <a href="${sumOfBugs}">pull one down, patch it around: ${sumOfBugs}</a>
        </body>`) 
    } else {
        res.send(`
        <body>
        <a href="/bugs">Start over - Go back to Home page</a>
        </body>`)
    }
})

/////// Poke-Express ///////
app.get("/pokemon", (req, res)=>{
    res.send(pokemon)
})

app.get("/pokemon/:indexOfArray", (req, res)=>{
    const {indexOfArray}=req.params
    if(pokemon[indexOfArray]){
        res.send(pokemon[indexOfArray])
    } else {
        res.send("Sorry, no pokemon fount at /pokemon"+[indexOfArray])
    }
})

app.get("/pokemon/:search/:find/:name", (req, res)=>{
    console.log(req.query) 
    const {pokename} = req.query
    res.send(req.params.name + pokename);

})















module.exports = app;