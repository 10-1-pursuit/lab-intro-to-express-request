//Dependencies
const express = require('express');

//Configuration
const app = express();

//Routes

app.get('/', (req, res) =>{
  res.status(420).send('Hello World')
})
 
app.get('/jumping/joyous/jellybean', (req, res) => {                 // i know this isn't what you want? not sure what you are asking?
    res.send("Congratulations on starting a new project called jumping-joyous-jellybean!")
})


module.exports = app;