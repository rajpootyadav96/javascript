//typeof operator

//data types(primitive data type)
//string 'rajpoot'
//number
//booleans
//undefined
//null
//BigInt
//Symbol


// let age=22
// let firstName="rajpoot"

// console.log(typeof age);

// //22->"22"
// //convert number to string.
// age=age+""
// console.log(typeof age);

// //convert string to number.

// let myStr=+'34'
// console.log(typeof myStr);

// let age ='18'
// age=Number(age)
// console.log(typeof age);


//undefined

//if declare any variable but we dont initialize any value the it would be
//undefined if you defined a variable with const and don't initialize any value 
//then it return error cant declare const without initializing value

// let firstName;
// console.log(typeof firstName);
// firstName='raj'
// console.log(typeof firstName);

//null

// let myvar=null
// console.log(myvar);
// console.log(typeof myvar);  //object
//bug, error

//BigInt

// let myNum=BigInt(12)
// let sameMyNum=23n

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNum+sameMyNum);

// boolean 
// true, false
let num1 = '7'
let num2 = 7
// console.log(num1>=num2);

//== vs ===
//== operator checks only value not data type but === check both

console.log(num1 == num2);  //true
console.log(num1 === num2);   //false

//!= vs !==

console.log(num1 != num2); //false
console.log(num1 !== num2); //true