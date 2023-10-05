// DEPENDENCIES
const express = require("express");

const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

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
app.get("/:verb/:adjective/:noun", (req, res) => {

    const {verb,adjective,noun}=req.params;
    const projectName=`${verb}-${adjective}-${noun}`;


  res.send(`Congratulations on starting a new project called ${projectName}!`);
});


app.get('/pokemon',(req,res)=>{




    res.send(`<body>


    
    <div>"${JSON.stringify(pokemon)
    }"</div>
    
    
    </body>`)
})

app.get('/pokemon/:indexOfArray' ,(req,res)=>{

    const index= parseInt(req.params.indexOfArray);
    if(index ,0 || index >= pokemon.length){

        res.send(`Sorry, no pokemon found at /pokemon/${index}`);
    }else{

            res.send(pokemon[index])

    }
    



})


  

// EXPORT
module.exports = app;