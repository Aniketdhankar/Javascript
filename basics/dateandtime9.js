let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());//full date in string format
console.log(mydate.toDateString());//full date without time
console.log(mydate.toISOString());//date in ISO format 2025-10-19T10:40:02.825Z
console.log(mydate.toUTCString());//date in UTC format  Sun, 19 Oct 2025 10:40:02 GMT

console.log(typeof mydate); //object

let specificDate=new Date('2023-12-25T10:30:00Z')
let specificDate1=new Date(2023,0,23) //mponth is 0 based index so 0 means january
console.log(specificDate1); 
console.log(specificDate1.toDateString()); //Mon Jan 23 2023

//syntax new Date(year,month,day,hours,minutes,seconds,milliseconds)
let specificDate2=new Date(2024,5,15,10,30,0,0) //15 june 2024 10:30:00
console.log(specificDate2.toDateString()); //Sat Jun 15 2024

let specificDate3=new Date("2023-01-14") //here month is 1 based index
console.log(specificDate3.toDateString()); //Sat Jan 14 2023
console.log(specificDate3.toLocaleString()); //2023-01-14T00:00:00.000Z



//-----------------------------Time Stamps---------------------------------------------
// The timestamp is the number of milliseconds that have elapsed since January 1, 1970 00:00:00 UTC.
let timestamp=Date.now()
console.log(timestamp); //current timestamp in milliseconds
console.log(specificDate3.getTime()); //timestamp of specific date in milliseconds 
//now we can compare two dates using timestamps
console.log(Math.floor(Date.now()/1000)) //current timestamp in seconds


let date1=new Date()
console.log(date1.getMonth()+1);//0 based index so we add 1 to get current month
console.log(date1.getDate());
console.log(date1.getFullYear());
console.log(date1.getHours());  


console.log(`today is this year ${date1.getFullYear()} and month is ${date1.getMonth()+1} and date is ${date1.getDate()}`); //this is how it used to be used in real world applications


date1.toLocaleString('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
}) // Saturday, June 15, 2024

