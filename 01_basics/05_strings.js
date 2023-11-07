const name = "pankaj"
const surname = "wagh"

console.log(name + " " +surname +  "values"); //concatinating strings but, no preferred in this days 

console.log(`my name is ${name} and surname is ${surname}`);  //this is recommended

const gameName = new String("Contra-dot-com"); //string also stores in key value pairs so user can access values based on indexes

console.log(gameName[0]);
console.log(gameName.__proto__); //returns an empty object
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newGame = gameName.substring(0,2);
console.log(newGame);

// const anotherGame = gameName.slice(0,4)
const anotherGame = gameName.slice(-6,4) //you can even pass negative values it will start slicing from reverse 
console.log(anotherGame);

const newGameOne = "     Pankaj    "
console.log(newGameOne);
console.log(newGameOne.trim()); //use to cit down the spaces

const url = "https:/pankaj.com/pankaj%20wagh"
console.log(url.replace('%20','-'));

console.log(url.includes('wagh'));

//splitting a string bases on something like space or dash or any character 
console.log(gameName.split('-')); //returns an array 