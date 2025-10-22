//there are many types of conditional statements in javascript if you know c or java then just skip it syntax is same as well as working save your time move forward to the down of the page


//1.if statement
if (condition) {
    // code to be executed if condition is true
}else if(condition){
    // code to be executed if previous condition is false and this condition is true
}
 else {
    // code to be executed if condition is false
}           
//2.switch statement
switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    default:
        // code to be executed if expression doesn't match any case
}   
//3.try...catch statement
try {
    // code that may throw an error
} catch (error) {
    // code to handle the error
} finally {
    // code that will always execute, regardless of an error
}           
//4.for loop
for (initialization; condition; increment) {
    // code to be executed in each iteration
}   // End of for loop      
//5.while loop
while (condition) {
    // code to be executed as long as condition is true
}   
//6.do...while loop
do {
    // code to be executed at least once and then repeatedly as long as condition is true
} while (condition);        



//how to check object is empty or not
const obj={};
if(Object.keys(obj).length===0){
    console.log("object is empty");
}

// false==0 true but false===0 is false because === checks for type also
// similarly true==1 is true but true===1 is false because === checks for type also
//false=="" is true but false==="" is false because === checks for type also
//0=="" is true but 0==="" is false because === checks for type also




//nullish coalescing operator ?? :null and unefined ke case me default value dene ke liye use hota hai
let val1;
//val1=5 ??10 //5 because val1 is not null or undefined
console.log(val1); //5
val1=null ??10 //10 because val1 is null // agar value aagayi to wo le lega nahi to default lega
console.log(val1); //10
val2=undefined ??10 //10 because val2 is undefined
console.log(val2); //10


//ternary operator : conditional operator
//condition ? expression1(true): expression2(false) same as if else
let age=18
let canVote=age>=18 ? "yes you can vote":"no you cannot vote"
console.log(canVote); //yes you can vote



//for of loop : used to iterate over iterable objects like arrays ,strings ,maps ,sets
const arr=[10,20,30,40,50]
for(const value of arr){
    console.log(value); //10 20 30 40 50
}
// now for objects we cannot use for of loop directly we have to use Object.keys() or Object.values() or Object.entries() //same like enchanced for loop in java
const obj1={ 
    name:"Aniket",
    age:25,
}  
// Object itself is NOT iterable, so this would give an error:
// for (const key of myObj) { ... } ❌ but we can use Object.keys(), Object.values(), or Object.entries() to iterate over its properties.


for(const key of Object.keys(obj1)){
    console.log(key); //name age
}
for(const value of Object.values(obj1)){
    console.log(value); //Aniket 25
}
for(const [key, value] of Object.entries(obj1)){
    console.log(key, value); //name Aniket  age 25
}

const greeting="Hello"
for(const char of greeting){
    console.log(char); //H e l l o
}

//map object hold key value pairs and remember the insertion order of the keys
const map=new Map()()
map.set(1,"one")
map.set(2,"two")
map.set(3,"three")

for(const [key,value] of map){
    console.log(key,value); //1 one 2 two 3 three
}
//or 
for(const key of map.keys()){   
    console.log(key); //1 2 3
}
for(const value of map.values()){
    console.log(value); //one two three
}       

for(const key of map){
    console.log(key); //[ 1, 'one' ] [ 2, 'two' ] [ 3, 'three' ]
}

//but if
const myObj={
    "a":1,
    "b":2,
    "c":3
}//then for of loop will give error because object is not iterable
for(const key of Object.keys(myObj)){
    console.log(key); //a b c
}

// Object itself is NOT iterable, so this would give an error:
// for (const key of myObj) { ... } ❌

//we can use for in loop for objects
for(const key in myObj){
    console.log(key); //a b c
    console.log(myObj[key]); //1 2 3
}

const arr2=["apple","banana","cherry"]
for(const index in arr2){
    console.log(index); //0 1 2
    console.log(arr2[index]); //apple banana cherry
}//return index of array

//for of loop value return value of array and for in return index of array----------------------------------------




//foreach loop : it is a method of array it takes a callback function as an argument and executes the callback function for each element of the array
const fruits=["apple","banana","cherry"]
fruits.forEach(function(val){
    console.log(val); //apple banana cherry
})

fruits.forEach((item)=>{
    console.log(item); //apple banana cherry
})
function printFruit(fruit){
    console.log(fruit);
}
fruits.forEach(printFruit); //apple banana cherry //pass reference of function


//----------------------------------------

fruits.forEach(function(value,index,array){
    console.log(value); //apple banana cherry
    console.log(index); //0 1 2
    console.log(array); //["apple","banana","cherry"]
    console.log(value,index,array); //apple 0 ["apple","banana","cherry"] etc
})
