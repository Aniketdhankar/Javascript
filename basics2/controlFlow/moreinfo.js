const coding = ["js", "python", "java", "c++"]

const values =coding.forEach( (item) => {
    return item
})
console.log(values); // uotput is undefined because forEach does not return anything it just executes the callback function for each element of the array
//similarly lets try for console.log inside forEach
coding.forEach( (item) => {
    console.log(item);
})//everthing in printed but in the end it will return undefined because forEach does not return anything


const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter( (nums) =>num>4)
console.log(newNums); //[5,6,7,8,9,10] filter returns a new array with elements that pass the test implemented by the provided function

const Mynums2=myNums.filter( (nums) =>{
    num>4
})

console.log(Mynums2);// output will be null because there is no return statement in the callback function so it returns undefined for each element and hence the final output is null
//but when you use arrow function () => expression it implicitly returns the expression value
//even you do not give return statement in arrow function if it is single line expression it will return the value of that expression
//this is beacuase arrow function with single line expression has implicit return 
//the reason why it does not work with curly braces is that when you use curly braces it is treated as a block of code and not an expression so you need to explicitly use return statement to return a value from the block of code
//more info

/*
Excellent question 👏 — you’ve understood 90% perfectly!
Let’s break down that **last line** and your follow-up about normal functions step-by-step.

---

### 🔹 1. The “curly braces” rule in arrow functions

In JavaScript, **curly braces `{}`** always create a **block**, not an expression.
When you write an arrow function like this 👇

```js
const add = (a, b) => { a + b };
```

* `{ a + b }` is treated as a **code block**, not an expression.
* Since the block has **no `return` statement**, the function returns **`undefined`**.

✅ Correct way if you use `{}`:

```js
const add = (a, b) => { 
  return a + b; 
};
```

---

### 🔹 2. The “implicit return” rule

If your arrow function has **no curly braces**, then it’s treated as a **single expression**,
and that expression’s value is **implicitly returned**.

```js
const add = (a, b) => a + b; // Implicit return
console.log(add(2, 3)); // 5
```

So, the braces determine whether the function body is an **expression (→ returns automatically)** or a **block (→ needs `return`)**.

---

### 🔹 3. Does this apply to normal functions?

No ❌ — **normal functions never have implicit return**.
You must **always** use the `return` keyword if you want to send back a value.

```js
function add(a, b) {
  a + b; // returns undefined
}

function addCorrect(a, b) {
  return a + b; // returns 5
}
```

---

### 🔹 Summary (in 4 quick lines)

| Type            | With `{}`             | Without `{}`          | Implicit Return? |
| --------------- | --------------------- | --------------------- | ---------------- |
| Arrow function  | Needs `return`        | Returns automatically | ✅ Yes            |
| Normal function | Always needs `return` | N/A                   | ❌ No             |

---

*/

const newNums3=[]

myNums.forEach( (num) =>{
    if(num>4){
        newNums3.push(num)
    }
})
console.log(newNums3); //[5,6,7,8,9,10] here we are using forEach to iterate through each element and pushing the elements greater than 4 to newNums3 array

//-------------------------------------------------------------

const books=[
    {title:"Book One",author:"AuthorONE",rating:4.5},
    {title:"Book Two",author:"Author Two",rating:3.8},
    {title:"Book Three",author:"AuthorONE",rating:4.2},
    {title:"Book Four",author:"Author Four",rating:2.9},
    {title:"Book Five",author:"Author Five",rating:4.7}
]

const highRatedBooks=books.filter( (book) => book.rating>4.0) //book is the object here 
console.log(highRatedBooks);//it will return array of objects with rating greater than 4.0
//[
//  { title: 'Book One', author: 'AuthorONE', rating: 4.5 },
//  { title: 'Book Three', author: 'AuthorONE', rating: 4.2 },
//  { title: 'Book Five', author: 'Author Five', rating: 4.7 }
//]
//-------------------------------------------------------------

const Authorname=books.filter(  (book)=> book.author==="AuthorONE")
console.log(Authorname);
