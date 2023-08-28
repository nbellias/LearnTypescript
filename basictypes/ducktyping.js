"use strict";
/*
Duck typing is a type system used in dynamic languages for
classifying an object by its behavior rather than its type.
According to duck typing, an object's suitability is determined
by the presence of certain methods and properties, rather than
the type of the object itself.
*/
var nameIdObject = { name: "myName", id: 1, print() { } };
nameIdObject = { id: 2, name: "anotherName", print() { } };
//Activate the following line and check the compiler error
//nameIdObject = { id: 3, name: "thirdName" };
var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } };
//The following line is OK
obj1 = obj2;
//Activate the following line and check the compiler error
//obj2 = obj1;
