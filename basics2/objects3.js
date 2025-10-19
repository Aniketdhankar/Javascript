//objects can be declared using object literal syntax or the Object constructor
//object literal syntax
const mySymbol=Symbol("key1") //symbol as key

let obj1={
  name: "Ironman",
  age: 45,
  //mySymbol: "value1" //this will not work as expected because it will be treated as string key 
  [mySymbol]:"value1", //correct way to use symbol as key
  isAvenger: true,
  "friends":"aniket",
  lastfought:["Thanos","Captain America"]
}   
console.log(obj1)  //obj one is the refence to the object stored in heap memory
console.log(obj1.name)//Ironman
//or
console.log(obj1["name"])//Ironman  ----------why is this important beacuse we cannot acces "friends" using dot notation because it is a string
console.log(obj1["friends"])//aniket
console.log(obj1[mySymbol])//value1

obj1.age=50 //modifying age property
//Object.freeze(obj1) //freezing the object to prevent further modifications
//obj1.age=60 //this will not work as object is frozen
//console.log(obj1.age) //50

obj1.greeting=function(){
    console.log(`Hello I am Aniket ${this.name}`)
}


console.log(obj1.greeting) //function refernce is returned not the function itself
console.log(obj1.greeting()) //fucntion is invoked






//Object constructor  is singleton design pattern      
let obj2=new Object()
obj2.name="Spiderman"
obj2.age=30
obj2.isAvenger=false
console.log(obj2)


const obj3={
    email:"spiderman@marvel.com",
    fullname:{
        username:"Peter Parker",
        lastname:"Parker"
    }//nested object do not use = use : this instead for nseted
}
console.log(obj3.fullname) // { username: 'Peter Parker', lastname: 'Parker' }
console.log(obj3.fullname.username) //Peter Parker

//console.log(obj3.fullname?.username) // ?optional chaining operator is used to prevent error if fullname is undefined matlab ho bhi sakta hai aur nahi bhi taki error na aaye


const obj4={1:"one",2:"two",3:"three"} //numeric keys
const obj5={4:"four",5:"five",6:"six"}
const obj6={7:"seven",8:"eight",9:"nine"}
//const obj6={...obj4,...obj5} //merging objects using spread operator
//console.log(obj6) //{ '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }
const obj7=Object.assign({},obj4,obj5,obj6) //merging objects using Object.assign
console.log(obj7) //{ '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }
//syntax Object.assign(target,source1,source2,...)

//---what if assign(obj4,obj5,obj6)--- it will modify obj4 and return it as merged object that is the target is modified but if we give{} as target then obj4 will not be modified as a new object






//datbase usally give array of objects
const users=[
    {
        userid:1,
        username:"aniket"
        ,email:"aniket@example.com"
    },
    {
        userid:2
        ,username:"spiderman"
        ,email:"spiderman@example.com"
    },
    {
        userid:3
        ,username:"ironman"
        ,email:"ironman@example.com"
    }
]

console.log(Object.keys(obj1)) //returns an array of keys of the object
console.log(Object.values(obj1)) //returns an array of values of the object
console.log(Object.entries(obj1)) //returns an array of key value pairs of the object as nested arrays




console.log(obj1.hasOwnProperty("name")) //true
console.log(obj1.hasOwnProperty("random")) //false
