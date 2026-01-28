//sum of first 10 natural numbers
// let sum:number=0;  //1 2
// let i:number=1;
// while(i<=3){
//     sum=sum+i; //1 2
//     i=i+1
// }
// console.log(sum)

//factorial
//5! == 5*4*3*2*1 =120
// let num:number=5
// let fact:number= 1;
// //let i:number=num;
// while(num>1){
//     fact =fact*num;
//     num=num-1;
// }
// console.log("Factorial of 5!=="+fact)

//reverse the number
// 123 321
//1*10^2+2*10^1+3*10^0= 100+20+3=123
let i:number=123
let reversenumber:number=0
while(i>0){
    let digit:number = i%10 //12.3  12%10 =1.2  0.1//get last digit
    reversenumber = reversenumber*10 + digit   //0*10+3=> 3  3*10+2 =32  32*10+1=321 //append digit
    i=Math.floor(i/10); //12.3/10 ==12  //remove last digit
    
}

console.log(reversenumber)

