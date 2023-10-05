//Dependencies
const express = require('express');

//Configuration
const app = express();

//Routes


//Index Route
 
// app.get('/:verb/:adj/:noun' , (req, res) => {     
//   const { verb, adj, noun } = req.params
//   console.log(req.params)
//    res.send(`Congratulations on starting a new project called ${verb}-${adj}-${noun}!`)
// });

let numOfBugs = 99

app.get('/bugs', (req, res) => {
  res.send(`<h1>${numOfBugs} Litte bugs in the Code</h1><a href="/bugs/${numOfBugs}"> pull one down, patch it around</a>`)

})

app.get('/bugs/:numOfBugs', (req, res) =>{
  numOfBugs = parseInt(req.params.numOfBugs)

  if(numOfBugs < 200){
    numOfBugs += 2
    res.send(`<h1>${numOfBugs} Little bugs in the code"</h1><br></br><a href="/bugs/${numOfBugs}">pull one down, patch it around"</a>`)
  } else {
    res.send(`<a href="/bugs">Start Over</a>`)
  }
})



module.exports = app;