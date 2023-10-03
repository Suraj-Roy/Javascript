//node 05_iterations/eight.js

const myArr = [1,2,3,4,5];

//0 + 1 + 2 + 3 + 4 + 5
//const initialValue = 0;
// const sumWithInitial = myArr.reduce(
//     (accumulator , currentValue) =>{
//         return accumulator + currentValue
//     },0
// );

// console.log(sumWithInitial);

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

const capacityVal = cars.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue.capacity
    },0
);

console.log(capacityVal);