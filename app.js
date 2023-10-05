//Dependencies
const express = require('express');

//Configuration
const app = express();

//Routes

app.get('/', (req, res) =>{
  res.status(420).send('Hello World')
})


//Index Route
 
app.get('/:verb/:adj/:noun' ), (req, res) => {     
  const { verb, adj, noun } = req.params
  console.log(req.params)
   res.send(`Congratulations on starting a new project called ${verb}-${adj}-${noun}!`)
}


module.exports = app;