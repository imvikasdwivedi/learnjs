console.log(Math)
const num1 = 235.65
const num2  = 400
const num3 = 125894538
const arr1 =[2,5,7,95,62]
console.log(Math.floor(num1));
console.log(Math.ceil(num1));
console.log(Math.round(num1));
console.log(Math.max(num1,num2 ));
console.log(Math.min(num1,num2));
console.log(Math.min(...arr1 ));
/*
Math.max() expects individual numbers, not an array.
The spread operator (...) takes the array and expands it into individual values:*/

console.log(Math.max(...arr1 ));
console.log(Math.pow(num2,0.5));
console.log(num1.toPrecision(2));
console.log(num1.toPrecision(4));
/* toPrecision() returns a string, not a number.
It preserves significant digits, not fixed decimal places like toFixed().
*/
console.log(num1.toString()); // converts to string data type
console.log((42).toString(2)); // "101010" → binary 
console.log((42).toString(16)); // "2a" → hexadecimal
console.log(num3.toLocaleString('en-IN'));//Converts number to a string using locale-specific formatting (adds commas, currency, etc.)
// Using random method to generate numbers in a given range, let's say 1 to 10
console.log(Math.floor(Math.random()*10))+1;//random() gives values b/w [0,1)
console.log(Math.floor(Math.random()*6))+1; // real world use to give dice rolling outputs


