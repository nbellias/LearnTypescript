"use strict";
var myBoolean = true;
var myNumber = 1234;
var myStringArray = [`first`, `second`, `third`];
var anotherStringArray = [myNumber.toString(), `5678`];
var concatArrays = myStringArray.concat(anotherStringArray);
myBoolean = myNumber === 456;
myNumber = concatArrays.length;
function calculate(a, b, c) {
    return (a * b) + c;
}
console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`concatArrays = ${concatArrays}`);
console.log(`myNumber = ${myNumber}`);
console.log(`calculate() = ${calculate(3, 2, 1)}`);
//Activate the following line and check the compiler error
//console.log("calculate() = " + calculate("2", "3", "1"));
