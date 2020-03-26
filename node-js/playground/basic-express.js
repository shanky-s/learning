const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Hi there welcome to my assignement!");
});
app.get("/speak/:pet", (req,res) => {
    console.log(req.params);
    let resStr = "This animal does not say anything.";
    switch (req.params.pet.toUpperCase() ) {
        case "COW":
            resStr = "The cow says 'Moo'"
            break;
        case "PIG":
            resStr = "The pig says 'Oink'"
            break;
        case "DOG":
            resStr = "The dog says 'Woof Woof!'"
            break;
        default:
            break;
    }
    res.send(resStr);
});
app.get("/repeat/:word/:noOfTimes", (req,res) => {
    console.log(req.params);
    let resStr = repeatWord(req.params.word, req.params.noOfTimes);
    
    res.send(resStr);
});

app.get("*", (req,res) => {
    res.send( "Sorry, page not found ... What are you doing with your life?" )
} );

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
} )



//====================

const repeatWord = (word, noOfTime) => {
    let concatedWords = "";
    for (let index = 0; index < noOfTime; index++) {
        concatedWords += word + " ";
    }
    return concatedWords;
}
