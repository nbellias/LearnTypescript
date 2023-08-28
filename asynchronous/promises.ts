import * as fs from "fs";

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

function promiseReturningString(throwError: boolean)
    : Promise<string> {
    return new Promise<string>(
        (
            resolve: (outputValue: string) => void,
            reject: (errorCode: number) => void
        ) => {
            if (throwError) {
                reject(101);
            }
            resolve(`resolve with message`);
        }
    )
}
console.log(`1. calling promiseReturningString`)
promiseReturningString(false)
    .then((returnValue: string) => {
        console.log(`2. returnedValue : ${returnValue}`);
    }).catch((errorCode: number) => {
        console.log(`this is not called`);
    });

interface IConnection {
    server: string;
    port: number;
}
interface IError {
    code: number;
    message: string;
}
interface IDataRow {
    id: number;
    name: string;
    surname: string;
}
function complexPromise
    (
        connection: IConnection,
        accessKey: string
    )
    : Promise<IDataRow[]> {
    return new Promise<IDataRow[]>(
        (
            resolve: (results: IDataRow[]) => void,
            reject: (results: IError) => void
        ) => {
            // check the connection properties
            // connect to the database
            // retrieve data, or
            // reject with an error 
        }
    );
}
complexPromise(
    {
        server: "test",
        port: 4200
    },
    "abcd"
).then((rows: IDataRow[]) => {
    // do something with rows
}).catch((error: IError) => {
    // do something with error
});