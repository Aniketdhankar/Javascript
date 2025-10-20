//scopes in javascript

if(true){
    let a=10
    const b=20
    var c=30
    console.log("inside if block",a,b,c) //10 20 30
}

console.log(a); //ReferenceError: a is not defined
console.log(b); //ReferenceError: b is not defined
console.log(c); //30 var is function scoped not block scoped


var c=100;
if(true){
    let a=10
    const b=20
    var c=30
    console.log("inside if block",a,b,c) //10 20 30
}
console.log("outside if block",c); // op will be 30

//-------------------------------------------------------nested scopes--------------------------------------------------------------------
function one(){
    const username="aniket"
    function two(){
        const website="geeksforgeeks"
        console.log(username); //aniket
    }
    console.log(website); //ReferenceError: website is not defined
    two()
}
one() //nested scopes can access outer scope but outer scope cannot access inner scope this is called lexical scoping
/*
Lexical scope (also called static scope) means:

The scope of a variable is determined by its position in the source code (where it is written), not where it is called.

In other words: inner functions have access to variables of outer functions, because of how the code is written.
*/


//++++++++++++++++++++++++++++++++intersting +++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5)); //6 function hoisting
function addone(num){
    return num+1
}



console.log(addtwo(5)); //ReferenceError: Cannot access 'addtwo' before initialization
const addtwo=function(num){
    return num+2
}
//console.log(addtwo(5)); //7 expression function


