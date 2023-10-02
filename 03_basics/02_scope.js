//node 03_basics/02_scope.js
//{} scope
//var bekar h
//if even within function it can be used outside
//please avoid  it

//nested scope
function one(){
    const username = "suraj";

    function two(){
        const website = "youtube";
        //console.log(username);
    }
    //console.log(website); line by line kaam hota h yahi phat jyega
    two();
}

one()

//++++++++++++Interesting+++++++++++++++++++++
console.log(addOne(5));
function addOne(num){
    return num + 1
}

addOne(5)

//console.log(addTwo(5)); //ye problem aati h
const addTwo = function(num){
    return num + 2
}

addTwo(5)