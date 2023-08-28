/*
    The 'any' type is the most flexible type in TypeScript.
*/

var item1 = { id: 1, name: "item 1" };
// The following will not compile:
//item1 = { id: 2 };

// But with 'any' the following will compile:
var item2: any = { id: 1, name: "item1" }
item2 = { id: 2 };

// Explicit casting. The following will compile:
var item3 = <any>{ id: 1, name: "item1" }
item3 = { id: 2 };
// Yet another way to cast. The following will compile:
var item4 = { id: 1, name: "item1" } as any;
item4 = { id: 2 };

/*
    The let keyword is used to declare variables.
    It is best practice to use the let keyword to define variables, 
    and not to use the var keyword at all. 
    By using let, we are being more explicit about the intended use 
    of these variables, which will help the compiler to pick up any 
    mistakes in our code where these rules are broken.

    Compare the following:
*/

var index1: number = 0;
if (index1 == 0) {
    var index1: number = 2;
    console.log(`index1 = ${index1}`);
}
console.log(`index1 = ${index1}`);

// the above will print:
// index1 = 2
// index1 = 2

let index2: number = 0;
if (index2 == 0) {
    let index2: number = 2;
    console.log(`index2 = ${index2}`);
}
console.log(`index2 = ${index2}`);

// the above will print:
// index2 = 2
// index2 = 0

/*
    The const keyword is used to declare constants.
    It is best practice to identify constant variables 
    within our code and explicitly mark them as const. 
    The use of const and let clearly indicates to the reader 
    of the code the intent of the variable. 
    A variable marked as const cannot be changed, and a variable 
    declared with let is a block-scoped temporary variable.

    Compare the following:
*/
const constValue = "this should not be changed";
// the following will not compile:
//constValue = "updated";

/*
    Union types are a way to declare a variable that can be of
    different types.
*/
function printObject(obj: string | number) {
    console.log(`obj = ${obj}`);
}
printObject(1);
printObject("string value");

/*
    Type guards are a way to narrow down the type of a variable
    within a conditional block.
*/

// The following will not compile:
// function addWithUnion(
//     arg1: string | number,
//     arg2: string | number
// ) {
//     return arg1 + arg2;
// }

// The following will compile:
function addWithTypeGuard(
    arg1: string | number,
    arg2: string | number
) {
    if (typeof arg1 === "string") {
        // arg 1 is treated as a string
        console.log(`arg1 is of type string`);
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // both are numbers
        console.log(`arg1 and arg2 are numbers`);
        return arg1 + arg2;
    }
    console.log(`default return treat both as strings`)
    return arg1.toString() + arg2.toString();
}

console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(`  1 ,  2  = ${addWithTypeGuard(1, 2)}`);
console.log(`  1 , "2" = ${addWithTypeGuard(1, "2")}`);

/*
    Type aliases are a way to create a new name for a type.
*/
type StringOrNumber = string | number;
function addWithTypeAlias( 
    arg1: StringOrNumber,
    arg2: StringOrNumber
    ) {
    return arg1.toString() + arg2.toString();
}

console.log(` "1", "2" = ${addWithTypeAlias("1", "2")}`);

/*
    Enums are a way to give more friendly names to sets of numeric values.
*/
enum DoorState {
    Open,
    Closed
}
function checkDoorState(state: DoorState) {
    console.log(`enum value is : ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log(`Door is open`);
            break;
        case DoorState.Closed:
            console.log(`Door is closed`);
            break;
    }
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

enum DoorStateSpecificValues {
    Open = 3,
    Closed = 7,
    Unspecified = 256
}

function checkDoorStateSpecificValues(state: DoorStateSpecificValues) {
    console.log(`enum value is : ${state}`);
    switch (state) {
        case DoorStateSpecificValues.Open:
            console.log(`Door is open`);
            break;
        case DoorStateSpecificValues.Closed:
            console.log(`Door is closed`);
            break;
        default:
            console.log(`Door state is unknown`);
            break;
    }
}

enum DoorStateString {
    OPEN = "Open",
    CLOSED = "Closed"
}
console.log(`OPEN = ${DoorStateString.OPEN}`);

// const enums are a way to define an enum that is not compiled to JavaScript as enums.
// const enums have been introduced for performance reasons
const enum DoorStateConst {
    Open = 10,
    Closed = 20
}
console.log(`const Closed = ${DoorStateConst.Open}`);

/*
    Undefined and null are valid values for any type.
    By default, the value of a variable is undefined.
    The null value is a special value that represents the absence of a value.
*/
let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
    console.log(`array[${i}] = ${array[i]}`);
}

for (let i = 0; i < array.length; i++) {
    checkAndPrintElement(array[i]);
}
function checkAndPrintElement(arrElement: string | undefined) {
    if (arrElement === undefined)
        console.log(`invalid array element`);
    else
        console.log(`valid array element : ${arrElement}`);
}

function printValues(a: number | null) {
    console.log(`a = ${a}`);
}
printValues(1);
printValues(null);

/*
    Conditional types are a way to conditionally choose a type based on another type.
    (conditional) ? ( true statement )  :  ( false statement );
*/
const value : number = 10;
const message : string = value > 10 ?
    "value is larger than 10" : "value is 10 or less";
console.log(message);

/*
    Optional chaining is a way to access properties of an object that may not exist.
    Optional chaining has been a much-anticipated feature, and the syntax is a welcome 
    sight for developers who are used to writing long-winded if statements to ensure 
    that code is robust and will not fail unexpectedly.
*/
var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
}

// function printNestedObject(obj) {
//     console.log("obj.nestedProperty.name = "
//         + obj.nestedProperty.name);
// }

function printNestedObject(obj: any) {
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
        console.log(`name = ${obj.nestedProperty.name}`)
    } else {
        console.log(`name not found or undefined`);
    }
}
printNestedObject(objectA);
console.log("calling printNestedObject");
printNestedObject({});
console.log("completed");


function printNestedOptionalChain(obj: any) {
    if (obj?.nestedProperty?.name) {
        console.log(`name = ${obj.nestedProperty.name}`)
    } else {
        console.log(`name not found or undefined`);
    }
}
printNestedOptionalChain(undefined);
printNestedOptionalChain({
    aProperty: "another property"
});
printNestedOptionalChain({
    nestedProperty: {
        name: null
    }
});
printNestedOptionalChain({
    nestedProperty: {
        name: "nestedPropertyName"
    }
});

/*
    Nullish coalescing is a way to provide a default value for a variable if it is null or undefined.
*/
function nullishCheck(a: number | undefined | null) {
    console.log(`a : ${a ?? `undefined or null`}`);
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);

/*
    Null or undefind operands
*/

// The following code will not compile
// function testNullOperands(a: number, b: number | null | undefined) {
//     let addResult = a + b;
// }

function testNullOperands(a: number, b: number | null | undefined) {
    let addResult = a + (b ?? 0);
}

/*
    Definite assignment
*/
//console.log("aValue = " + aValue); // Will not compile in typescript but in javascript is undefined
var aValue = 1;
console.log("aValue = " + aValue);

var globalString!: string; // notice the ! after the variable name
setGlobalString("this string is set");
console.log(`globalString = ${globalString}`); 
function setGlobalString(value: string) {
    globalString = value;
}

/*
    Object type
*/
let structuredObject: object = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
}
function printObjectType(a: object) {
    console.log(`a: ${JSON.stringify(a)}`);
}
printObjectType(structuredObject);
//printObjectType("this is a string"); // will not compile

/*
    Uknown type
    Using the unknown type forces us to make a conscious decision 
    when using these values. In essence, we are letting the compiler 
    know that we know what type this value should be when we actually 
    want to use it. This is why it is seen as a type-safe version of 
    any, as we need to use explicit casting to convert an unknown type 
    into a known type before using it.
*/
let a: any = "test";
let aNumber: number = 2;
aNumber = a;

let u: unknown = "an unknown";
u = 1;
let aNumber2: number;
//aNumber2 = u; // will not compile
aNumber2 = <number>u;

/*
    Never type
    The never type is used to indicate that a function will never return.
    This is useful for functions that throw an error or never return.
*/
function alwaysThrows1() {
    throw new Error("this will always throw");
    return -1; // will not return
}

function alwaysThrows2(): never {
    throw new Error("this will always throw");
    //return -1; // will not compile
}


/*
    Never and switch statements
*/
enum AnEnum {
    FIRST,
    SECOND
}
function getEnumValue(enumValue: AnEnum): string {
    switch (enumValue) {
        case AnEnum.FIRST: return "First Case";
        case AnEnum.SECOND: return "Second Case";
    }
    let returnValue: never = enumValue;
    return returnValue;
}

/*
    Object spread (... inside {})
    Array spread (... inseide [])
*/
let firstObj: object = { id: 1, name: "firstObj" };
let secondObj: object = { ...firstObj };
console.log(`secondObj : ${JSON.stringify(secondObj)}`);

let nameObj: object = { name: "nameObj name" };
let idObj: object = { id: 1 };
let obj3 = { ...nameObj, ...idObj };
console.log(`obj3 = ${JSON.stringify(obj3)}`);

let objPrec1: object = { id: 1, name: "obj1 name" };
let objPrec2: object = { id: 1001, desc: "obj2 description" };
let objPrec3 = { ...objPrec1, ...objPrec2 };
console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 4)}`);

let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];
console.log(`third array = ${thirdArray}`);

let objArray1 = [
    { id: 1, name: "first element" },
]
let objArray2 = [
    { id: 2, name: "second element" }
]
let objArray3 = [
    ...objArray1,
    { id: 3, name: "third element" },
    ...objArray2
]
console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);

/*
    Tuples.
    Tuples are a method of defining a type that has a finite number 
    of unnamed properties, with each property having an associated type. 
    When using a tuple, all of the properties must be provided.
*/
let tuple1: [string, boolean];
tuple1 = ["test", true];
//tuple2 = ["test"]; // will not compile
//tuple3 = ["test", true, 1]; // will not compile

//destructuring
console.log(`tuple1[0] : ${tuple1[0]}`);
console.log(`tuple1[1] : ${tuple1[1]}`);
// another way to destructure
let [tupleString, tupleBoolean] = tuple1;
console.log(`tupleString = ${tupleString}`);
console.log(`tupleBoolean = ${tupleBoolean}`);

// optional tuple elements
let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["test"];
console.log(`tupleOptional[0] : ${tupleOptional[0]}`);
console.log(`tupleOptional[1] : ${tupleOptional[1]}`);
// Tuples and spread syntax
let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];

/*
    Object destructuring.
    n a similar way to tuples, standard objects can be also be destructured.
*/
let complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
}
let { aNum, bStr, cBool } = complexObject;

console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`);

//we can also rename the variable names during the destructuring step (using :)
let { aNum: objId, bStr: objName, cBool: isValid } 
    = complexObject;
console.log(`objId : ${objId}`);
console.log(`objName : ${objName}`);
console.log(`isValid : ${isValid}`);