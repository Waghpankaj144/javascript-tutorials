// Stack memory is used for primitive data types 
// Heap memory used for non-primitive data types for ex: object, array, function

let myName = "PankajWagh"
let anotherName = myName
anotherName = "abc"

console.log(anotherName);
console.log(myName);

// in stack the copy of the variable is shared not the reference but in the heap memory the reference of the 
// variable data is shared

let userOne = {
    email : "user@google.com",
    upi : "upi@ybl123"
}

let userTwo = userOne; //now reference of the userOne and two is same

console.log(userTwo);

userTwo.email = "pankaj@google.com" // to access variable in objects use dot operator

console.log(userTwo.email);
console.log(userOne.email);