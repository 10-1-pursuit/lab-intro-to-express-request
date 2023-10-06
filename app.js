const express = require("express");
const app = express();



app.get('/:verb/:adjective/:noun', (req,res)=> {

    const {verb, adjective, noun} = req.params;
    const projectName = `${verb}-${adjective}-${noun}`;
    res.send(`Congratulations on starting a new project called ${projectName}!`);
    
})
// 99 little bugs in the code//
app.get("/bugs", (req, res) => {
    res.send(`
    <body>
    <h1> 99 little bugs in the code </h1>
    <a href="/bugs/101">pull one down, patch it around</a>
    </body>
      `)
});

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
        </body>`); 
}
});
//Pokemon API//

app.get ("/pokemon", (request, response) => {
response.send(JSON.stringify(pokemonData));
});


app.get("/pokemon/:indexOfArray", (req,res) => {
    const { indexOfArray} = req.params;
    const index = parseInt(indexOfArray);
    
    if (isNaN(index) || index < 0 || index >= pokemonData.length) {
        res.status(404).send (`Sorry, no pokemon found at /pokemon/${indexOfArray}`);
    } else{
        res.json(pokemonData[index]);
    }
});

app.get("/pokemong/search", (req,res) => {
    const {name} = req.query;
    const result = pokemonData.find((pokemon) =>
    pokemon.name.toLowerCase()=== name.toLowerCase()
    );
    if(!result) {
        res.status(404).send(`Sorry, no pokemon found with the name '${name}'`);
    } else {
        res.json(result);
    }
});

module.export = app
