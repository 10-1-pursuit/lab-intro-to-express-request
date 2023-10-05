const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Testing");
});

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

















module.exports = app;