//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "pankaj",
    "full name"  : "pankaj Wagh",
    // mySym : "mykey1", declaring lik this means symbol is used as string not as Symbol
    [mySym] : "mykey1", //now Symbol canbe used as Symbol
    email : "pankaj@google.com",
    isLoggedIn : false,
    lastLoginDays : ["mondays", "saturday"]
}

console.log(JsUser);
console.log(JsUser.email); //not preferable

// console.log(JsUser[email]); ==> this will throw error bcoz all elements of objects are stored in form of strings 

// console.log(JsUser["email"]); //recommended
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "wagh@chatgpt.com"
// Object.freeze(JsUser); //once you freez object no changes can be done 
JsUser.email = "wagh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}


console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
