const app = require("./app.js");

require("dotenv").config();

const port = process.env.port;



app.listen(port, () => {

    console.log(`App listening on port ${port}`)
});