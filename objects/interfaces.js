"use strict";
/*
    Simple interface

    TypeScript will treat interfaces in the same way as it treats
    primitive types, and it will use duck typing to ensure that
    when we say that an object matches an interface, then it really
    does match the interface, with no property left behind.
*/
let emp = { name: "myName", id: 1, printObject() { console.log(`person.name = ${emp.name}, person.id = ${emp.id}`); } };
emp.printObject();
let weakTypeNoOverlap = {
// The following line will not compile because the interface is weak
//description: "a description"
};
function printNameOrValue(obj) {
    if ('id' in obj) {
        console.log(`obj.name : ${obj.name}`);
    }
    if ('descr' in obj) {
        console.log(`obj.value : ${obj.value}`);
    }
}
printNameOrValue({
    id: 1,
    name: "nameValue"
});
printNameOrValue({
    descr: "description",
    value: 2
});
function getProperty(key, value) {
    console.log(`${key} = ${value[key]}`);
}
getProperty("id", { id: 1, name: "firstName" });
getProperty("name", { id: 2, name: "secondName" });
// The following line will not compile because the property is not part of the interface
// getProperty("telephone",
//     { id: 3, name: "thirdName" }
// );
