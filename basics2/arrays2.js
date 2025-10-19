const marvel_heros=["Ironman","Spiderman","Thor","Hulk"]
const dc_heros=["Superman","Batman","Flash","Aquaman"]

marvel_heros.push(dc_heros) //adds entire dc_heros array as a single element at the end of marvel_heros array
console.log(marvel_heros) //['Ironman', 'Spiderman', 'Thor', 'Hulk', Array(4)]
//length will be 5 now

const all_heros =marvel_heros.concat(dc_heros) //creates a new array by merging marvel_heros and dc_heros arrays
console.log(marvel_heros); //['Ironman', 'Spiderman', 'Thor', 'Hulk']
console.log(marvel_heros.length) 
console.log(all_heros); //['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Superman', 'Batman', 'Flash', 'Aquaman']


const all_new_heros=[...marvel_heros,...dc_heros] //creates a new array by merging marvel_heros and dc_heros arrays using spread operator
console.log(all_new_heros); //['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Superman', 'Batman', 'Flash', 'Aquaman']


//spread we merge more than two arrays also which is not possible using concat method


const another_array=[1,2,3,[4,5,6],7,[8,9,[4,5]]]
console.log(another_array.flat(Infinity)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5] flattens the array completely if it was 1 it would have flattened only one level [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 4, 5 ] ]


console.log(Array.isArray("anaiket"))//false
console.log(Array.from("aniket")) //['a', 'n', 'i', 'k', 'e', 't'] converts string to array

let score1=100
let score2=200
let score3=300

const scoresArray=Array.of(score1,score2,score3) //creates an array from the given arguments
console.log(scoresArray) //[100, 200, 300]