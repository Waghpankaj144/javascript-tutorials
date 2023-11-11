var c = 300;
let a = 100;

if(true){
    let a  =10;
    const b =20;
    var c = 30;
    
//     console.log(`Inner local scope :- ${a}`);
// console.log(b);
}

// console.log(`Outer global scope :- ${a}`);
// console.log(c);

function one(){
    const username = "pankaj"

    function two(){
        
        const website = "youtube"
        // console.log(username);

    }
    // console.log(website);

    two()
}

one()

if(true){
    const username = "pankaj"
    if(username === "pankaj"){
        const website =  " instagram"
        // console.log(username  +  website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++ INTERESTING  +++++++++++++++++++=

console.log(addone(5));
function addone(num) { 
    return num + 1
}



console.log(addTwo(5));  //throwing error hoisting concept
const addTwo = function (num) { 
    return num + 1
}

