const accountID = 123;
let accountEmail = "Pankaj@google.com";
var accountPassword = "123pankaj";
accountCity = "Jaipur";
let accountState; //declare but not initialized 

// accountID = 2; const variable cannot be changed once they are declared
console.log(accountID); 

accountEmail = "pwagh@google.com";
accountPassword = "567";
accountCity = "mumbai";

/*
prefer not to use VAR
due its block and functional scope issues
*/

console.table([accountEmail, accountID, accountPassword, accountCity,accountState]); //all values will print at once in tabular format
