//Arrow Functions or lamda  functions

// 1.parameter 
// 2.the fat arrow notation/lamda(=>) -->goes to operator
// 3.statements

// Syntax:
// let variable =(parameter) =>
// {
// block of code
// }

//Example 1: Arrow function with no parameter and no return type

// let msg=():void =>
// {
//     console.log("Welcome to Typescript class")
// }
// msg();

// //Example 2: Arrow  function with parameter and return type
// let add =(x:number,y:number):number =>
// {
//     return x+y;
// }
// // let parameters =addNumbers(10,20);
// // console.log(parameters)
// console.log(add(10,20));

//Example 3: Arrow  function with implicit return
let add =(x:number,y:number):number => x+y;
console.log(add(10,20));