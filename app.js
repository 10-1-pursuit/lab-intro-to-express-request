const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT

app.get("/:verb/:adjective/:noun", (req,res) => {
    const {verb, adjective, noun} = req.params;
    const projectName = `${verb}-${adjective}-${noun}`;
    res.send(`Congratulations on starting a new project called ${projectName}!`);
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})