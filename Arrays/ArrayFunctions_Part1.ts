//                    0 1 2 3 4 5  
let numbers:number[]=[1,2,3,4,5,6];
let fruits:string[] =["Apple","Jam","Kiwi","Gauva"]
 console.log(numbers)
// console.log(fruits)

// //1. push() - Adds single /multiple elements to the end of the array
// //Synatx: arrayname.push(ele1,ele2...elen)

// numbers.push(7,8)
// console.log("After push---->",numbers)

// //2.pop() - Removes the last element from an rray
// //synatx: arrayname.pop()

// numbers.pop()
// console.log("After pop---->",numbers)
// fruits.pop()
// console.log("After pop---->",fruits)

//shift()-Removes the first element from an rray
//syntax: arrayname.shift()
//numbers.shift()
// console.log("After shift---->",numbers.shift())

// let firstNumber =numbers.shift()
// console.log("After shift---->",firstNumber)

// //unshift() - Adds single/multiple elements  to the begginning of the array
// //syntax: arrayname.unshift(ele1,ele2...elen)

// fruits.unshift("Banana","Grapes")
// console.log("After unshift---->",fruits)

//5.concat() - Combine 2 or more arrays of the same type
//Syntax: arrayname.concat(array1,...arrayn)

// let combineArray = numbers.concat([7,8],[9,10])
// console.log("concatendated array--->",combineArray)

//6.slice()- Extracts of an array
//starting index starts with 0
//Ending index will be excliusive Ex: if 4 is end it will consider upto 3(4-1=3)

// let extractedArray = numbers.slice(1,4);
// console.log("After slice-->",extractedArray)

//7.splice() - add/remove elements from an array(From everywhere)
//Syntax:arrayname.splice(start,deletecount,item1,...itemN)
 //Ex 1: not removed but added

//  fruits.splice(1,0,'Pineapple','Orange')
//  console.log("After splice-->",fruits)

//  //Ex 2: both remove and added

//   fruits.splice(1,3,'Mango','Cherry')
//  console.log("After splice-->",fruits)

 //8.indexOf()-find the index of the element, if element not found it will return as -1
 //Syntax: arrayname.indexOf(searchElement) or arrayname.indexOf(searchElement,starting Index) 

//  //Ex1:
//  let kiwiIndex = fruits.indexOf("Kiwi")
//  console.log("Index of Kiwi-->",kiwiIndex)

//  //Ex 2: 
//  let papayaIndex = fruits.indexOf("Papaya")
//  console.log("Index of Kiwi-->",papayaIndex) //-1

//  //Ex 3:
//   let kiwiIndex1 = fruits.indexOf("Kiwi",1)
//  console.log("Index of Kiwi-->",kiwiIndex1)


//9.includes() - Check if an element exists
//Returns true or false
//Syntax: arrayname.includes(searchElement,from Index)

// let isAppleExist = fruits.includes("Apple")
// console.log("Includes of apple-->",isAppleExist)


// let isPapayaExist = fruits.includes("Papaya")
// console.log("Includes of Papaya-->",isPapayaExist)

//10.toString()-converts array to string
//Syntax: arrayname.toString()


let numbersString:string = numbers.toString();
console.log("converts array to string-->",numbersString)