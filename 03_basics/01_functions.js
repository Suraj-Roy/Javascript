//node 03_basics/01_functions.js
// function sayMyName(){
//     console.log("Hello Suraj");

// }

// sayMyName()
// sayMyName()

// function addTwoNumbers(number1, number2){//parameters
//     return number1 + number2;
// }

// console.log(addTwoNumbers(3,4)); // arguments

// function loginUserMessage(username = "sam"){
//     if(!username){ // equavalent to username === undefined
//         return 'please enter a username';
//     }
//     return `${username} just loggedIn`;
// }

// console.log(loginUserMessage()); // when nothing is passes it prints undefined with text

function calculateCartPrice(...num){ //...num rest operator we will talk about diff bw rest and spread
    return num
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username : "suraj",
    age : 22
}

//always check type safety
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user);