"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
fs.promises.readFile("./test1.txt")
    .then((value) => {
    console.log(`ps test1.txt read : ${value}`);
    return fs.promises.readFile("./test2.txt");
}).then((value) => {
    console.log(`ps test2.txt read : ${value}`);
    return fs.promises.readFile("./test3.txt");
}).then((value) => {
    console.log(`ps test3.txt read : ${value}`);
})
    .catch((error) => {
    console.log(`an error occurred : ${error}`);
});
function promiseReturningString(throwError) {
    return new Promise((resolve, reject) => {
        if (throwError) {
            reject(101);
        }
        resolve(`resolve with message`);
    });
}
console.log(`1. calling promiseReturningString`);
promiseReturningString(false)
    .then((returnValue) => {
    console.log(`2. returnedValue : ${returnValue}`);
}).catch((errorCode) => {
    console.log(`this is not called`);
});
function complexPromise(connection, accessKey) {
    return new Promise((resolve, reject) => {
        // check the connection properties
        // connect to the database
        // retrieve data, or
        // reject with an error 
    });
}
complexPromise({
    server: "test",
    port: 4200
}, "abcd").then((rows) => {
    // do something with rows
}).catch((error) => {
    // do something with error
});
