"use strict";
/*
    Optional parameters.
    Note that any optional parameters must be listed last
    in the parameter list of the function definition.
    You can have as many optional parameters as you like,
    as long as non-optional parameters precede the optional
    parameters.
*/
function concatValues(a, b) {
    console.log(`a + b = ${a + b}`);
}
concatValues("first", "second");
concatValues("third");
/*
    Default parameters.
*/
function concatWithDefault(a, b = "default") {
    console.log(`a + b = ${a + b}`);
}
concatWithDefault("first", "second");
concatWithDefault("third");
/*
    Rest parameters.
    Rest parameters are treated as a boundless number of
    optional parameters.
*/
function testArguments(...args) {
    for (let i in args) {
        console.log(`args[${i}] = ${args[i]}`);
    }
}
testArguments("1");
testArguments(10, 20);
testArguments(1, 2, 3, 4, 5);
testArguments("first", "second", "third");
/*
    Callback functions.
    A callback function is a function that is passed in as an argument
    to another function, and is then generally invoked within the original
    function.
    In other words, we are calling a function and telling it to go and do
    what it needs to do, and when it is finished, to call the function
    that we have supplied.
*/
// Function signatures as parameters.
let myCallback = (text) => {
    console.log(`myCallback called with ${text}`);
};
function withCallbackArg(message, callbackFn) {
    console.log(`withCallback called, message : ${message}`);
    callbackFn(`${message} from withCallback"`);
}
withCallbackArg("initial text", myCallback);
function add(a, b) {
    return a + b;
}
add("first", "second");
add(1, 2);
function withLiteral(input) {
    console.log(`called with : ${input}`);
}
withLiteral("one");
withLiteral(20);
// The following will cause a compile error.
//withLiteral("four");
