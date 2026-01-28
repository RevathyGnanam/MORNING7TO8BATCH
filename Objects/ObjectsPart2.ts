//class
// Read only properties
// optional property

// static properties and methods


class Student{

    readonly studentId:number; //Read only property(can only be assigned once inside constructor)
    name:string; //Regular property
    email?:string; //Optional property
    static schoolName:string="Zion matric"; //static variable among all instances/objects

    constructor(id:number, name:string, email?:string){
       this.studentId=id;
        this.name=name;
        this.email=email; //email can be undefined if not provided

    }

    displayInfo(){

       console.log("Student iD", this.studentId);
        console.log("Student name", this.name);
        if(this.email){
            console.log("email",this.email);
        }
        else{
            console.log("email is not provided");
        }
        //Access static property using class name
        console.log("School name:",Student.schoolName);
    }

     static changeSchoolName(newName:string):void{
        Student.schoolName =newName;
    }
}

let s1 = new Student(101,"Revathy");
let s2 = new Student(102,"Sam","Absc@gmail.com");
  
s1.displayInfo();
s2.displayInfo();

//change the school name
 Student.changeSchoolName("Christ king");

 s1.displayInfo();
 s2.displayInfo();