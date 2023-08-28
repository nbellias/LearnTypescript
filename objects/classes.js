"use strict";
/*
    Simple class
*/
class Employee {
    printObject() {
        console.log(`employee.name = ${this.name}, employee.id = ${this.id}`);
    }
}
let employee = new Employee();
employee.printObject();
let employee2 = new Employee();
employee2.id = 2;
employee2.name = "employee2";
employee2.printObject();
function printClass(a) {
    a.print();
}
class ClassA {
    print() {
        console.log(`ClassA.print() called.`);
    }
    ;
}
class ClassB {
    print() {
        console.log(`ClassB.print() called.`);
    }
    ;
}
printClass(new ClassA());
printClass(new ClassB());
// Compare (duck typing)
class ClassC {
    print() {
        console.log(`ClassC.print() called.`);
    }
    ;
}
let classC = new ClassC();
printClass(classC);
/*
    Class with constructor
*/
class ClassWithConstructor {
    constructor(id) {
        this.id = id;
    }
}
let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = 
    ${JSON.stringify(classWithConstructor)}`);
classWithConstructor = { "id": 21 };
console.log(`classWithConstructor.id =
    ${classWithConstructor.id}`);
/*
    Class modifiers
    By default all members are public
*/
class ClassWithPrivateProperty {
    constructor(id) {
        this.id = id;
    }
}
let privateAccess = new ClassWithPrivateProperty(10);
// The following line will not compile because id is private
//privateAccess.id = 20;
/*
    Shorthand version with modifiers
*/
class ClassWithCtorMods {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
// The following line will not compile because name is private
//console.log(`myClassMod.name = ${myClassMod.name}`);
/*
    Class with readonly property
*/
class ClassWithReadonly {
    constructor(_name) {
        // The only way to set a readonly property is in the constructor
        this.name = _name;
    }
    setNameValue(_name) {
        // The following line will not compile because name is readonly
        //this.name = _name;
    }
}
/*
    Accessors GET, SET
*/
class ClassWithAccessors {
    constructor() {
        this._id = 0;
    }
    get id() {
        console.log(`get id property`);
        return this._id;
    }
    set id(value) {
        console.log(`set id property`);
        this._id = value;
    }
}
let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);
/*
    Static functions and properties

    There will only be a single instance of this function available
    throughout the code base. When using a static function, we do not
    need to create an instance of the class in order to invoke this function.
*/
class StaticFunction {
    static printTwo() {
        console.log(`2`);
    }
}
StaticFunction.printTwo();
class StaticProperty {
    updateCount() {
        StaticProperty.count++;
    }
}
StaticProperty.count = 0;
let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();
firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
secondInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
/*
    Namespaces

    When working within large projects, and particularly when
    working with large numbers of external libraries, there
    may come a time when two classes or interfaces share the same name.
*/
var FirstNameSpace;
(function (FirstNameSpace) {
    class NameSpaceClass {
    }
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
    class NotExported {
    }
})(FirstNameSpace || (FirstNameSpace = {}));
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// The following line will not compile because NotExported is not exported
//let notExported = new FirstNameSpace.NotExported();
