const cat  = require("cat-me");
const jokes  = require("knock-knock-jokes");
const faker  = require("faker");

//console.log(cat());
//console.log(jokes());
const printProdPrice =() =>{
    for(var i=0; i < 10; i++){

        console.log(     faker.commerce.productName() + " - " + faker.commerce.price())
    }

}
printProdPrice();




