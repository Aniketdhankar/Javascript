const myCoding =[
    { language: "JavaScript",
        fileName: "script.js",
        purpose: "Web Development"
    },
    {
        language: "Python",
        fileName: "script.py",
        purpose: "Data Science"
    },
    {
        language: "Java",
        fileName: "script.java",
        purpose: "Android Development"
    }   
]

//imp for database operations
myCoding.forEach( (item)=>{
    console.log(`I use ${item.language} in file ${item.fileName} for ${item.purpose}`);
})