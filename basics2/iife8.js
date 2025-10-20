//immediately invoked function expression
// in arrow function we say how to use object in in function with({ //object present  }) same logic we are going to apply here
(function lfe(){
    //named IIFE
    console.log("iife function executed");
})();  // you should add (); at the end to invoke the function immediately otherwise it you wont be able to add more code here beause function do not when to end

((name) => {
    //unnamed IIFE
    console.log("Hello " + name);
})("Aniket");




//syntax(//defination)()  immediately invoked function expression


/*
💡 What is Global Scope Pollution?

In JavaScript, variables declared outside any function are global.

If too many scripts or variables share the global space, they can overwrite each other, causing bugs.

This problem is called global scope pollution.

🔹 Example
// Script 1
var user = "Aniket";
console.log(user); // Aniket

// Script 2 (loaded later)
var user = "Ravi"; // accidentally overwrites previous global variable
console.log(user); // Ravi
*/


//n IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
//It creates a private scope, so variables inside it do not pollute the global scope.
//This helps prevent name conflicts and bugs in large projects or when using multiple scripts.
//Before let and const were common, IIFEs were widely used to encapsulate code.
//Syntax example: (function() { /* code */ })(); runs immediately and keeps variables local.