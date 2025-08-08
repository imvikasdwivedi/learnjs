//All functions are object with a special addition of being callable.
//But all objects aren't function

let myDate = new Date() // creates a new Date object
/*We are not equating an object to a function object. Instead:

Date (the function object) is invoked using the new keyword.

It returns a new object (an instance of Date).

We store that object in myDate.*/
console.log(myDate)
console.log(myDate.toDateString()) //Converts the date to a human-readable string (no time).
console.log(myDate.toLocaleString('en-IN')) //Formats the date and time in Indian locale
console.log(myDate.toLocaleDateString('en-IN')) //Formats only the date part in dd/mm/yyyy (Indian format)
console.log(myDate.toJSON())
/*The .toJSON() method converts the Date object into a string in ISO format.
   It's commonly used when sending dates in APIs (like JSON responses).*/
console.log(typeof myDate)