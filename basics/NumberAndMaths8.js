const score = 85

const balance =new Number(100) 
console.log(balance)

console.log(typeof score) //number
console.log(typeof balance) //object


//some built in methods of number
console.log(score.toString()) //converts number to string
console.log(typeof score.toString()) //string
console.log(score.toFixed(2)) //converts number to string with 2 decimal places
console.log(typeof score.toFixed(2)) //string

console.log(score.toString().length)

const num1=23.4567
console.log(num1.toFixed(3)) //23.457 rounds to 3 decimal places
console.log(num1.toPrecision(4)) //23.46 rounds to 4 significant digits

const num2= 123456789.123456789
console.log(num2.toPrecision(3)) //1.23e+8 scientific notation with 3 significant digits

const zeros=10000000
console.log(zeros.toLocaleString('en-IN')) //this will format number according to indian number system 1,00,00,000



//-----------------------------maths-----------------------------------------------------------------------

console.log(Math)
console.log(Math.PI) //3.141592653589793
console.log(Math.E) //2.718281828459045

const negativeNum=-45
console.log(Math.abs(negativeNum)) //45 absolute value
console.log(Math.round(4.6)) //5 rounds to nearest integer
console.log(Math.floor(4.9)) //4 rounds down
console.log(Math.ceil(4.1)) //5 rounds up
console.log(Math.sqrt(64)) //8 square root
console.log(Math.pow(2,3)) //8 2 raised to the power 3

console.log(Math.min(3,1,4,2,-5,0)) //-5 minimum value
console.log(Math.max(3,1,4,2,-5,0)) //4 maximum value 




console.log(Math.random()) //random number between 0 and 1
console.log(Math.floor(Math.random()*10)+1) //random number between 1 and 10


const min =10
const max =20
// imp will be used very frequently to generate random number between a range------------------------------------
console.log(Math.floor(Math.random()*(max-min+1))+min)







