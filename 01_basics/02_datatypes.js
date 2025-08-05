let age =18 // number==> from -(2^53 - 1)to (2^53 -1)
let userName ="vikas" //string
let isLoggedIn = true //boolean
let state // undefined
let temp = null // null==> standalone value
// typeof null will give object as datatype,but it is a bug in js.
/* In early JavaScript implementations, values were stored as 32-bit binaries with the lower bits used as type tags.
   The value null had a binary representation of all zeroes, which matched the type tag for object. 
   So typeof null incorrectly returns 'object'. 
   This bug was never fixed because of backward compatibility concerns.*/
   console.log(typeof isLoggedIn);
   console.log(typeof age)
   console.log(typeof userName)
   console.log(typeof state)
   console.log(typeof temp)
   
   
   