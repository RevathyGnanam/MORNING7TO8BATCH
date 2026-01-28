//Callback function: A function passed as an argument to another function and executed later

//Example 1: 
//function that takes callback function as parameter
function greetings(name:string,callback:(message:string)=>void){
    console.log(name)
    callback("Hello world!!")

}

//callBack function
function showMessage(message:string){
    console.log(message)
}
//calling the function by pssing the callback function
greetings("John kennedy",showMessage)

//Example 2:

function sumOfNumbers(a:number,b:number,callback:(result:number)=>void){
    let result = a+b;
    callback(result)
}
//callBack function
function displayResult(result:number):void{
   console.log(result) 
}
sumOfNumbers(10,20,displayResult)