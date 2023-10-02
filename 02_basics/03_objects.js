//singleton
//node 02_basics/03_objects.js
//objects literals
//Object.create -> we will talk later
//symbol declaration
const mySym = Symbol("key1");

const JsUser = {
    name : "Suraj", // note here name is kept as string "name" : "Suraj"
    age : 22,
    location : "Kolkata",
    email : "roysuraj365.5@gmail.com",
    isLoggedIn : false,
    lastLogin : ["Monday","Tuesday"],
    [mySym] : "key1" //type is symbol if we will remove [] then type will be string
};

//console.log(JsUser.name); //can use it but avoid it
console.log(JsUser["name"]);//correct approach
console.log(JsUser["lastLogin"][0]);//correct approach
console.log(JsUser[mySym]);//correct approach

JsUser.email = "abc@gmail.com" //we can change value in this way
//Object.freeze(JsUser);// now if we wil cahange values than we will 
//not get error but change will not be reflected

console.log(JsUser);
/* output : {
  name: 'Suraj',
  age: 22,
  location: 'Kolkata',
  email: 'abc@gmail.com',
  isLoggedIn: false,
  lastLogin: [ 'Monday', 'Tuesday' ],
  [Symbol(key1)]: 'key1'
} */

JsUser.greeting = function(){
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greeting());

//abhi objects ki knowledge ki kami h