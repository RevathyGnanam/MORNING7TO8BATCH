//Objects - it contains properties and behaviours
// it contains variables and methods 
// it is collection of key and value pairs

//Ex:
 //employee - name,desig,sal,dep,
       //  bonus(),getemdetails()

 //student- name,id ,grade
 //setdetails(),getdetails()
 
 //Different ways to create an object in JS/TS
 //1.using 'object' type - Directly define the values for variables(JS/TS)
 //2.Inline type object- We also define the datatype of the keys(TS)
 //3.Using type aliases
 //4. using the classes (JS ES16/TS)

  //1.using 'object' type - Directly define the values for variables(JS/TS)

  let employee ={
    name:"John",
    salary:50000,
    job:"Engg",
    getDetails:function():string{
        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }

  }
console.log(typeof employee)

//accessing object -approach 1(using dot operator)

console.log(employee.name,employee.salary,employee.job)
console.log(employee.getDetails());

//accessing object -approach 2(using bracket operator)
console.log(employee["name"],employee["salary"],employee["job"])
console.log(employee["getDetails"]());

//Modify the values
employee.salary=800000;
console.log("Modified sal: ",employee.salary)


//2.Inline type object- We also define the datatype of the keys(TS)

let student:{
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string
  }=
  {
    name:"John",
    age:50,
    grade:"A",
    getSummary:function(){
                return `${this.name} is a ${this.age} years old and scecond grade ${this.grade}`;
    }
  }
  console.log(student.getSummary());

   //3.Using type aliases
   //Ex 1:

   type product={
    name:string,
    price:number,
    getInfo:()=>string
  };

  let book1:product={
    name:"Learn Java",
    price:600,
    getInfo:function(){
        return `${this.name} costs ${this.price}`;
    }
  }

   let book2:product={
    name:"Learn Python",
    price:700,
    getInfo:function(){
        return `${this.name} costs ${this.price}`;
    }
  }
  console.log(book1.getInfo());
   console.log(book2.getInfo());

   //Ex 2: Intersection Types

   type personal={
    name1:string,
    age1:number
   };
   type contact={
    email1:string,
    phone:number
   }
  type candidate = personal & contact &  
  {
    getConctactInfo:()=>string;
  }

let cand:candidate={
    name1:"John",
    age1:20,
    email1:"abc@gmail.com",
    phone:256645121364,
    getConctactInfo:function(){
        return `${this.name1} can be conatacted at ${this.email1} or ${this.phone}`;
    }
}

console.log(cand.getConctactInfo()); //John can ve contacted at email or number

//4. using the classes (JS ES16/TS)

class person{
    ssn:string;
    firstname:string;
    lastname:string;

constructor(ssn:string, firstname:string,lastname:string){
    this.ssn=ssn; //assigning local to global variable
    this.firstname=firstname;
    this.lastname=lastname;
}

getFullName():string{
    return `${this.firstname} ${this.lastname}`;
} 
getDetails():string{
     return `SSN: ${this.ssn} ${this.getFullName()}`;
}
}

//Object creation
let person1 =new person('125453233',"John","Mccathy");
console.log(person1.getDetails());


let person2 =new person('125453233',"David","Mccathy");
console.log(person2.getDetails());

let person3 =new person('125453233',"Abi","Mccathy");
console.log(person3.getDetails());

let person4 =new person('125453233',"Ram","Mccathy");
console.log(person4.getDetails());

let person5 =new person('125453233',"Jones","Mccathy");
console.log(person5.getDetails());










