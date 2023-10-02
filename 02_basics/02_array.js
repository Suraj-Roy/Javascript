//node 02_basics/02_array.js
const marvelHeros = ["thor","ironman","spiderman"];
const dcHeros = ["superman","flash","Batman"];

//marvelHeros.push(dcHeros);
//console.log(marvelHeros); 
//output [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'Batman' ] ]

// const allHeros = marvelHeros.concat(dcHeros); // concat returns new array
// console.log(allHeros);
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'Batman' ]

// concat is not widely used we will use spread for this purpose

//const allHeros = [...marvelHeros, ...dcHeros]; //spread operator
//console.log(allHeros);
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'Batman' ] -> widely use it

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const usableAnotherArray = anotherArray.flat(Infinity);// we will pass depth as argument
console.log(usableAnotherArray);
/* output: [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */

console.log(Array.isArray("Suraj")); //false
console.log(Array.from("suraj"));//[ 's', 'u', 'r', 'a', 'j' ]

let score1 = 1;
let score2 = 2;
let score3 = 3;

console.log(Array.of(score1,score2,score3));//[ 1, 2, 3 ]