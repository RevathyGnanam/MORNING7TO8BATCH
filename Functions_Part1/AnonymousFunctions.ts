//Anonymous function (unnamed function or nameless function)
// It is a function that does not have a name .
// Instead of name we have a variable which acts like its name
// Syntax:
// let variable =function(parameter){
//     block of code
// }
// variable();  //calling the function

//Example 1:  Anonymous function without parameter

let msg =function():string{
    return "Hello World"
}
console.log(msg());

//Example 2: Anonymous function with parameter
let multiply =function(a:number,b:number):number{
    return a*b
}
console.log(multiply(10,20))
