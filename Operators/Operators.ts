let a:number=20, b:number=5;

//Arithmentic operators

console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a*b)
console.log(a%b)

//assignment operator
//a=a+b a+=b

console.log(a+=b)
console.log(a-=b)
console.log(a/=b)
console.log(a*=b)
console.log(a%=b)

//Relational operator
console.log(a>b)
console.log(a<b)
console.log(a<=b)
console.log(a>=b)
console.log(a!=b)

//Logical Opertors
let b1:boolean=true, b2:boolean=false
console.log(b1 && b2)
console.log(b1 || b2)
console.log(!b1)
console.log(!b2)

//combination of logical and relational

console.log(20>10 && 10>5)
console.log(10<20 && 5<10)

//Ternary operator
//syntax: condition ? value_if_true:value_if_false
let age =18
let result = age >18 ?"Adult":"Minor"
console.log(result)

//Increment++ & Decrement-- Operators

let x:number=10;

// x++; //post increment
// console.log(x)

// ++x //pre increment
// console.log(x)

// x-- //post decrement
// console.log(x)

--x //pre decrement
console.log(x)
