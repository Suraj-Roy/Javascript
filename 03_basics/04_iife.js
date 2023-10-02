//node 03_basics/04_iife.js
//Inmediately Invoked Function Expression
//global scope k polution se bachata h

(function chai(){ //nammed iife
    console.log("connected to db");
})();

(   //unnammed iffe
    () => {
        console.log("hello suraj");
    }
)();
