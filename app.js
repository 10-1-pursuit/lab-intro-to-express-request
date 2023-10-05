// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

app.get("/bugs", (req, res) => {
const numberOfBugs=99;
const linkText='pull one down patch it around'
const linkHref='/bugs/101'


    res.send(`
     
<body>
 <h1> ${numberOfBugs} little bugs in the code</h1>
 <a href=${linkHref}>${linkText}</a>
 </body>
       `);
   
  });

app.get('/bugs/:numberOfBugs',(req,res)=>{

const numberOfBugs=parseInt(req.params.numberOfBugs);
let linkText
let linkHref

if(numberOfBugs>=200){
    linkText="Game Over"
    linkHref='/bugs';
}else{

linkText='pull one down, patch it around';
linkHref=`/bugs/${numberOfBugs + 2} `;






}

res.send(`<h1> ${numberOfBugs} little bugs in the code </h1>

        <a href="${linkHref}">${linkText}</a>




`)




}






)














// ROUTES
app.get("/jumping/joyous/jellybean", (req, res) => {
  res.send("Congratulations on starting a new project called jumping-joyous-jellybean!");
});



  

// EXPORT
module.exports = app;