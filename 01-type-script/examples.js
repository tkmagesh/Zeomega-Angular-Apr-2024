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
