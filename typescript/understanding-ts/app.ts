//Basic 3 types - number, string, boolean
function add(n1:number, n2:number,toPrint:boolean, prePhrase: string) :number {
  const sum =  n1 + n2 
  if(toPrint)
   console.log(prePhrase +  sum)
  else return sum
}
const n1= 3
const n2= 5.8765
const toPrint = true
const prePhrase = "Sum: "
console.log(add(n1,n2, toPrint,prePhrase))
 const n3: number= 3
 const n4: number= 5.8765
 const toPrint1: boolean = false
// const prePhrase1: string = "Sum: "
// console.log(add(n3,n4))

let n5:number
n5=6
console.log(add(n5,n4, toPrint1,prePhrase))

const product = { 
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  arrAny:["shashank", 1],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

console.log(product)

const product1:{
  id:string;
  price:number;
  tags:string[];
  arrAny:any[];
  details:{
    title:string;
    description:string;
  }
} = { 
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  arrAny:["shashank", 1],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

console.log(product1.tags)
console.log(product1.arrAny)


const arrAllTypes =["string", 1, 2.3, true,{a:2}] //this is union type.hover over the constant name

let tupleExample:[number,string];//type an length is fixed
 //!!!ERROR
 //tupleExample =[1,2]
 //!!!ERROR
//tupleExample = [1,"2", "4"]  
tupleExample=[1,"2"]

//ENUM

enum Role {
  ADMIN,
  READ_ONLY,
  DEVELOPER
}


console.log(Role.ADMIN)

//Union
let a: string | number;
a=1;
a="a";
//ERROR
//a=true

//literals
let b: "shashank" | 3;
b="shashank";
b=3;
//ERRORs
// b=1
// b="nandani"

//Type aliases
  //Union 
  //Literal
  //Object


