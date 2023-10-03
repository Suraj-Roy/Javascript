//node 04_controlFlow/truthy.js

const userEmail = []

if(userEmail){
    console.log("Got user Email");
} else {
    console.log("Don't have user email");
}

//falsy values
//false , 0 , "" , -0 , BigInt -> 0n , null , undefined , NaN

//rest all is truthy value
//"0" , "false" , " " , [] , {} , function(){} -> called as empty function , 

if ( userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}

console.log(false == 0); //true
console.log(false == ""); //true
console.log(0 == '');

//Nullish Coalescing Operator (??) : null undefined
let val1;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 15;

console.log(val1); //5
console.log(val2); //10
console.log(val2); //15

// it is different from terniary operators
condition ? true : false; // its goals and itself is different from nullish operator



