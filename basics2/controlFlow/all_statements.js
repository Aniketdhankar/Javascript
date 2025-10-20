//there are many types of conditional statements in javascript if you know c or java then just skip it syntax is same as well as working save your time move forward to the down of the page


//1.if statement
if (condition) {
    // code to be executed if condition is true
}else if(){
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
