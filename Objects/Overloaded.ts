//Step 1: Write a signature of functions
//stepp 2: Implement a function
//step 3: Calling function

//Example 1: Different parameter types

function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(param: number|string):string{
    if(typeof param ==="number"){
        return (`user id is is ${param}`)
    }
    else{
          return (`user name is is ${param}`)
    }

}

console.log(getInfo(101));

console.log(getInfo("John"));

//Example 2: Different no of parameter types

function add(a:number,b:number):number;
function add(a:number,b:number,c:number):number;

function add(a:number,b:number,c?:number):number
{
    if(c!==undefined){
        return a+b+c;
    }
    return a+b;
}
console.log(add(10,20));
console.log(add(10,20,30));

//Example 3: different return types

function processingInputs(input:string):string
function processingInputs(input:number):number

function processingInputs(input:string|number):string|number{
     if(typeof input ==="string"){
        return input.toUpperCase();
    }
    else{
          return input*2;
          
    }

}
console.log(processingInputs("welcome"));
console.log(processingInputs(10));