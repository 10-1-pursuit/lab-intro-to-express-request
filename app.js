// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (request, response) => {
  response.send("Welcome 99 Pokemon");
});

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (request, response) => {
  const { verb, adjective, noun } = request.params;
  response.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

// EXPORT
module.exports = app;
