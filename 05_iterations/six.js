//node 05_iterations/five.js
// const coding = ["js","python","java"];

// const values = coding.forEach( (item) => {
//     //console.log(item)

// });

// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num) => {
//     return num > 4;
// });

// console.log(newNums);

const cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
];

const userCars = cars.filter( (cr) => cr.color === "purple");

console.log(userCars);