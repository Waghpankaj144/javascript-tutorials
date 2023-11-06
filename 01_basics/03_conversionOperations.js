let score  = "33abc";

// console.log(typeof score);
// console.log(typeof(score));

//converting into Number
let valueInScore = Number(score);
// console.log(valueInScore); //Nan:----   Not a Nummber 
// console.log(typeof valueInScore);


//converting boolean 
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

const id  = Symbol('123');
const anotherID = Symbol('123')
console.log(id === anotherID); // returns false even if values are same 
console.log(typeof id ); //typeOf symbol is symbol
console.log(typeof string);