const express = require("express");
const app = express();


const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0])




app.get("/", (request, response) => {

    response.send("Welcome to my App!");

});

app.get("/words", (request, response) => {

    response.send(words);
});

app.get("/words/:verb/:adjective/:noun", (request, response) => {

    const { verb, adjective, noun } = request.params;
    const projectName = `${verb} - ${adjective} - ${noun}`;

    response.send(`Congratulations on starting a new project called + ${projectName}`);
});



//99 Bugs

let numberOfBugs = 99;

app.get("/bugs", (request, response) => {

    const jingle = `${numberOfBugs} little bugs in the code`;

    const linkTitle = "<h1>Pull one down, Patch it around </h1>";

    if (numberOfBugs <= 200) {

        const link = `<a href="/bugs/${numberOfBugs + 2}"> ${linkTitle}</a>`;

        response.send(`${jingle} <br> ${link}`);

    } else {
        const backToBeginning = `<a href="/bugs"> Start Over </a> `;
        response.send(`${jingle} <br> ${backToBeginning}`);

    }
});

app.get("/bugs/:numberOfBugs", (request, response) => {

    const { numberOfBugs } = request.params;
    const bugsLeftOver = `${numberOfBugs} little bugs in the code`;
    const linkTitle = "<h1>Pull one down, Patch it around</h1>";

    if (numberOfBugs <= 200) {

        const link = `<a href=/bugs/${parseInt(numberOfBugs) + 2}"> ${linkTitle} </a>`;

    } else {

        const backToBeginning = `<a href="/bugs"> Star Over </a> `

        response.send(`${bugsLeftOver} <br> ${backToBeginning}`);
    }

});

//Pokemon API


app.get("/pokemon", (request, response) => {

    response.send(JSON.stringify(pokemon));


});

app.get("/pokemon/:pokebyindex", (request, response) => {

    const index = parseInt(request.params.pokebyindex);

    if (index < 0 || index >= pokemon.length || isNaN(index)) {
        response.send(`Sorry, no pokemon found at /pokemon/${index}`);

    } else {

        response.send(JSON.stringify(pokemon));
    }
});

app.get("/pokemon/searchbyname", (request, response) => {

    const pokemonName = request.query.name;
    const wildPokemonDiscovered = pokemon.find((pokemon) =>
        pokemon.name.toLowerCase() === pokemonName.toLowerCase());

    if (wildPokemonDiscovered) {

        response.send(JSON.stringify(wildPokemonDiscovered));

    } else {
        response.send(`Sorry, no pokemon found with the name "${pokemonName}"`);
    }
});