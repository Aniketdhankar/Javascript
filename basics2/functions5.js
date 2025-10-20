function sayMYNamer(){
    console.log("aniket");
}

sayMYNamer//this is the reference to function
sayMYNamer() //this is calling the function

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
addTwoNumbers(5,10) //15

//suppose
addTwoNumbers(3,"4")// "34" string concatenation
addTwoNumbers("5","7") //"57" string concatenation
addTwoNumbers(3,null) //3 null is converted to 0
addTwoNumbers(3,undefined) //NaN undefined is converted to NaN
addTwoNumbers(3,"a") //NaN "a" is converted to NaN

// function definition function(parameters)                         when function call ---function(arguments)



const result=addTwoNumbers(7,8) //15
console.log(result); //undefined  because the function does not return anything 



function addTwoNumbers(num1,num2){
   // let result=num1+num2
   // return result
   return num1+num2
}

const result2= addTwoNumbers(7,8) //15
console.log(result2); //15

function loginUser(username){
    return `${username} just logged in`
}
console.log(loginUser("aniket")); // "aniket just logged in"

//but if you don't pass any argument it will be undefined----------------------------------------


function loginUser2(username){
    if(username===undefined){
        console.log("please provide username");
        return
    }
    return `${username} just logged in`
}


function loginUser3(username="sam"){ ///given default value
    if(!username){
        console.log("please provide username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUser3()); // "sam just logged in

//----------------------------------------------------------------------------------------------------------------------------------------------
function sumAllNumbers(...numbers){ //rest operator and spread operator declaration is same but changes based on usage
    return numbers
}
console.log(sumAllNumbers(1,2,3,4,5,6)); //[1,2,3,4,5,6] it will return an array of numbers

function sumAllNumbers2(val1,val2,...numbers){ //rest operator and spread operator declaration is same but changes based on usage
    return numbers
}
console.log(sumAllNumbers2(1,2,3,4,5,6));// [3,4,5,6] it will return an array of numbers after first two values val1 and val2 has taken 1 and 2 and rest operator takes rest of the values

//----------------------------------------------------------------------------------------------------------------------------------------------


//handle objects as function parameter
const user={
    username:"aniket",
    price:199
}

function handleObject(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`);
}


handleObject(user); //username is aniket and price is 199
handleObject({
    username:"spiderman",
    price:299
});//username is spiderman and price is 299

const Arr=[10,20,30,40,50]
function returnsecondElement(getArray){
    return getArray[1]
}
console.log(returnsecondElement(Arr)); //20
