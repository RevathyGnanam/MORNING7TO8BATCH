//A tuple is a fixed length where each element has a specific type

//Example 1: tuple with 2 values
let person:[string,number]=["John",100]

console.log(person[1])

//Example 2:multiple vales
let user: [string,number,boolean] //declaring tuple variable
user=["John",100,true];
console.log(user)

//Example 3:
for(let i=0;i<user.length;i++){
    console.log(user[i])
}

//Example 4:
for(let index in user){
    console.log(user[index])
}

//Example 5:
for(let value of user){
    console.log(value)
}

//Example 6: Tuple array(array of tuples)
let students:[number,string][]=[[101,"john"],[102,"sam"],[103,"ram"]];
console.log(students)
console.log(students[1])
let tp=students[1]
console.log(tp[0])
console.log(tp[1])
