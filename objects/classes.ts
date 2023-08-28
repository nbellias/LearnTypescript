/*
    Simple class
*/
class Employee {
    id: number | undefined;
    name: string | undefined;

    printObject(): void {
        console.log(`employee.name = ${this.name}, employee.id = ${this.id}`);
    }
}

let employee = new Employee();
employee.printObject();
let employee2 = new Employee();
employee2.id = 2;
employee2.name = "employee2";
employee2.printObject();

/*
    Class that implements an interface
*/
interface IPrint {
    print(): void;
}
function printClass(a: IPrint) {
    a.print();
}
class ClassA implements IPrint {
    print(): void {
        console.log(`ClassA.print() called.`)
    };
}
class ClassB implements IPrint {
    print(): void {
        console.log(`ClassB.print() called.`)
    };
}
printClass(new ClassA());
printClass(new ClassB());
// Compare (duck typing)
class ClassC {
    print(): void {
        console.log(`ClassC.print() called.`)
    };
}
let classC = new ClassC();
printClass(classC);

/*
    Class with constructor
*/
class ClassWithConstructor {
    id: number;
    constructor(id: number) { //don't have to use other name for the parameter like _id
        this.id = id;
    }
}
let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = 
    ${JSON.stringify(classWithConstructor)}`);
classWithConstructor = {"id":21}
console.log(`classWithConstructor.id =
    ${classWithConstructor.id}`);

/*
    Class modifiers
    By default all members are public
*/
class ClassWithPrivateProperty {
    private id: number;
    constructor(id: number) {
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
    constructor(public id: number, private name: string) {
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
    readonly name: string;
    constructor(_name: string) {
        // The only way to set a readonly property is in the constructor
        this.name = _name;
    }
    setNameValue(_name: string) {
        // The following line will not compile because name is readonly
        //this.name = _name;
    }
}

/*
    Accessors GET, SET
*/
class ClassWithAccessors {
    private _id: number = 0;
    get id(): number {
        console.log(`get id property`);
        return this._id;
    }
    set id(value: number) {
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
        console.log(`2`)
    }
}
StaticFunction.printTwo();

class StaticProperty {
    static count = 0;
    updateCount() {
        StaticProperty.count++;
    }
}
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
namespace FirstNameSpace {
    export class NameSpaceClass {}
    class NotExported {}
}
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// The following line will not compile because NotExported is not exported
//let notExported = new FirstNameSpace.NotExported();
