/*const user={
    username:"aniket",
    price:199,
    welcomeMessage: function(){
        return `welcome ${username} to the javascript course`
    }

}
user.welcomeMessage(); //welcome aniket to the javascript course
now here the problems comes in if some changes current contex
*/


const user={
    username:"aniket",
    price:199,
    welcomeMessage: function(){
        return `welcome ${this.username} to the javascript course`
    }

}
user.username="spiderman"
user.welcomeMessage();

//this keyword refers to the current context

console.log(this); //in browser it will return window object in node js it will return empty object {}

//BROWSER ENGINE - global objects are window object



//---------------------------------------this in functions--------------------------------------------------------
function myFunction(){
    let username="aniket"
    console.log(this.aniket); //undefined 
   // console.log(this); //in browser it will return window object in node js it will return some details
}

//this keyword works with object only not in methods


//------------------------------------arrowfunctions

const myArrowFunction=()=>{
    let username="aniket"
    console.log(this.aniket); //undefined 
    //console.log(this); //in browser it will return window object in node js it will return empty object {}  

}


//-----------------ways to declare arrow functions(important----------------------------

const addTwo= (num1,num2) => num1+num2
//or
const addThree=(num1,num2,num3) => (num1+num2+num3)// we use this in react often so learn it properly

//suppose function want to return object
const f = () => { name: "Aniket" };
console.log(f()); // undefined ❌
//correct way
const f2 = () => ({ name: "Aniket" });
console.log(f2()); // { name: 'Aniket' } ✅

const myArr=[2,3,4,5,6]

