//An array is a Special types of variable that stores multiple value
//Array are declared using [] or Array<T>

//Approach 1: using literal

let names:string[]=[]; //declaration

//Initialization
names[0]="Apple";
names[1]="PineApple";
names[2]="Orange";
names[3]="Banana";
names[4]="Grapes";

console.log(names);
console.log(names[3]);
//Alternative way to declare and initialization

let names1:string[]=["John","Mathew","Fedrick"];
console.log(names1);
console.log(names1[7]);

//Apprach 2: using the generic Array[T] type
let empNames:Array<string>=["John","Mathew","Fedrick"];
let empId:Array<number>=[101,102,103,104];
let data:Array<string | number> =["John","Mathew","Fedrick",101,102,103,104]
let mixedData: Array<any> =["John",1,true,null]

//Example 1:  Iterating over an array using traditional for loop
console.log("employee Names")
for(let i=0;i<empNames.length;i++){
    console.log(empNames[i])
}

//Example 2: Iterating using 'for .... in' loop(Indexes)
console.log("employee id")
for(let index in empId){
    console.log(empId[index])
}

//Example 3: Iterating using 'for .... of' loop(values)
console.log("combine Data")
for(let value of data){
    console.log(value)
}

//Example 4: passing an array to the function
//search the element in a n array
 function search(ele:number,arr:number[]):boolean{

    for(let i=0;i<arr.length;i++){
  if(arr[i]===ele){
    return true;
  }
}
return false;

 }

 let arr:number[]=[101,102,103,104];
 console.log(search(109,arr));

 //Examplle 5: A function takes an array and returns an array
 function capitalizeWords(arr:string[]):string[]{
let result: string[]=[];
for(let i=0;i<arr.length;i++){
   result[i]= arr[i].toUpperCase();
}
return result;
 }

 let words:string[]=["john","mathew","fedrick"];
 console.log(capitalizeWords(words));




