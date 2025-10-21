//reduce function is used to reduce the array to a single value by applying a function on each element of the array
//syntax array.reduce(callback(accumulator,currentValue),initialValue)

//first it ask value from the intal value after this it takes sum of accumlator and current value and return it as accumlator for next iteration
const myNums=[1,2,3,4,5]

const sum=myNums.reduce( function (acc,curvalue){
    return cuvale+acc
},0)//0 is initial value
console.log(sum); //15

const sum2=myNums.reduce( (acc,curvalue) => curvalue+acc ,0)//0 is initial value
console.log(sum2); //15

const book=[
    {title:"book1",price:200},
    {title:"book2",price:300},
    {title:"book3",price:400},
    {title:"book4",price:500}
]
const totalPrice=book.reduce( (acc,book) => acc+book.price ,0)
console.log(totalPrice); //1400