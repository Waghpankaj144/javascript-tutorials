const marvel = ["thor", 'spiderman', "ironman"]
const dc = ["flash", 'batman', "superman"]

// marvel.push(dc);  //pushes elements in existing array
// console.log(marvel);
// console.log(marvel[3][1]);
// console.log(marvel.length);

// const heros = marvel.concat(dc)   //concatenates and returns new array
// console.log(heros);

const all_heroes = [...dc, ...marvel]; //using spread operator which is preferable
// console.log(all_heroes);

const another_arr = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(Infinity); 
// console.log(real_another_arr);

console.log(Array.isArray(all_heroes));
console.log(Array.isArray("pankaj"));

console.log(Array.from("pankaj"));  //from makes array of the values passed inside it 

console.log(Array.from({name:"pankaj"}));  //this cannot convert in array directly because it has keys and values
//  both. you have to specify whethe keys or values only 


let score1 = 100;
let score2 = 200;
let score3 = 300;
 console.log(Array.of(score1,score2,score3));  //returns array from set of elements