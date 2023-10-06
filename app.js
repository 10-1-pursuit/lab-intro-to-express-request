const express = require("express");

const app = express();


const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0])

app.get("/:verb/:adjective/:noun", (req,res)=>{
    const {verb,adjective,noun} = req.params;
    res.send("Congratulations on starting a new project called " + verb +"-"+adjective+"-"+noun+"!")
})

app.get("/bugs", (req, res) => {
    res.send(`
    <body>
    <h1> 99 little bugs in the code </h1>
    </br>
    <a href ="http://localhost:8888/bugs/101">pull one down, patch it around </a>
     </body>`)
})

app.get("/bugs/:numberOfBugs", (req,res)=>{
    const {numberOfBugs} = req.params
    let addedBugs = Number(numberOfBugs) + 2

    if(numberOfBugs > 200){
        res.send(`<body>
        <a href="http://localhost:8888/bugs">Start Over</a>
        </body>`)
    }
    else {

    res.send(`<body>
    <h1>
    ${numberOfBugs} little bugs in the code
    </h1>
    </br>
    <a href ="http://localhost:8888/bugs/${addedBugs}">pull one down, patch it around </a>
    </body>`)
    }
})

app.get("/pokemon", (req,res)=>{
    res.send(pokemon)
})

app.get("/pokemon/:search", (req,res)=>{
  
    const {name} = req.query;

    const findPokemon = pokemon.find(poke => poke.name.toLowerCase() === name.toLowerCase())
    if(findPokemon){
     res.json(findPokemon)
    }
  res.status(404).json({error: `Sorry, can't find ${name}`})
})


app.get("/pokemon/:index", (req,res)=>{
    const index = req.params.index;
    if(pokemon[index]){
        res.send(pokemon[index])
    }else{
        res.send("sorry, no pokemon found at "+[index])
    }
})


module.exports = app