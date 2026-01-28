//Named function: A function that is declared with a name

// Synax: 
// function functionname(parameter):ReturnType{

//     block of code
// }
//functionname(); //calling the function or invoking the function

//Example 1: Named function with no parameter and no return type

// function display():void{
//     console.log("Welcome to Typescript class")
// }
// display();

//Example 2: Named function with parameter and return type
// function addNumbers(x:number,y:number):number{
//     return x+y;
// }
// // let parameters =addNumbers(10,20);
// // console.log(parameters)
// console.log(addNumbers(10,20));

//Example 3: Named function with rest parameter -Same type
//rest parameter dont restrict the no of values  that you can pass to a function

// function addNumber(...nums:number[]){
//     let sum:number=0;
//     for(let i=0;i<nums.length;i++){
//         sum=sum+nums[i];
//     }
//     console.log(sum)
// }
// addNumber(2,3);
// addNumber(2,3,5,7,8,6,2);

//Example 4: Named function with rest parameter -multiple type
// function findElements(...elements:(number|string)[]):number{
//     return elements.length;

// }
// console.log(findElements(1,3,"revathy",50,"Vishal"))

//Example 5: Named function with optional parameters
// function studentDetails(id:number,name:string,email?:string):void{
//     console.log("ID-->",id);
//     console.log("Name-->",name);
//     if(email!==undefined){
//  console.log("Email-->",email);
//     }
   
// }
// //studentDetails(123,"Revathy","abc@gmail.com")
// studentDetails(123,"Revathy")

//Example 6: Named function with default parameter
function calculateDiscount(price:number,rate:number=0.50):void{
   let discount = price*rate;
   console.log(discount)
}
calculateDiscount(1000,0.30)
//calculateDiscount(1000)