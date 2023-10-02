//node 03_basics/03_arrow.js

const user = {
    username: "suraj",
    age : 22,

    welcomeMessages : function(){
        console.log(`${this.username} , welcome dear`);
    }
}

user.welcomeMessages();
user.username = "sam";
user.welcomeMessages();

const chai = () => {
    let username = "suraj"
}

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

const addTwo = (num1,num2) =>  (num1 + num2);
console.log(addTwo(3,5));

//{} bracket m return likhte h aur without nhi likhte h

//bina return k () rap krna parega

