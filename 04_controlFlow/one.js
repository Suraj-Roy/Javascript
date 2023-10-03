//node 04_controlFlow/one.js

// if(true){

// }

// <, >, ==, === ,!=, !==, <=, >=

// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);

const balance = 1000;
//if(balance > 500) console.log('test'); // implicit scope only executable for single line

// if (balance > 500){
//     console.log('yes it is less than 500')
// } else if (balance > 800) {
//     //
// } else {
//     //
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("krwa do login");
}

