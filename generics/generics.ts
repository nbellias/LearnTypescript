function printGeneric<T>(value: T) {
    console.log(`typeof T is : ${typeof value}`);
    console.log(`value is : ${value}`)
}

printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });

printGeneric<string>("test");
// The following line will not compile because 1 is not a string
//printGeneric<string>(1);

function usingTwoTypes<A, B> ( first: A, second: B) {
    console.log(`typeof A is : ${typeof first}`);
    console.log(`value is : ${first}`)
    console.log(`typeof B is : ${typeof second}`);
    console.log(`value is : ${second}`)
}

usingTwoTypes<number, string> ( 1, "test");
usingTwoTypes(1, "test");
usingTwoTypes<boolean, boolean>(true, false);
usingTwoTypes("first", "second");

/*
    Constraining the type of T
*/
class Concatenator<T extends Array<string> | Array<number>> {
    public concatenateArray(items: T): string {
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
// The following lines will not compile because boolean is not a string or number
// concatResult = concator.concatenateArray([
//     true, false, true
// ]);

interface IPrintId {
    id: number;
    print(): void;
}
interface IPrintName {
    name: string;
    print(): void;
}
function useT<T extends IPrintId | IPrintName>(item: T)
    : void {
    item.print();
    // The following lines will not compile because id and name are not common
    //item.id = 1;  // error : id is not common
    //item.name = "test"; // error : name is not common
}

/*
    Generic constraints
*/
function printProperty<T, K extends keyof T>
    (object: T, key: K) {
    let propertyValue = object[key];
    console.log(`object[${key}] = ${propertyValue}`);
}
let myObj = {
    id: 1,
    name: "myName",
    print() { console.log(`${this.id}`) }
}
printProperty(myObj, "id");
printProperty(myObj, "name");
// The following line will not compile because surname is not a property of myObj
//printProperty(myObj, "surname");


// Generic interfaces

interface IPrint {
    print(): void;
}
interface ILogInterface<T extends IPrint> {
    logToConsole(iPrintObj: T): void;
}
class LogClass<T extends IPrint>
    implements ILogInterface<T>
{
    logToConsole(iPrintObj: T): void {
        iPrintObj.print();
    }
}
let printObject2: IPrint = {
    print() { console.log(`printObject2.print() called`) }
}
let logClass = new LogClass();
logClass.logToConsole(printObject2);

class ClassAlpha { }
class ClassBeta { }
// function createClassInstance<T>
//     (arg1: T): T {
//     return new arg1(); // error
// }
function createClassInstance<T>
    (arg1: { new(): T }): T {
    return new arg1();
}
let classAlphaInstance = createClassInstance(ClassAlpha);