const myArray=[1,2,3,4,5,true,"aniket"] //array can hold multiple data types in javascript
//different ways to create an array
const array1=new Array(1,2,3,4,5)// creates an array using the Array constructor
const array2=Array(6,7,8,9,10)// creates an array using the Array constructor without new keyword

//arrray have dynamic size in javascript


//whenever you do copy opeation on array it creates shallow copy
//shallow copy means both arrays point to same memory location if we modify one array other array will also be modified
//deepa copy means both arrays point to different memory location if we modify one array other array will not be modified
const array3=myArray //shallow copy
array3[0]=100 //modifying array3 will also modify myArray
console.log(myArray) //[100, 2, 3, 4, 5, true, 'aniket', 'new element']

//arrays also gives prototype methods
console.log(myArray.length) //8
console.log(myArray.indexOf(3)) //2
console.log(myArray.includes("aniket")) //true
myArray.push("new element") //adds element at the end
console.log(myArray) //[100, 2, 3, 4, 5, true, 'aniket', 'new element']
myArray.pop() //removes element from the end
console.log(myArray) //[100, 2, 3, 4, 5, true, 'aniket']
myArray.unshift(9) //adds element at the start
console.log(myArray) //[9, 100, 2, 3, 4, 5, true, 'aniket'] //time consuming operation
myArray.shift() //removes element from the start
console.log(myArray) //[100, 2, 3, 4, 5, true, 'aniket'] //time consuming operation
//-------------------------

const newArray=myArray.join()
console.log(newArray) 
console.log(typeof newArray) //string vonverts array to string--------------------


console.log(myArray.includes(100)) //true


//----------------------------slice method---------------------------------------
//slice method is used to extract a portion of an array without modifying the original array
//syntax array.slice(startIndex,endIndex)
console.log(myArray.slice(1,4)) //[2, 3, 4] //returns a new array from index 1 to 3
console.log(myArray.includes(100)) //true





//---------------------------Splice method---------------------------------------
//splice method is used to add or remove elements from an array

//startIndex: index at which to start changing the array
//deleteCount: number of elements to remove from the array
//item1,item2,...: elements to add to the array



//syntax array.splice(startIndex,deleteCount,item1,item2,...)

//it modifies the original array and returns the removed elements as a new array




console.log(myArray.splice(1,4)) //removes 4 elements from index 1
console.log(myArray) //[100, 5, true, 'aniket']  //last range is inculded
console.log(myArray) //[100, 5, true, 'aniket'] //orginal array is modified from orginal value [100, 2, 3, 4, 5, true, 'aniket']  to [100, true, 'aniket']



