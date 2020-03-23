//Basic 3 types - number, string, boolean
function add(n1, n2, toPrint, prePhrase) {
    var sum = n1 + n2;
    if (toPrint)
        console.log(prePhrase + sum);
    else
        return sum;
}
var n1 = 3;
var n2 = 5.8765;
var toPrint = true;
var prePhrase = "Sum: ";
console.log(add(n1, n2, toPrint, prePhrase));
var n3 = 3;
var n4 = 5.8765;
var toPrint1 = false;
// const prePhrase1: string = "Sum: "
// console.log(add(n3,n4))
var n5;
n5 = 6;
console.log(add(n5, n4, toPrint1, prePhrase));
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    arrAny: ["shashank", 1],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log(product);
var product1 = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    arrAny: ["shashank", 1],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log(product1.tags);
console.log(product1.arrAny);
var arrAllTypes = ["string", 1, 2.3, true, { a: 2 }]; //this is union type.hover over the constant name
var tupleExample; //type an length is fixed
//!!!ERROR
//tupleExample =[1,2]
//!!!ERROR
//tupleExample = [1,"2", "4"]  
tupleExample = [1, "2"];
//ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["DEVELOPER"] = 2] = "DEVELOPER";
})(Role || (Role = {}));
console.log(Role.ADMIN);
//Union
var a;
a = 1;
a = "a";
//ERROR
//a=true
//Union
var b;
b = "shashank";
b = 3;
//ERRORs
// b=1
// b="nandani"
