//stack and heap memory example

//primitive data types are stored in stack memory
let a = 10;
let b = a; //b gets a copy of value of a
a = 20; //changing a does not affect b


//reference data types are stored in heap memory
let obj1 = { name: "Aniket" };
let obj2 = obj1; //obj2 references the same object as obj1
obj1.name = "Changed"; //changing obj1 affects obj2 because both reference same object

console.log("Primitive Types:");
console.log("a =", a); //20
console.log("b =", b); //10     

/*

Memory Types in JavaScript

JavaScript memory is mainly divided into:

Memory Type	What it Stores	Example
Stack Memory	Stores primitive types and function call information	number, boolean, undefined, null, symbol
Heap Memory	Stores objects, arrays, functions (reference types)
*/

let user1 = { name: "Alice" };

/*
Stack Memory                               Heap Memory
-------------                             -------------
user1     point to  ---------------──────► Heap Memory
                                    {
                                       name: "Alice"  //actual object stored in heap
                                    }

*/
