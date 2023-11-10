function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
}

addTwoNumbers(3,2);
addTwoNumbers(3,"2");
addTwoNumbers(3,"a");
addTwoNumbers(3,null);


function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result

    return number1 + number2
}

const result = addTwoNumbers(7,8);
// console.log(result);

function loginUserName(username = "sam"){   //sam is default value which will br printed if no vlue is passed
    // if(username === undefined){
    //         console.log("please enter usernme !!");
    //         return
    // }
    if( !username ){
            console.log("please enter usernme !!");
            return
    }
    return `${username} just logged in `
}

// console.log(loginUserName("pankaj"));
// console.log(loginUserName());

//when number of input or passed values is not fixed, number of items adding to the cart by user is never fixed


// function calculateCartPrice(num1) {
//     return num1;
// } 
// console.log(calculateCartPrice(200, 300, 400));


function calculateCartPrice(...num1) {  //rest operator
    return num1;
} 
console.log(calculateCartPrice(200, 300, 400));


function calculateCartPrice(val1, val2, ...num1) {  //rest operator
    return num1;
} 
console.log(calculateCartPrice(200, 300, 400, 2000, 5000));

//function object, passing object to the function 
const user  = { 
    username : "pankaj",
     price :  99
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleobject(user);

//passing an object directly inside a function call

handleobject({
    username : "pankaj",
    price :  99
})

const myNewArray = [200,300,400, 8999, 9000];
function  returnSecondVal (getArray){
    return getArray[1]
}

console.log(returnSecondVal(myNewArray));
console.log(returnSecondVal([1,2,3,4,5]));