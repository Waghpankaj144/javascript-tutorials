//const tinderUser =new Object()    :- singleton object 

const tinderUser = {}         //non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser ={
    email : "pankaj@google.com",
    fullname : {
        username : {
            firstname : "pankaj",
            lastname : "wagh"
        }
    }
}

// console.log(regularUser.fullname.username);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3 : "a", 2:"b"}

// const obj3 = Object.assign({}, obj1, obj2);  //merging objects not preferable

const obj3 = {...obj1,...obj2};    //recomended
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));  //to check that the particular property is available in object or not

const course = {
    coursename : "JS tutorials",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course 
// console.log(courseInstructor);
console.log(instructor);