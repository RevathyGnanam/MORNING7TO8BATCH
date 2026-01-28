//=================forEach(),Map(),Filter(),reduce(),some(),every()===================

//1.forEach()-Executes a function once for each array element
//it tkes function as a parameter

//Syntax: array.forEach(function(currentValue,index,array){
//block of code
//})
//currentValue - The current element is being processed in the array
//index - The index of the current element is being processed in the array
//array: The array of current element belongs to

let fruit:string[] =["Apple","Jam","Kiwi","Gauva"]
//Ex 1: 
// for(let i in fruit){
//     console.log(i,fruit[i])
// }

// fruit.forEach(function(element,index){
//     console.log(`${index}. ${element}`);
// });

//Using array function
// fruit.forEach((element,index) => {
//     //console.log(index,element);
//       console.log(`${index}, ${element}`);

// });

// //Ex 2 : 
// fruit.forEach((element) => {
//     console.log(element.toUpperCase());
// });


//2. map() - Creates a new array with the result of calling the function on every element of an array
////it tkes function as a parameter
//returns the sa,e number of elements that we have in the original array
//Syntax: array.map(function(currentValue,index,array){
//block of code
//})

//Ex 1: get square of all number [1,2,3]-->[1,4,9]
let numbers:number[]=[1,2,3]
// let squareNumbers=numbers.map((num) => {
// return (num*num)
// });
// console.log(squareNumbers)

// //another approach
// let doublenumbers=numbers.map((num) =>(num*2));
// console.log(doublenumbers)

//filter() - Creates a new array with all the elements that pass/satisfy the function
////it tkes function as a parameter
//returns either same or fewer numbers of elements while compared to the original array
//Syntax: array.filter(function(currentValue,index,array){
//block of code
//})

//Ex 1: get only even numbers
// let evenNumbers=numbers.filter((num) =>(num%2===0));
// console.log(evenNumbers) 

// //Ex 2: print only the numbers which is greate than 3
// let filterNumbers=numbers.filter((num) =>(num>3));
// console.log(filterNumbers) 

//4.reduce() - Applies a function on evert element of an array and returns a single value
//Syntax: array.filter(function(accumulator,currentValue,index,array){
//block of code
//})
//accumulator - it accumualted value from the prvious iteration

//Ex 1: sum of elements
// let reduceResult=numbers.reduce((total,element)=>{
// return  total+element;
// },0) //Initial value of accumulator is 0
// console.log(reduceResult)

// some() - checks if any element satisfies a condition
//return true if at least one element passes the condition else false
//Syntax: array.some(function(currentValue,index,array){
//block of code
//})

// let hasNegative=numbers.some((element) =>element<0);
// console.log(hasNegative)

// let hasPositive=numbers.some((element) =>element>0);
// console.log(hasPositive)

//every() -  checks if all element satisfies a condition
//return true if all element passes the condition else false
//Syntax: array.every(function(currentValue,index,array){
//block of code
//})

let numbers1:number[]=[4,2,8]
 let allEven=numbers1.every((num) =>(num%2===0));
 console.log(allEven) 


