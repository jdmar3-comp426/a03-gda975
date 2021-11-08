// Testing identifyArray
import {removeKeys} from "./src/mild/mild_2.js";
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
let x = removeKeys(obj, ['password', 'age']);
console.log(obj);
console.log(x);