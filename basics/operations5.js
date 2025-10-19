let value=3
let negvalue=-value

console.log("value=",value)
console.log("negvalue=",negvalue)


console.log(2+2); //perform mathematical operations like addition subtraction multiplication division
console.log(10-2);
console.log(4*2);
console.log(16/2);
console.log(5%2); //modulus operator gives remainder

let str1="hello"
let str2=" aniket"
let str3=str1+str2 //string concatenation
console.log(str3)


//----------------------------------------------------
console.log("1"+1)
console.log("1"+2+2)
console.log(1+2+"3")

//this all hapeens because of guidelines in js called as type coercion
//in addition operator if one operand is string then other is converted to string and concatenation happens
//in other mathematical operators both operands are converted to number type if they are not number already
//to understand better see below example

/*
Step-by-Step Evaluation

JavaScript sees "1" + 2 first.

"1" is a string, 2 is a number.

When a string is added to a number, JS converts the number to a string → "1" + "2" = "12"

Next: "12" + 2

"12" is a string, 2 is a number → again JS converts number to string → "12" + "2" = "122"
*/



//-------------------------------------------------

/*

🧩 Step 1: Recall Operator Precedence

In JavaScript, the precedence order for these operators is:

*, /, % → multiplication, division, modulo (same level, left-to-right)

+, - → addition and subtraction

So we evaluate 4 * 5 % 3 before adding 3.

🧩 Step 2: Evaluate 4 * 5
4 * 5 = 20

🧩 Step 3: Evaluate 20 % 3 (modulo)

% gives the remainder of division:

20 ÷ 3 = 6 remainder 2


So:

20 % 3 = 2

🧩 Step 4: Add 3 + 2
3 + 2 = 5

✅ Final Answer
5

*/



console.log(+true)  //why 1 because true is converted to number 1
//console.log(true+)//will throw error
console.log(+"")//why 0 because empty string is converted to number 0
console.log(+"34abc")//NaN not a number because "34abc" cannot be converted to number