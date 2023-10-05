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

// 99 Little Bugs In the Code
app.get("/bugs", (request, response) => {
  response.send(
    "<h1><u>99 little bugs in the code</u></h1>99 little bugs in the code,<br />99 little bugs...<br /><a href='./bugs/101' ><br />pull one down, patch it around...</a>"
  );
});

app.get("/bugs/:numberOfBugs", (request, response) => {
  const { numberOfBugs } = request.params;
  const newNumberOfBugs = Number(numberOfBugs) + 2;
  if (numberOfBugs > 199) {
    response.send(
      "<h3><font color='red'>Too many bugs!! Start over!</font color></h3>"
    );
  } else {
    response.send(
      `<strong>...${numberOfBugs} little bugs in the code.</strong><br /><br /> ${numberOfBugs} little bugs in the code,<br />${numberOfBugs} little bugs...<br /><a href="./${newNumberOfBugs}">Pull one down, patch it around...</a>`
    );
  }
});

// EXPORT
module.exports = app;
