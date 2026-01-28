// primitive Data(Built-in)
// Number
// String
// Boolean
// null
// undefined
//Any Type
// Union Type
// void

// Non primitive datatype(objects)
// Array
// Class
// Function
// Interface etc....

//Number: both integers and floating point numbers
// let age:number=10;
// let price =28.55
// let bigNumber=4662326599616464

// console.log("Age is:",age)
// console.log("price is:",price)
// console.log("bigNumber is:",bigNumber)


// //String -textual data
// // singlequote('')
// // Doublequote("")
// // backtick(``)

// let fname:string="John"
// let lname:String="Kennedy"
// //console.log("Hello",fname,lname)

// let greet:string=`Hello ${fname} ${lname}`;
// console.log(greet)

// //Boolean -true /false
// let isstudent:boolean =true;
// let hasJob:boolean =false;

// console.log("isstudent??",isstudent);
// console.log("hasJob??",hasJob);

// //Null & undefined -specialtype for absence of value

// let emptyValue:null=null;
// let notAssigned:undefined=undefined
// console.log(emptyValue)
// console.log(notAssigned)

// let price:number;
// console.log(price)

//Any type: loses TS benefits

// let value:any ="welcome"
// console.log(typeof(value))

// value=100
// console.log(typeof(value))

// value=true;
// console.log(typeof(value))

// console.log(value)

// //Union Type - combination of any 2 datatypes

// let id:number | string | boolean

// id="revathy"
// console.log(id)

// id=100
// console.log(id)

// id=true
// console.log(id)

//void - used for function that doesn't return anything

function show():void{
    console.log("Its welcome to class")
}
show();

function sum(x:number,y:number):number{
    return(x+y)
}
//let res:number=sum(10,20)
console.log(sum(10,20))



                            