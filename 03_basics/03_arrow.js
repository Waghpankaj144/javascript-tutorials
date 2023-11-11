const user = { 
    username : "pankaj",
    price  : "999",
    welcomeMessage  : function(){
        console.log(`${this.username}, welcome to website `);
        // console.log(user.username);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username =  "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "pankaj"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "pankaj"
//     console.log(this.username);
// }

// chai()


const chai =  () =>  {
    let username = "pankaj"
    console.log(this.username);
}
// chai()

//explicit have to use return 
// const addTwo = (num1, num2) => {
//     return num1+num2;
// }
// console.log(addTwo(2,3));

//implicit arrow function: ------->
// const addTwo = (num1, num2) =>  num1+num2;

// const addTwo = (num1, num2) => ( num1+num2);
 
const addTwo = (num1, num2) => ( {username : " pankaj"});  //to return object implicity t must be wrapped inside paranthesis

console.log(addTwo(2,3));