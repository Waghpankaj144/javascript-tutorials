//Imediately invoked function expression

(function chai () {
    console.log("DB CONNCETED");
})(); //iife must be ended with semicolon

( ()=>{
    console.log("db connected again");
} )();


((name)=>{
    console.log(`db connnected to ${name}`)
})(`Pankaj`)