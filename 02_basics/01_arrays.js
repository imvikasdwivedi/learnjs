// Array is an object in JS having its own methods.
const arr1=[2,6,8,96,52] 
const arr2= new Array(2,65,98,41,25)// creates an arr2 object using Array() function
arr1.push(1)//adds a value to last of array
console.log(arr1);
arr1.pop()// deletes the last value in array
console.log(arr1);
arr1.unshift('pi') //adds an element to start of array
console.log(arr1);
console.log(arr1[3]);
arr1.shift() //removes the first element 
console.log(arr1);
console.log(arr2.includes(98));// returns true/false
console.log(arr2.indexOf(98));// returns index of the argument
console.log(arr2.indexOf(75));// returns -1 if element isn't present
let arr3 = ['hello', 'palantir',57]
arr3= arr1.join();//.join() works only on the array it is called on(arr1 here)
// and returns a new string without changing the original array(arr1)
// here arr3 is now converted to string datatype & is no longer an array
console.log(arr3);
// arr2=arr1.join() won't work bcoz arr2 is a const & we are trying to change its reference
//it's like asking arr2 to point to an entirely new thing
console.log(typeof arr3);
 /*****************************************slice() and splice()**************************
  slice(start, end) returns the selected elements as a new array 
  and does not change the original array.
 splice(start, count) removes elements in the original array and changes it.
 But it returns the removed elements.*/
const arr4 = arr1.slice(0,3)//includes index 0,excludes index 3. arr1 remains unchanged
console.log(arr4);
console.log('A',arr1);
const arr5 = arr1.splice(0,3)//removes elements from index 0 & 3 elements in total
console.log(arr5);//arr5 contains removed elements since .splice() returns the removed elements
console.log('B',arr1);//arr1 is now changed & doesn't contain the removed elements








