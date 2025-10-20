const course={
    name:"JavaScript",
    price:10000,
    courseInstructor:"aniket"
}

//this is just a normal way of accessing object properties
// console.log(course.name); //JavaScript
// console.log(course.price); //10000
// console.log(course.courseInstructor); //aniket

//this is destructuring way of accessing object properties
const {courseInstructor}=course
console.log(courseInstructor); //aniket

const {name:courseName}=course
console.log(courseName); //JavaScript

const {price:coursePrice}=course    
console.log(coursePrice); //10000


//JSON -> JavaScript Object Notation
//{
 //   "name":"JavaScript",
 //   "price":10000,
 //   "courseInstructor":"aniket"
//}

//API -> Application Programming Interface
//it is a way to communicate between two applications
//like frontend and backend

//api in array form
[
    {},
    {},
    {}
]

