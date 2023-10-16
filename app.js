// DEPENDENCIES
const express = require("express");

const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

// CONFIGURATION
const app = express();

app.use(express.json())



app.get("/bugs", (req, res) => {
const numberOfBugs=99;
const linkText='pull one down patch it around'
const linkHref='/bugs/101'


    res.json(`
     
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
    linkText="Too many bugs!! Start over!"
    linkHref='/bugs';
    res.send(linkText)
}else{

    if(numberOfBugs<=199){
linkText='pull one down, patch it around';
linkHref=`/bugs/${numberOfBugs + 2} `;





res.send(

`<h1> ${numberOfBugs} little bugs in the code </h1>

        <a href="${linkHref}">${linkText}</a>




`)}

}





}






)










app.get("/",(res,req,next)=>{

    res.send('Welcome 99 Pokemon') ;next()
})

app.get('/pokemon',(req,res,next)=>{


res.send((pokemon))
next()
})




// ROUTES
app.get("/:verb/:adjective/:noun", (req, res,next) => {

    const {verb,adjective,noun}=req.params;
    const projectName=`${verb}-${adjective}-${noun}`;


  res.send(`Congratulations on starting a new project called ${projectName}!`);next()
});


   

app.get('/pokemon/search', (req,res,next)=>{
    const {name} = req.query;
    if(name){
    const findPoke= pokemon.find((el)=>{ el.name.toLowerCase()== name.toLowerCase()});
        if(findPoke){
    
        
        res.send((findPoke))
        }
        if(!findPoke){
            res.send([])
        }
    }else{
    
    
        res.send(`Sorry, no pokemon found with the name ${name}`)
    }
    
    
    next()
    
    })

app.get('/pokemon/:indexOfArray' ,(req,res)=>{

    const index= parseInt(req.params.indexOfArray);
    if(index ===0 || index >= pokemon.length){

        res.send(`Sorry, no pokemon found at ${index}`);
    }else{

            res.send(pokemon[index])

    }
    



})






// EXPORT
module.exports = app;