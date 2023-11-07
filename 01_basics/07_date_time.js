//Dates

let myDate = new Date();

console.log(myDate);
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(typeof myDate);
 console.log(myDate.getDay());
 console.log(myDate.getMonth());


//creating a date
// let myCreatedDate = new Date(2023, 0 , 23);
let myCreatedDate = new Date("12-01-2022"); //mm-dd-yy
console.log(myCreatedDate.toDateString());

let myTimeStamp =  Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //converts it into seconds


//to define the particular international standardization
myDate.toLocaleString('default',{
    weekday : "long"
})