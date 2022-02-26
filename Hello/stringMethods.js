//trim()
//toUpperCase()
//toLowerCase()
//slice
//concat()

let fristName = 'rajpoot'

// console.log(fristName.length);


//trim,toUpperCase,toLowerCase,slice never make changes in original string its generates new string 
//trim remove spaces around string

// let newName=fristName.trim()
// console.log(newName);
// console.log(fristName.length);

// console.log(fristName.toUpperCase());
// let newvar=fristName.toUpperCase()
// console.log(newvar.toLowerCase());

// start index
// end index

//slice takes start index and end index and return string from start index <1 of last index

let newString = fristName.slice(0, 4)//rajp
console.log(newString);


let str = '12'
let str2 = '14'

console.log(+str + +str2);