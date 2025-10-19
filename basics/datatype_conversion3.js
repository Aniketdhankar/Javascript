let score="85"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score) //explicit conversion
console.log(typeof valueInNumber)

// but 

let a="33abc"
let valueNumber=Number(a) //explicit conversion
console.log(typeof valueNumber)
console.log(valueNumber) //NaN this is  a probleme  nan stands for not a number

let b=null
let value=Number(b) //explicit conversion
console.log(typeof value)
console.log(value) /// gives 0

let c=undefined
let valueC=Number(c) //explicit conversion
console.log(typeof valueC)
console.log(valueC) /// gives NaN

let d=1
let valueD=Boolean(d) //explicit conversion
console.log(typeof valueD)
console.log(valueD) /// true

let e="" //empty string
let valueE=Boolean(e) //explicit conversion
console.log(typeof valueE)
console.log(valueE) 

/// false

let f="Aniket"
let valueF=Boolean(f) //explicit conversion
console.log(typeof valueF)
console.log(valueF) /// true


