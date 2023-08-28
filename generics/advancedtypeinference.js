"use strict";
let ab = {
    a: 1,
    b: "test"
};
let allOptional = {
    a: 351,
    b: "Nikos"
};
console.log(`allOptional.a = ${allOptional.a}`);
console.log(`allOptional.b = ${allOptional.b}`);
let readonlyVar = {
    a: 1,
    b: "test"
};
let pickAbObject = {
    a: 1,
    b: "test"
};
let recordedCdVar = {
    c: "test",
    d: 1
};
console.log(`recordedCdVar.c = ${recordedCdVar.c}`);
console.log(`recordedCdVar.d = ${recordedCdVar.d}`);
function logNumberOrString(input) {
    console.log(`logNumberOrString : ${input}`);
}
logNumberOrString(1);
logNumberOrString("test");
logNumberOrString("boolean does not extend number");
function getTupleStringAbc(tupleValue) {
    let [...tupleDestructured] = tupleValue;
    let returnString = "|";
    for (let value of tupleDestructured) {
        returnString += `${value}|`;
    }
    return returnString;
}
let keyA = getTupleStringAbc([1]);
console.log(`keyA = ${keyA}`);
let keyAb = getTupleStringAbc([1, "test"]);
console.log(`keyAb = ${keyAb}`);
let keyAbc = getTupleStringAbc([1, "test", true]);
console.log(`keyAbc = ${keyAbc}`);
function compareValues(input, compareTo) {
    // do comparison
}
compareValues(new Date(), new Date());
compareValues(1, new Date());
compareValues(1, 2);
compareValues("test", new Date());
compareValues("test", 1);
compareValues("test", "test");
function testInferFromPropertyType(arg) { }
testInferFromPropertyType("test");
testInferFromPropertyType(1);
function testInferredFromFnParam(arg) { }
testInferredFromFnParam(1);
testInferredFromFnParam("test");
function testInferredFromReturnType(arg) { }
testInferredFromReturnType(1);
testInferredFromReturnType(false);
function testInferredFromArray(args) { }
testInferredFromArray("test");
testInferredFromArray(1);
let boolValue = true;
let stringValue = "test";
let numValue = 1;
