// array
//node 02_basics/01_array.js
const myArr = [1,2,3,4,5,6]; //creates shallow copy
console.log(myArr);
//test

//deep copy and shallow copy
//heap and stack
//shallow of an object is an copy whose copy share same reference point
//deep copy properties do not share the same reference point

const myArr2 = new Array(1,2,3,4); //creates deep copy
console.log(myArr2[0]);

//push to add array element
myArr2.push(6);
myArr2.push(7);

console.log(myArr2);

//pop() -> no argument just removes last element
//unshift adds element to start of array(time consuming operatins) -> avoid
myArr2.unshift(7);
console.log(myArr2);
//shift ->removes first element
myArr2.shift();

console.log(myArr2);

//includes (like contains) -> boolean
//index -> if not present returns -1 else first index

const newArr = myArr.join()

console.log(typeof myArr);
console.log(typeof newArr);

//slice, splice
//slice does
console.log("A " , myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C " , myArr);