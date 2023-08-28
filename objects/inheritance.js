"use strict";
class IdNameClass {
    constructor() {
        // Try commenting out the following line and see what happens
        this.id = 0;
        this.name = "nameString";
    }
}
let multipleObject = {
    id: 1,
    name: "myName",
    description: "myDescription"
};
/*
    Class Inheritance
*/
class BaseClass {
    constructor() {
        this.id = 0;
    }
}
class DerivedFromBaseClass extends BaseClass {
    constructor() {
        super(...arguments);
        this.name = "nameString";
    }
}
class MultipleInterfaces {
    constructor() {
        this.id = 0;
        this.name = "nameString";
    }
}
/*
    The super keyword

    If a derived class has a constructor, then this constructor
    must call the base class constructor using the super keyword,
    or TypeScript will generate an error,
*/
class BaseClassWithCtor {
    constructor(id) {
        this.id = id;
    }
}
class DerivedClassWithCtor extends BaseClassWithCtor {
    constructor(id, name) {
        // Try commenting out the following line and see what happens
        super(id);
        this.name = name;
    }
}
/*
    Function Overriding
*/
class BaseClassWithFn {
    print(text) {
        console.log(`BaseClassWithFn.print() : ${text}`);
    }
}
class DerivedClassFnOverride extends BaseClassWithFn {
    print(text) {
        console.log(`DerivedClassFnOverride.print(${text})`);
    }
}
let derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");
class DerivedClassFnCallthrough extends BaseClassWithFn {
    print(text) {
        super.print(`from DerivedClassFncallthrough : ${text}`);
    }
}
let derivedCallthrough = new DerivedClassFnCallthrough();
derivedCallthrough.print("text");
/*
    Protected Members

    If a property is marked as protected, then it is not
    accessible outside of the class itself, similar to the
    behavior of the private keyword.
*/
class BaseClassProtected {
    constructor(id) {
        this.name = "";
        this.id = id;
    }
}
class AccessProtected extends BaseClassProtected {
    constructor(id) {
        super(id);
        console.log(`base.id = ${this.id}`);
        // The following line will not compile because name is private
        //console.log(`base.name = ${this.name}`)
    }
}
let accessProtected = new AccessProtected(1);
// The following line will not compile because id is protected
//accessProtected.id = 1;
// The following line will not compile because name is private
//accessProtected.name = "test";
/*
    Abstract Classes

    Abstract classes are classes that cannot be instantiated,
    but are only intended to be extended. Abstract classes are
    useful when you want to provide a base class for other
    classes to extend and customize, but you don’t want the
    base class itself to be instantiated.
*/
class EmployeeBase {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class OfficeWorker extends EmployeeBase {
}
class OfficeManager extends OfficeWorker {
    constructor() {
        super(...arguments);
        this.employees = [];
    }
}
let joeBlogg = new OfficeWorker(1, "Joe");
let jillBlogg = new OfficeWorker(2, "Jill");
let jackManager = new OfficeManager(3, "Jack");
/*
    Abstract Methods

    Abstract methods are methods that are declared in an
    abstract class, but are not implemented in the abstract
    class. Instead, the methods are implemented in derived
    classes. Abstract methods are useful when you want to
    provide a base method definition, but you want the derived
    classes to implement the method.
*/
class EmployeeBase2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class OfficeWorker2 extends EmployeeBase2 {
    doWork() {
        console.log(`${this.name} : doing work`);
    }
}
class OfficeManager2 extends OfficeWorker2 {
    constructor() {
        super(...arguments);
        this.employees = [];
    }
    manageEmployees() {
        super.doWork();
        for (let employee of this.employees) {
            employee.doWork();
        }
    }
}
let joeBlogg2 = new OfficeWorker2(1, "Joe");
let jillBlogg2 = new OfficeWorker2(2, "Jill");
let jackManager2 = new OfficeManager2(3, "Jack");
jackManager2.employees.push(joeBlogg2);
jackManager2.employees.push(jillBlogg2);
jackManager2.manageEmployees();
/*
    instanceof Operator
*/
class A {
}
class BfromA extends A {
}
class CfromA extends A {
}
class DfromC extends CfromA {
}
console.log(`A instance of A : 
    ${new A() instanceof A}`);
console.log(`BfromA instance of A : 
    ${new BfromA() instanceof A}`);
console.log(`BfromA instance of BfromA : 
    ${new BfromA() instanceof BfromA}`);
console.log(`CfromA instance of BfromA : 
    ${new CfromA() instanceof BfromA}`);
console.log(`DfromC instance of CfromA : 
    ${new DfromC() instanceof CfromA}`);
console.log(`DfromC instance of A : 
    ${new DfromC() instanceof A}`);
/*
    Interfaces extending classes
*/
class BaseInterfaceClass {
    constructor() {
        this.id = 0;
    }
    print() {
        console.log(`this.id = ${this.id}`);
    }
}
class ImplementsExt extends BaseInterfaceClass {
    setId(id) {
        this.id = id;
    }
}
