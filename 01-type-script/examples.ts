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

// Find the number of even & odd numbers
/* 
let evenOddCount = list.reduce((prevResult, no) => no % 2 === 0 ? ({ ...prevResult, even: prevResult.even + 1 }) : ({ ...prevResult, odd: prevResult.odd + 1 }), { even : 0, odd : 0}) 
*/

let evenOddCount = list.reduce(({even, odd}, no) => no % 2 === 0 ? ({ even : even + 1, odd}) : ({ even, odd : odd + 1 }), { even: 0, odd: 0 })

// template strings
let n1 = 10, n2 = 20
// sum of 10 and 20 is 30
let s1 = 'sum of ' + n1 + ' and ' + n2 + ' is ' + (n1 + n2)
// using template strings
let s2 = `sum of ${n1} and ${n2} is ${n1 + n2}`

// for of (iterators)
for (let no of list){
    console.log(`no : ${no}`)
}

// Class
/* 
class Employee {

    // instance attributes
    private _id : number = 0
    public name : string;
    public salary : number; 
   

    // static attributes
    static ModelType : string = 'Employee';

    // accessor methods
    public set id(val : number) {
        console.log('id[setter] triggered')
        if (val < 0){
            throw new Error('Invalid id')
        }
        this._id = id
    }

    public get id() : number {
        console.log('id[getter] triggered')
        return this._id;
    }

    // constructor
    
    constructor(id : number, name : string, salary : number){
        this.id = id;
        this.name = name;
        this.salary = salary; 
    } 
   

    // instance methods
    public Format() : string {
        return `id = ${this.id}, name = ${this.name}, salary = ${this.salary}`
    }

    // static methods
    static IsEmployee(obj : any) {
        return obj instanceof Employee;
    }
} 
*/

class Employee {

    // static attributes
    static ModelType: string = 'Employee';

    // accessor methods
    public set id(val: number) {
        console.log('id[setter] triggered')
        if (val < 0) {
            throw new Error('Invalid id')
        }
        this._id = id
    }

    public get id(): number {
        console.log('id[getter] triggered')
        return this._id;
    }

    // constructor

    constructor(private _id: number, public name: string, public salary: number) {
       
    }


    // instance methods
    public Format(): string {
        return `id = ${this.id}, name = ${this.name}, salary = ${this.salary}`
    }

    // static methods
    static IsEmployee(obj: any) {
        return obj instanceof Employee;
    }
}

let emp = new Employee(100, 'Magesh', 10000)
console.log(emp.Format())


