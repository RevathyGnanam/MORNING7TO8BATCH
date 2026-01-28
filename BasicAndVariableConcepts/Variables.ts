//var let const

//syntax to declare the variable:
//keyword(var/let/const) variablename: datatype(optional) =value;

/*scope
value assignment/declaration
re declaration
re assignment
Hoisting*/

//1.scope: function scope vs block scope

//var -function scope

// function varScope(){

//     if(true){
//         var msg ="Hello";
//        // console.log(msg);
//     }
//     console.log(msg);
// }

// varScope(); //calling function

//let &const - block scope

// function letConstExample(){
//      if(true){
//         let msg ="Hello";
//         let msg1 ="World";
//         console.log(msg);
//          console.log(msg1);
//     }
 
// }
// letConstExample();

//value assignment/declaration

// var and let -value assignment is not mandatory
// const-value assignment is  mandatory

// var a;
// console.log(a)

// let b;
// console.log(b)

// const c=10;
// console.log(c)

//re declaration
//var(allowed)
// var city ="Chennai"
// var city ="Kolkatta"
// console.log(city)

// //let(is not allowed)
// let place ="Chennai"
// //let place ="Kolkatta"
// console.log(place)

// //const(not allowed)
// const place1 ="Mumbai"
// //const place1 ="Delhi"

// console.log(place1)

//re assignment
//var and let is allowed
//const-not allowed

// var age=30
// age=25
// console.log(age)

// let marks=30
// marks=25
// console.log(marks)

// const score=30
// score=25
// console.log(score)

//Hoisting
//var - hoisting with undefined  let and const - not initialized
// console.log(x)
// var x=10;
// console.log(x)

// console.log(y)  //Cannot access 'y' before initialization
// let y=10;
// console.log(y)

console.log(z)  //Cannot access 'y' before initialization
const z=10;
console.log(z)







