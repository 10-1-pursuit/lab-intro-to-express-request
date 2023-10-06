//Dependencies
const app = require('./app.js')

//Configuartion
require('dotenv').config();
const PORT = process.env.PORT

//LISTEN
app.listen(PORT, () => {
    console.log(`I'm listening on PORT: ${PORT} 👑💅🏾 `)
})