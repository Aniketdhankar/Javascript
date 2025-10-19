const accountName = "John Doe"
let accountEmail="aniket@gmail.com"
var accountPassword="1234"
accountCity="jaipur"

console.log(accountName)

console.table([accountName,accountEmail,accountPassword,accountCity])


//why we do not use var anymore
//1. var is function scoped
//2. var can be re-declared and updated
//3. var declarations are hoisted

//why we use let and const
//1. let and const are block scoped
//2. let can be updated but not re-declared
//3. const cannot be updated or re-declared
//4. both let and const declarations are hoisted but not initialized

//accountCity="jaipur" this will also work but it is not a good practice to declare variables without var, let or const

let accountState;
//this is undefined
console.log(accountState)