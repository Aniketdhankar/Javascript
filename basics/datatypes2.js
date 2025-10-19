"use strict"; //treat all JS code as newer version actually no need to write this line becuase modern browsers do this by default

// Data Types in JavaScript
// 1. Primitive Data Types
//    - Number
//    - String
//    - Boolean
//    - Null //standalone value that represents nothing
//    - Undefined
//    - Symbol (ES6)

// 2. Reference Data Types
//    - Objects
//    - Arrays
//    - Functions
//    - Dates

// alert(3+3)// this will give error in strict mode if not in browser environment,we are using node.js not browser

//normally we avoid semi colon but in strict mode it is better to use semi colon as code readability increases
let name="Aniket"
let age=22
let isStudent=true

//bigint is also a data type in js but we generally do not use it we only use it when we have to deal with very large numbers

//symbol is used to create unique identifiers for objects
let sym1=Symbol("identifier")
let sym2=Symbol("identifier")


//objects are used to store multiple values in a single variable
let person={
    name:"Aniket",      
    age:22,
    isStudent:true  
}

console.log(typeof name) 

//undefined is a type but null is an object very important thing to remember-----------------

const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421


//data is divided into two types based on how they are stored and manipulated
//1. Primitive data types
//2. Reference data types
//primitive data types are stored directly in the location that the variable accesses
//reference data types are stored in heap memory and the variable contains a reference to that memory location  
//primitive data types are immutable they cannot be changed once created
//reference data types are mutable they can be changed once created


// ----------------------------
// 1. Primitive Data Types
// ----------------------------
// Stored directly, immutable
let num1 = 10;
let num2 = num1; // copy of num1
num1 = 20;       // changing num1 does NOT affect num2

console.log("Primitive Types:");
console.log("num1 =", num1); // 20
console.log("num2 =", num2); // 10
// => Primitives are stored by value and independent

// ----------------------------
// 2. Reference Data Types(Non primitives)
// ----------------------------
// Stored in heap, variable holds reference, mutable
let arr1 = [1, 2, 3];
let arr2 = arr1;   // arr2 points to the same array
arr1[0] = 99;      // changing arr1 affects arr2

console.log("\nReference Types:");
console.log("arr1[0] =", arr1[0]); // 99
console.log("arr2[0] =", arr2[0]); // 99
// => Reference types point to same object (mutable)

// ----------------------------
// 3. Strings (Reference type but immutable)
// ----------------------------
let str1 = "Hello";
let str2 = str1;
str1 = "World";   // creates a new string, str2 is unaffected

console.log("\nString Example (Immutable Reference Type):");
console.log("str1 =", str1); // World
console.log("str2 =", str2); // Hello
// => Strings are immutable in JavaScript

//------------------------------------------------------------------IMPORTANT NOTE------------------------------------------------------------------
//java script has dynamic typing means we do not need to specify data type of variable while declaring it
//data type is determined automatically based on the value assigned to variable
//we can change the data type of variable by assigning a value of different data type to it

const id=Symbol("123")
const id2=Symbol("123")
console.log(id===id2) //false because symbol is unique even if the description is same
console.log(id===id2) //false because symbol is unique even if the description is same

//symbols are generally used to create unique property keys for objects to avoid name collisions
let obj={
    //in this we create objects
name:"Aniket",
age:22,
[id]:"uniqueID123" //In JavaScript, when you use a Symbol as an object property key, you always need to use square brackets [ ] to tell JS to evaluate the Symbol instead of treating it as a literal string.  
}

//also we can store function in variables
let greet=function(){
    console.log("Hello, World!")
}