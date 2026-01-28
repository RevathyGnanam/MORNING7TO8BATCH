// import {add} from "./Modules"
// import {Formatter} from "./Modules"

//Approach 1
// import {appname,add,Formatter} from "./Module"


// console.log(appname);
// console.log(add(10,20));
// console.log(Formatter.toUpper("welcome"));

//Approach 2
import * as utils from "./Module"

console.log(utils.appname);
console.log(utils.add(10,20));
console.log(utils.Formatter.toUpper("welcome"));