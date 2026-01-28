//Inheritance
//A class reuse the properties and methods of another class
//It is a mechanism where one class(child)can inherit the properties and methods of another class(Parent)
//It allows you to reuse the fucntionality of a existing class without rewriting it

//Method overriding
//A subclass/child class can provide a specific implementation of a amethod that is already defined in its super class
//this method must have the sam name ,return type and parameters

//parent class
class Car {
    name:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string){
        this.name=name;
    this.color=color;
    this.model=model;
    }

    start(){
        console.log("Car started..");
    }

    stop(){
        console.log("Car stopped....");
    }

    displayInfo(){
        console.log(`Name: ${this.name},color: ${this.color}, model: ${this.model}`);
    }
}

//Child class -Honda

class Honda extends Car{

    year:number;

    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model);
        this.year=year;
    }

    //Method overriding - here applied compare with parent class
    start(){
        console.log("Honda started..");
    }
//since here applied inheritance concept so i need to call all varaibles from parent class
    yom(){
        console.log(`Name: ${this.name},color: ${this.color}, model: ${this.model},YOM:${this.year}`)
    }

}

// //child class - Maruthi

// class Maruthi extends Car{


//     year:number;

//     constructor(name:string,color:string,model:string,year:number){
//         super(name,color,model);
//         this.year=year;
//     }

//      start(){
//         console.log("Maruthi started..");
//     }

//     yom(){
//         console.log(`Name: ${this.name},color: ${this.color}, model: ${this.model},YOM:${this.year}`)
//     }
// }

//usage
//create Honda object

// let honda =new Honda("Honda","Red","Honda City",2024)
// console.log(honda.name)
// console.log(honda.color)
// console.log(honda.model)
// console.log(honda.year)

// honda.start(); //called child class method(Overried)
// honda.displayInfo();
// honda.stop();
// honda.yom();

// let maruthi = new Maruthi("Maruthi","Red","Maruthi City",2024)

// maruthi.start(); //called child class method(Overried)
// maruthi.displayInfo();
// maruthi.stop();
// maruthi.yom();

//parent class variable is holding child class object

let car:Car = new Honda("Honda","Red","Honda City",2024)

car.displayInfo();
car.start();
//car.yom(); //Not accessible


