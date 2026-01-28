//String - Text value pr a combination of characters

//Single quotes - String literal ('Single quote')
////Double quotes - String literal ("Double quote")
//backtick - String template -`When we try to use a string inside another string valye  ${variable}`

//Declaration of strings

let str1:string= 'welcome to class'
let str2:string= "welcome to class"
let str3:string= `welcome to class`

console.log(str1)
console.log(str2)
console.log(str3)

//to extraxt the number using backtick

let num:number=10;
console.log("Number is:", num)
console.log(`Number is:, ${num}`)

//String Methodsa
             //  01234
let str:string ="Hello Typescript!";

//length - find the length of the string (How many number of character)
console.log("Length of a string:",str.length)

//2.toUpperCase() and toLowerCase()
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//3. charAt(index) and indexOf(string)
console.log("Character at 4th index", str.charAt(4));
console.log("Index of the type", str.indexOf("Type"))

//4.Substring(starting index,ending index)
//ending index is exclusive

console.log(str.substring(0,5))

//5.includes():returns true or false(boolean)
//string value is case sensitive
console.log(str.includes("Hello"))
console.log(str.includes("abc"))

//6. StartsWith() and endsWith()--> returns a boolean value(true/false)

console.log("Starts with",str.startsWith("Hello"))
console.log("Starts with",str.startsWith("abc"))
console.log("Starts with",str.endsWith("!"))
console.log("Starts with",str.endsWith("test"))

//7.replace()
console.log(str.replace("Typescript","World!!"))
console.log(str) //it is immutable

//8.split -break the string into multiple parts based on the delimeter, returns an array

//ex 1:
let words:string[]=str.split(" ")
console.log("After splitting", words)

//Ex 2: 
let myString:string="abc@gmail.com,xyz@gmail.com"

let arr:string[]=myString.split(",")
console.log(arr)

//9.trim(),trimStart(),trimEnd()

myString="    Welcome to TS    "
console.log("original string:",myString)
console.log("gtrtrimim string:",myString.trim())
console.log("trimstart string:",myString.trimStart())
console.log("trimend string:",myString.trimEnd())

//10.concat:
let s1="Welcome"
let s2=" to"
let s3=" demo class"

console.log("After concat",s1.concat(s2))
console.log("After concat",s1+s2)
console.log(s1.concat(s2).concat(s3))

// multiple string with backtik
let multipleLine:string = `welcome
                        to TS`
                        console.log(multipleLine)