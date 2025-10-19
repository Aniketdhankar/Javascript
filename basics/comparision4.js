//comparison in javascript are done using comparison operators
// == equal to operator
// === strict equal to operator
// != not equal to operator
// !== strict not equal to operator
// > greater than operator
// < less than operator
// >= greater than or equal to operator
// <= less than or equal to operator

console.log(3=="3") //true because value is same but type is different
console.log(3==="3") //false because value is same but type is different

//make your 


console.log(null>0) //false
console.log(null==0) //false
console.log(null==0) //false
console.log(null>=0) //true

//when we use relational operators like greater than or less than null is converted to number 0 but when we use equality operator null is not converted to any other type, this is not valid for Strings they will be autommatocally converted to number in both relational and equality operators; except strict equality operator
/*
Relational Operators

These operators compare two values and return a boolean (true or false).

Operator	Meaning
>	Greater than
<	Less than
>=	Greater than or equal to
<=	Less than or equal to



2️⃣ Equality Operators

These operators check if two values are equal or not.

Operator	Meaning
==	Equal to
!=	Not equal to
===	Strict equal to
!==	Strict not equal to
*/

console.log("2"===2) //false

/*

uality Operators and Strings in JavaScript

There are two equality operators in JavaScript:

Operator	Type Conversion?	Meaning
==	✅ Yes (type coercion)	Checks value equality, converts types if needed
===	❌ No	Checks value and type equality, no conversion
*/
console.log("2"==2) //true