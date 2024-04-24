var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Examples
var i = 100;
function add(x, y) {
    return x + y;
}
console.log(add(100, 200));
// Variable Declaration
// let
var s = "Qui do cupidatat voluptate duis cillum fugiat nisi laborum do labore proident.";
for (var idx = 0; idx < 10; idx++) {
}
// const
var pi = 3.14;
// pi = 2 // will throw a compilation error
// Array
var nos = [10, 20, 30, 40];
// Array destructuring
var x = nos[0], y = nos[1];
// Rest Operator (array)
var x1 = nos[0], y1 = nos[1], z = nos.slice(2);
console.log(x1, y1, z);
// Spread Operator (array)
var newNos = __spreadArray(__spreadArray([], nos, true), [100, 200, 300], false);
console.log('newNos :', newNos);
// Rest & Spread operator in functions
function addNos() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = 0;
    for (var idx = 0; idx < args.length; idx++) {
        result += args[idx];
    }
    return result;
}
console.log("// Rest & Spread operator in functions");
console.log(addNos(10));
console.log(addNos(10, 20));
console.log(addNos(10, 20, 30, 40, 50));
var values = [3, 1, 4, 2, 5];
// using the spread operator for arguments
console.log(addNos.apply(void 0, values));
// Object Destructuring
var product = {
    id: 100,
    name: 'Pen',
    cost: 10
};
// the variable names must match the attribute names
/*
let { id, cost } = product
console.log(id, cost)
*/
// if the variable names are different from the attribute names
var pid = product.id, pcost = product.cost;
console.log(pid, pcost);
// Rest Operator (objects)
var id = product.id, p_attrs = __rest(product, ["id"]);
console.log(p_attrs);
// Spread Operator (objects)
var productWithCategory = __assign(__assign({}, product), { category: 'stationary' });
console.log(productWithCategory);
// default arguments (functions)
console.log('// default arguments (functions)');
function addDefualts(x, y) {
    if (x === void 0) { x = 10; }
    if (y === void 0) { y = 20; }
    return x + y;
}
console.log(addDefualts());
console.log(addDefualts(100));
console.log(addDefualts(undefined, 200));
console.log(addDefualts(100, 200));
// arrow functions
console.log('// arrow functions');
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
var arrowAdd = function (x, y) { return x + y; };
console.log(arrowAdd(100, 200));
// Array methods (forEach, map, reduce, filter)
var list = [3, 1, 4, 2, 5];
// forEach
console.log('// (Array) forEach');
list.forEach(function (n) { return console.log('value :', n); });
// filter
console.log('// (Array) filter');
var evenNos = list.filter(function (n) { return n % 2 === 0; });
console.log('evenNos :', evenNos);
// map
console.log('// (Array) map');
var doubleNos = list.map(function (n) { return n * 2; });
console.log('doubleNos :', doubleNos);
// reduce
console.log('// (Array) reduce [sum]');
var total = list.reduce(function (prevResult, val) {
    var currResult = prevResult + val;
    console.log("prevResult : ".concat(prevResult, ", val = ").concat(val, ", currResult : ").concat(currResult));
    return currResult;
});
console.log('total :', total);
console.log('// (Array) reduce [sum v2.0]');
var total2 = list.reduce(function (prevResult, val) {
    var currResult = prevResult + val;
    console.log("prevResult : ".concat(prevResult, ", val = ").concat(val, ", currResult : ").concat(currResult));
    return currResult;
}, 0);
console.log('total :', total2);
console.log('// (Array) reduce [min]');
var minValue = list.reduce(function (prevResult, val) { return prevResult < val ? prevResult : val; });
console.log('min :', minValue);
// Find the number of even & odd numbers
/*
let evenOddCount = list.reduce((prevResult, no) => no % 2 === 0 ? ({ ...prevResult, even: prevResult.even + 1 }) : ({ ...prevResult, odd: prevResult.odd + 1 }), { even : 0, odd : 0})
*/
var evenOddCount = list.reduce(function (_a, no) {
    var even = _a.even, odd = _a.odd;
    return no % 2 === 0 ? ({ even: even + 1, odd: odd }) : ({ even: even, odd: odd + 1 });
}, { even: 0, odd: 0 });
// template strings
var n1 = 10, n2 = 20;
// sum of 10 and 20 is 30
var s1 = 'sum of ' + n1 + ' and ' + n2 + ' is ' + (n1 + n2);
// using template strings
var s2 = "sum of ".concat(n1, " and ").concat(n2, " is ").concat(n1 + n2);
// for of (iterators)
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var no = list_1[_i];
    console.log("no : ".concat(no));
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
var Employee = /** @class */ (function () {
    // constructor
    function Employee(_id, name, salary) {
        this._id = _id;
        this.name = name;
        this.salary = salary;
    }
    Object.defineProperty(Employee.prototype, "id", {
        get: function () {
            console.log('id[getter] triggered');
            return this._id;
        },
        // accessor methods
        set: function (val) {
            console.log('id[setter] triggered');
            if (val < 0) {
                throw new Error('Invalid id');
            }
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    // instance methods
    Employee.prototype.Format = function () {
        return "id = ".concat(this.id, ", name = ").concat(this.name, ", salary = ").concat(this.salary);
    };
    // static methods
    Employee.IsEmployee = function (obj) {
        return obj instanceof Employee;
    };
    // static attributes
    Employee.ModelType = 'Employee';
    return Employee;
}());
/*
let emp = new Employee(100, 'Magesh', 10000)
console.log(emp.Format())
*/
// class Inheritance
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(id, name, salary, benefits) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.benefits = benefits;
        return _this;
    }
    // overriding the base class method
    FullTimeEmployee.prototype.Format = function () {
        return "".concat(_super.prototype.Format.call(this), ", benefits = ").concat(this.benefits);
    };
    return FullTimeEmployee;
}(Employee));
var fte = new FullTimeEmployee(200, 'Suresh', 20000, 'health insurance');
console.log(fte.Format());
function applyDiscount(p, discount) {
    p.cost = p.cost * ((100 - discount) / 100);
}
var anyObj = {
    id: 100,
    name: 'any name',
    cost: 10,
    category: 'stationary'
};
applyDiscount(anyObj, 10);
console.log(anyObj);
// enums
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Blue"] = "BLUE";
    Colors["Green"] = "GREEN";
})(Colors || (Colors = {}));
console.log("Red = ".concat(Colors.Red, ", Blue = ").concat(Colors.Blue, ", Green = ").concat(Colors.Green));
