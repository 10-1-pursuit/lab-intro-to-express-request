const express = require("express");
const app = express();
const PORT = 8888;

app.get('/bugs', (req, res) => {
    res.send('99 little bugs in the code');
  });




app.get('/:jumping/:joyous/:jellybean', (req, res) => {
    res.send('Congratulations on starting a new project called jumping-joyous-jellybean!')
    });


    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
      });
    module.exports = app;


