//arrays

const myArr = [1,2,3,4,5];
const myArr2 = new Array(4,3,2,1);
const myHeros = ["shaktiman", "perman", "ninjaHatori"];

// console.log(myArr);
// console.log(myHeros);
// console.log(typeof myArr);

// console.log(myArr[2]);

//Array methods
myArr.push(6); //adds values in the end 
myArr.push(7);
myArr.pop()

myArr.unshift(9) //adds value in the start and shifts the whole array
myArr.shift() //we dont pass any argument in the shift it will remove the 1st element of array 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join() //converts array into string type 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice and splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3); //slice does not manipulate original array
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3); //splice manipulates the original array
console.log(myn2);
console.log("C", myArr);