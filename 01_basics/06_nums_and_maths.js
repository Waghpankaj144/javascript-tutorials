<<<<<<< HEAD
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966;
const otherNumber2 = 223.8966;
console.log(otherNumber.toPrecision(3));
console.log(otherNumber2.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); //puts commas between zeros
//en-IN :- indian standard 

// ###################  MATHS   ##################3

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(2,4,2,5,4));
console.log(Math.min(2,4,2,5,4));   
console.log(Math.pow(4,2));


console.log(Math.random());  // returns value between o - 1
console.log((Math.random()*10) + 1);  
console.log(Math.floor(Math.random()*10) + 1);  

const min =10;
const max =20;

=======
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966;
const otherNumber2 = 223.8966;
console.log(otherNumber.toPrecision(3));
console.log(otherNumber2.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); //puts commas between zeros
//en-IN :- indian standard 

// ###################  MATHS   ##################3

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(2,4,2,5,4));
console.log(Math.min(2,4,2,5,4));   
console.log(Math.pow(4,2));


console.log(Math.random());  // returns value between o - 1
console.log((Math.random()*10) + 1);  
console.log(Math.floor(Math.random()*10) + 1);  

const min =10;
const max =20;

>>>>>>> 7492a4a946c5ddf9dde155a4966fb60f69844ded
console.log(Math.floor(Math.random() * (max - min + 1) + min )); //returns valueonly between 10-20 inclusive