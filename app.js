const express = require("express");
const app = express();



app.get('/:verb/:adjective/:noun', (req,res)=> {

    const {verb, adjective, noun} = req.params;
    const projectName = `${verb}-${adjective}-${noun}`;
    res.send(`Congratulations on starting a new project called ${projectName}!`);
    
})
module.exports = app