const  name ="aniket"
const repoCount =13
console.log(name+" "+repoCount+" repositories");//oudated way

console.log(`\n hello my name is ${name} and my rep count is ${repoCount}`);// this is modern way using template literals

//template literals allow multi line strings
console.log(`
    Hello my name is ${name} and my repo count is ${repoCount}
    this is my second line 
    this is my third line
`);
const gameName =new String('aniket') //this is not recommended way to create string but it is possible and create a string object; 
// this is actually in the form of key value pair where key is index and value is character at that index you can see that in broser console
//we can also do
console.log(gameName)
console.log(typeof gameName)


console.log(gameName[0]) //a
console.log(gameName.length) //7
console.log(gameName.toUpperCase()) //ANIKET
console.log(gameName.charAt(4)) //e
console.log(gameName.indexOf('k')) //2

//but can we do this with normal string the answer is yes because js internally converts string primitive to string object when we try to access properties or methods of string
let channel="codewithaniket"
console.log(channel.length) //15
console.log(channel.toUpperCase()) //CODEWITHANIKET
console.log(channel.charAt(5)) //h
console.log(channel.indexOf('a')) //4
console.log(channel.includes('aniket')) //true
console.log(channel.endsWith('niket')) //true
console.log(channel.startsWith('code')) //true
console.log(channel.slice(0,4)) //code
console.log(channel[6])// its 0 based indexing so 6th index is t
console.log(channel.replace('aniket','kumar')) //codewithkumar
//in concluding we can say we can use many function of java in javascript also because of string object conversion happening internally


const newString3 =gameName.substring(0,4) // start in included and end is excluded ,if you give negative index it will be considered as 0
console.log(newString) //aniket

const newString2=gameName.slice(-1,3) // here -1 means last character and 3 means 3rd index excluded here you can give negative index
console.log(newString2) //an

const newString4 ="      aniket         "
console.log(newString4.trim()) //removes spaces from both sides

// options for trims
console.log(newString4.trimStart()) //removes spaces from start
console.log(newString4.trimEnd()) //removes spaces from end


const url ="https://www.codewith%20aniket.com/" // if someone give a space in  bteween then it will create problem so we can use trim to remove spaces becauuse it be taken as %20 in url
//for this we can use replace method
url.replace('%20','') //https://www.codewithaniket.com/
url.replace('%20','--')// https://www.codewith--aniket.com/
// so the syntax is string.replace(oldsubstring,newsubstring) 

console.log(url.includes('code')) //true

//now lets use split method
//syntax string.split(separator,limit)
//also you can yse only seoarator
const courses ="reactjs,angular,vuejs,html,css,javascript"
const coursesArray=courses.split(',') //splitting based on comma
console.log(coursesArray) //['reactjs', 'angular', 'vuejs', 'html', 'css', 'javascript']

const limitedCoursesArray=courses.split(',',3) //splitting based on comma and limit is 3
console.log(limitedCoursesArray) //['reactjs', 'angular', 'vuejs']


//in java fro strings its str.length() but in js its str.length without parenthesis because its a property not a method
console.log(channel.length) //15