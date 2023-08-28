"use strict";
function printGeneric(value) {
    console.log(`typeof T is : ${typeof value}`);
    console.log(`value is : ${value}`);
}
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });
printGeneric("test");
// The following line will not compile because 1 is not a string
//printGeneric<string>(1);
function usingTwoTypes(first, second) {
    console.log(`typeof A is : ${typeof first}`);
    console.log(`value is : ${first}`);
    console.log(`typeof B is : ${typeof second}`);
    console.log(`value is : ${second}`);
}
usingTwoTypes(1, "test");
usingTwoTypes(1, "test");
usingTwoTypes(true, false);
usingTwoTypes("first", "second");
/*
    Constraining the type of T
*/
class Concatenator {
    concatenateArray(items) {
        let returnString = "";
        for (let i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }
        return returnString;
    }
}
let concator = new Concatenator();
let concatResult = concator.concatenateArray([
    "first", "second", "third"
]);
console.log(`concatResult = ${concatResult}`);
concatResult = concator.concatenateArray([
    1000, 2000, 3000
]);
console.log(`concatResult = ${concatResult}`);
function useT(item) {
    item.print();
    // The following lines will not compile because id and name are not common
    //item.id = 1;  // error : id is not common
    //item.name = "test"; // error : name is not common
}
/*
    Generic constraints
*/
function printProperty(object, key) {
    let propertyValue = object[key];
    console.log(`object[${key}] = ${propertyValue}`);
}
let myObj = {
    id: 1,
    name: "myName",
    print() { console.log(`${this.id}`); }
};
printProperty(myObj, "id");
printProperty(myObj, "name");
class LogClass {
    logToConsole(iPrintObj) {
        iPrintObj.print();
    }
}
let printObject2 = {
    print() { console.log(`printObject2.print() called`); }
};
let logClass = new LogClass();
logClass.logToConsole(printObject2);
class ClassAlpha {
}
class ClassBeta {
}
// function createClassInstance<T>
//     (arg1: T): T {
//     return new arg1(); // error
// }
function createClassInstance(arg1) {
    return new arg1();
}
let classAlphaInstance = createClassInstance(ClassAlpha);
