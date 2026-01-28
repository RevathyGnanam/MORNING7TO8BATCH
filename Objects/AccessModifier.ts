//Parent class

class Person{
public name:string;
protected age:number;
private id:number;

constructor(name:string,age:number,id:number){
this.name=name;
this.age=age;
this.id=id;
}

public displayInfo(){
    console.log("Name",this.name);
    console.log("Age",this.age);
    console.log("ID",this.id);
}
}

//Child class

class Employee extends Person{
 
    private empId:number;
constructor(name:string,age:number,id:number,empId:number){

    super(name,age,id);
    this.empId=empId;
}
public showEmployeeDetails(){

  console.log(this.name);
    console.log(this.age);
    //console.log(this.id);
     console.log( this.empId);
}

}

let emp =new Employee("John",25,2564752,101);
emp.displayInfo();
emp.showEmployeeDetails();
console.log(emp.name);
//console.log(emp.age);
// console.log(emp.id);
