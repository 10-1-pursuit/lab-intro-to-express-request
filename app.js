//Dependencies
const express = require('express');

//Configuration
const app = express();

//Routes

app.get('/bugs', (req, res) =>{
  res.status(420).send('Hello World')
})

//Index Route
 
// app.get('/:verb/:adj/:noun' , (req, res) => {     
//   const { verb, adj, noun } = req.params
//   console.log(req.params)
//    res.send(`Congratulations on starting a new project called ${verb}-${adj}-${noun}!`)
// });

app.get('/bugs/:numOfBugs', (req, res) =>{
  let numOfBugs = 99;

  if(numOfBugs < 200){
    numOfBugs + 2

    res.send(`<h1>${numOfBugs} Little bugs in the code"</h1><br></br><a href="/bugs/${numOfBugs + 2}">pull one down, patch it around"</a>`)
  } else {
    res.send(`<a href="/bugs">Start Over</a>`)

  }
} )



module.exports = app;