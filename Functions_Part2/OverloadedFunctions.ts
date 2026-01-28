//Same name but different parameters or return types

// Basic rules:
// 1.write a signature of functions
// 2.implement a function
// 3.calling a function

//Example 1: Different parameter types(data types)

// function getInfo(id:number):string;
// function getInfo(name:string):string;

// function getInfo(param:number|string):string{
//     if(typeof param==="number"){
//         return (`User id is ${param}`);
//     }
//     else
//           return (`User name is ${param}`);
// }

// console.log(getInfo(101))
// console.log(getInfo("John"))

//Example 2: Different no of parameter
// function add(a:number,b:number):number;
// function add(a:number,b:number,c:number):number;

// function add(a:number,b:number,c?:number):number{
//     if(c!==undefined){
//         return a+b+c;
//     }
//     return a+b;
// }
// console.log(add(10,20))
// console.log(add(10,20,30))

//Example 3: different return types
// function info(input:number):number;
// function info(input:string):string;

// function info(input:string|number):string|number{
//     if(typeof input ==="string"){
//         return input.toUpperCase();
//     }
//     else
//         return input*2;
// }

// console.log(info("welcome"))
// console.log(info(5))

//Example 4: 
function greeting(age:number):number;
function greeting(name:string):string;
function greeting(isMarried:boolean):string;

function greeting(value:boolean|string|number):string{
if(typeof value ==="string"){
    return `Hello ${value}`
}
else if(typeof value ==="number")
{
    return `you are ${value} years old`
}
else{
let res:string=value?"married":"single"
return res;
}
   
}

console.log(greeting("John"))
console.log(greeting(32))
console.log(greeting(true))
console.log(greeting(false))