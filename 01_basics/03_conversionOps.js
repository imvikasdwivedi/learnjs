// let someNumber = 33
// let StringNumber=String(someNumber) //converts number type to string
// console.log(typeof someNumber)
// console.log(typeof StringNumber)//checking conversion succesful or not
// let otherNumber = 0
// let BoolNumber = Boolean(otherNumber)
// console.log(otherNumber);
// console.log(BoolNumber)// see how any non zero converts to true , also 0 will convert to false
// console.log(typeof otherNumber)
// console.log(typeof BoolNumber)

// let someString = "23abc"
// let numConv= Number(someString)
// console.log(someString)
// console.log(numConv) // this will give o/p NaN(not a number) cause abc is not convertible to number datatype
// console.log(typeof someString)
// console.log(typeof numConv)// this will give the datatype that is number
// ***************************************** OPERATIONS *************************************//
// let val = 3
// let negVal = -val // negVal will have negative value of val
// console.log(val)
// console.log(negVal)
// console.log(2+2);
// console.log(2**3);// 2 raised to power 3
// console.log(3%2);// modulus operator returning remainder

// let str1 ="Hello"
// let str2=" Vikas"
// console.log(str1+str2);// adds 2 strings simply

// console.log("1"+"2")
// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"2") // all 5 can be seen as how they are interpreted in js, consider these as ecma guidelines

let gameCounter = 100
console.log(gameCounter++);// first return gameCounter then increments it
console.log(++gameCounter);// first increments gameCounter then returns the incremented value
let counterReal
counterReal = ++gameCounter
console.log(counterReal);
counterReal = gameCounter++
console.log(counterReal);













