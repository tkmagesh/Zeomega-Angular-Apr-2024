// Examples
var i : number = 100

function add(x : number, y : number) : number {
    return x + y
}

console.log(add(100, 200))

// Variable Declaration
// let
let s : string = "Qui do cupidatat voluptate duis cillum fugiat nisi laborum do labore proident."
for (let idx = 0; idx < 10; idx++){

}

// const
const pi : number = 3.14
// pi = 2 // will throw a compilation error


// Array
let nos: number[] = [10, 20, 30, 40]

// Array destructuring
let [x,y] = nos

// Rest Operator (array)
let [x1 ,y1 , ...z] = nos 
console.log(x1, y1, z)

// Spread Operator (array)
let newNos : number[] = [ ...nos, 100, 200, 300]
console.log('newNos :', newNos)

// Rest & Spread operator in functions
function addNos(...args) : number { //args is an array with all the argument values passed to the function
    let result : number = 0
    for (let idx = 0; idx < args.length; idx++){
        result += args[idx]
    }
    return result
}
console.log("// Rest & Spread operator in functions")
console.log(addNos(10))
console.log(addNos(10,20))
console.log(addNos(10,20,30,40,50))

let values : number[] = [3,1,4,2,5]
// using the spread operator for arguments
console.log(addNos(...values))


