//if statement
// syntax:
// if(condition){
//     statement;
// }

let age:number=20;
if(age<=18){
    console.log("you are eligible for vote")
}
else
{
    console.log("you are not eligible for vote")
}
//print odd and even
let num:number=10;
if(num%2==0){
    console.log("even")
}
else{
     console.log("odd")
}

//nested if else
let marks:number=50;
if(marks>=90 && marks<=100){
     console.log("Grade A")
}
else if(marks>=75 && marks<=90){
     console.log("Grade B")
}
else{
     console.log("Grade C")
}

let browser:string="Chrome"
if(browser=="Chrome"){
    console.log("Browser is chrome")
}
else if(browser=="Edge"){
     console.log("Browser is edge")
}
else{
console.log("Browser is firefox")
}

//switch statement

let day:number=3;

switch(day){
case 1:
    console.log("Mon")
break;
case 2:
    console.log("Tues")
break;
case 3:
    console.log("Wed")
break;
case 4:
    console.log("Thur")
break;
case 5:
    console.log("Fri")
break;
case 6:
    console.log("Sat")
break;
case 7:
    console.log("Sun")
break;
default:
    console.log("Invalid day")

}
     