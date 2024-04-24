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

// Object Destructuring
let product = {
    id : 100,
    name : 'Pen',
    cost : 10
}

// the variable names must match the attribute names
/* 
let { id, cost } = product
console.log(id, cost) 
*/

// if the variable names are different from the attribute names
let { id : pid, cost : pcost} = product
console.log(pid, pcost)

// Rest Operator (objects)
let { id, ...p_attrs} = product
console.log(p_attrs)

// Spread Operator (objects)
let productWithCategory = { ...product, category : 'stationary'}
console.log(productWithCategory)

// default arguments (functions)
console.log('// default arguments (functions)')
function addDefualts(x : number = 10, y : number = 20) : number {
    return x + y
}
console.log(addDefualts())
console.log(addDefualts(100))
console.log(addDefualts(undefined, 200))
console.log(addDefualts(100,200))

// arrow functions
console.log('// arrow functions')
/* 
1. function statement
function add(x,y){
    return x + y
}
2. function expression
let add = function(x,y){
    return x + y
}

3. arrow function
let add = (x,y) => {
    return x + y
}
*/

let arrowAdd = (x,y) => x + y
console.log(arrowAdd(100,200))

// Array methods (forEach, map, reduce, filter)
let list = [3, 1, 4, 2, 5]

// forEach
console.log('// (Array) forEach')
list.forEach(n => console.log('value :', n))

// filter
console.log('// (Array) filter')
let evenNos = list.filter(n => n % 2 === 0)
console.log('evenNos :', evenNos)

// map
console.log('// (Array) map')
let doubleNos = list.map(n => n * 2)
console.log('doubleNos :', doubleNos)

// reduce
console.log('// (Array) reduce [sum]')
let total = list.reduce((prevResult, val) => {
    let currResult = prevResult + val;
    console.log(`prevResult : ${prevResult}, val = ${val}, currResult : ${currResult}`)
    return currResult
})
console.log('total :', total)

console.log('// (Array) reduce [sum v2.0]')
let total2 = list.reduce((prevResult, val) => {
    let currResult = prevResult + val;
    console.log(`prevResult : ${prevResult}, val = ${val}, currResult : ${currResult}`)
    return currResult
},0)
console.log('total :', total2)

console.log('// (Array) reduce [min]')
let minValue = list.reduce((prevResult, val) => prevResult < val ? prevResult : val)
console.log('min :', minValue)