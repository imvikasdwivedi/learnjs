const TataCars =['Nexon','Harrier','Safari','Altroz']
const HyundaiCars =['Creta','Venue','Verna','Alcazar']
//const AllCars1= TataCars.push(HyundaiCars)
/* push() changes Tatacars array & 
   adds whole array HyundaiCars as single element,
   but value in Allcars1 will be 5 coz push() returns length of new array
   a1.push(a2) will change a1 by adding a2 as a single element in a1 but return length of a1*/
console.log(TataCars);
//console.log(AllCars1)
/* if we want to combine arrays in a way that the each element of a2 is added as 
   an individual element to a1 we use a1.concat(a2)
   It merges 2 arrays and returns the new array without changing a1 & a2*/
const Allcars2 = TataCars.concat(HyundaiCars)
console.log(Allcars2);
/*********** However the best way is to use spread(...) operator
 coz it provides additional flexibility to add single elements &
 also merge more than 2 arrays easily*/
const Allcars3= [...TataCars,...HyundaiCars,'Punch']
console.log(Allcars3);
const someArray=[2,5,7,[8,9],[4,5,[32,84],54]]
const someArrayReal = someArray.flat(Infinity)//flats array in sngle elements no matter how nested
console.log(someArrayReal);
const s1= 'Vikas'
const s2= 'Dwivedi'
console.log(Array.isArray(s1));//checks s1 is array or not;returns true/false
console.log(Array.from(s1));//If s1 is iterable it unpacks s1 into an array, one element at a time.
console.log(Array.of(s1,s2));//just put s1&s2  inside an array without touching it





