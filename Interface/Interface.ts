//An Interface in TS is a way to define the structure of an object
// It tells the compiler what properties and types an object should Have
// Its like a blueprint of objects
//Abstract method: We only signature of the method(there is no implementation)

// Syntax:
// interface InterfaceName{
//     properties 
//     abstract Methods
// }

// 1.Regular Properties
// 2.Optional Properties
// 3.ReadOnly Properties & function types
// 4.Extending Interfaces
// 5.class implements interface

//Example 1: Basic interface

interface Person{
    name:string;
    age:number;
}

let student:Person={
    name:"John",
    age:30
}

console.log(student.name)
console.log(student.age)
//console.log(student) //{ name: 'John', age: 30 }

//Example 2: Optional Properties (?)

interface Employee{
    eid:number;
    ename:string;
    edept?:string; //optional property
}

let emp:Employee={
     eid:101,
    ename:"Revathy"
}
let emp1:Employee={
     eid:102,
    ename:"Vishal",
    edept:"CSC"
}

console.log(emp.eid,emp.ename,emp.edept)
console.log(emp1.eid,emp1.ename,emp1.edept)

//Example 3: ReadOnly Properties & function types

interface Book{
    title:string;
    readonly author:string;

    display():void //abstract method
}

let b1:Book={
    title:"Rich dad and poor dad",
    author:"Richard",

    display(){
        console.log(b1.title,b1.author);
    }
}

console.log(b1.title)
console.log(b1.author)

console.log("After changing the values....")

b1.title="Learn Playwright";
console.log(b1.title);

//b1.author ="Mccarthy"; //it cant assign

//Example: 4 Extending Interfaces(Inheritance is applicable)

//Parent Interface
interface  Animal{
    name:string
}

//Child Interface
interface Dog extends Animal{
    color:string;
}

let myDog:Dog={
    name:"Puppy",
    color:"White"
}

console.log(myDog.name,myDog.color)

//Example 5:  class implements interface
//class extends another class
//interface can extends another interface
//class can implement the interface

interface Animal{
    name:string;
    sound():void;
}

class Dog implements Animal{
      name:string; //inherited from interface Animal
      color:string; //property is belongs to current class Dog

      constructor(name:string,color:string){
        this.name=name;
        this.color=color;

      }
     sound(){
        console.log("Bark.....")
     } 
}
let pet = new Dog("Tommy","Black");
console.log(pet.name);
console.log(pet.color);
pet.sound();

