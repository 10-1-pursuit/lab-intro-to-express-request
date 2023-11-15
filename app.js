const express = require("express");

const app = express();


const {PORT} = process.env


app.get("/:verb/:adjective/:noun", (req, res) => {
    //     console.log(req.query)
    const verb = req.params.verb;
    const adjective = req.params.adjective;
    const noun = req.params.noun;

    //     const {foo} = req.query;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});













// EXPORT
module.exports = app;