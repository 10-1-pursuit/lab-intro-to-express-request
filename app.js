const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.status(200).send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  const projectName = `${verb}-${adjective}-${noun}`;
  const response = `Congratulations on starting a new project called ${projectName}!`;

  res.send(response);
});

module.exports = app;
