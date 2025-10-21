const myNums=[1,2,3,4,5,6,7,8,9,10];

const newNums=Mynumbers.map((nums)=> nums+10)
console.log(newNums); //[11,12,13,14,15,16,17,18,19,20] map returns a new array with the results of calling a provided function on every element in the calling array
//same can aslo be done with filter

//-----------------------------chaining map and filter----------------------------------------

const newNums2=myNums
              .map((nums)=> nums*10)  
              .map((num)=>num+5)
              .filter((num)=>num>50)

console.log(newNums2); //[55,65,75,85,95,105] first each element is multiplied by 10 then 5 is added to each element and then elements greater than 50 are filtered
