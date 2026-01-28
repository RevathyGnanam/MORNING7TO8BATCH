//Super() - Used to invoke immediate parent class constructor
//super -used to invoke immediate parent class method

class Parent{
 num:number=10;
 constructor(){
    console.log("This is a parent class constructor")
 }
display(){
     console.log("This is a display method from parent class")
}
}

class Child extends Parent{
    num:number=20;
     constructor(){
        super();
    console.log("This is a child class constructor")
 }

 show(){
     // console.log(super.num); this will not support in TS
    console.log(this.num);
     console.log("This is a show method class constructor")

 }

 display(){
    // console.log("This is a display method from child class")
     super.display();
}
}

let c1= new Child();
c1.show();
c1.display();