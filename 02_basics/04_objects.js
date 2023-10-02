//node 02_basics/04_objects.js

//const tinderUser = new Object(); //silgleton object
const tinderUser = {}; // non singleton object
//both have same value {}

tinderUser.id = "1234";
tinderUser.name = "Suraj";
tinderUser.isLoggedIn = false;

//console.log(tinderUser); //output { id: '1234', name: 'Suraj', isLoggedIn: false }

const regularUser = {
    email : "roy@gmail.com",
    fullname : {
        userfullname : {
            firstname : "suraj",
            lastName : "Kumar"
        }
    }
}

//console.log(regularUser.fullname.userfullname["firstname"]); //.fullname? we will talk later

const obj1 = {1 : "a",2 : "b"};
const obj2 = { 3: "c",4 : "d"};

// const obj3 = {...obj1, ...obj2}; // use most of time
// console.log(obj3);//it also works
// //output { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = Object.assign({},obj1,obj2); //assign{EventTarget,source} // used less
// console.log(obj3);
// console.log(obj1)
//Important Note always remember

// const users = {
//     {
//         id : 1,
//         email : "roy@gmail.com"
//     },
//     {
//         ......
//     }
// }

// user[1].email

// console.log(Object.keys(tinderUser)); //very important
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //first value will be key second will be values
/* 
[ 'id', 'name', 'isLoggedIn' ]
[ '1234', 'Suraj', false ]
[ [ 'id', '1234' ], [ 'name', 'Suraj' ], [ 'isLoggedIn', false ] ]
*/

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//boolean result

const course = {
    courseName : "Js in hindi",
    price : "999",
    courseInstructor : "Suraj"
}

//course.courseInstructor
const {courseInstructor} = course;
//or const {courseInstructor : instructor} = course;
//console.log(courseInstructor);

//json structure
// {
//     'id' : 1,
//     'name' :'suraj'
// }
//json structure