/*
    Interface Inheritance
*/
interface IBase {
    id: number;
}
interface IDerivedFromBase extends IBase {
    name: string;
}
class IdNameClass implements IDerivedFromBase {
    // Try commenting out the following line and see what happens
    id: number = 0;
    name: string = "nameString";
}

interface IBaseStringOrNumber {
    id: string | number;
}
interface IDerivedFromBaseNumber
    extends IBaseStringOrNumber {
    // narrowing the type
    id: number;
}

interface IMultiple extends
    IDerivedFromBase,
    IDerivedFromBaseNumber 
{
    description: string;
}
let multipleObject: IMultiple = {
    id: 1,
    name: "myName",
    description: "myDescription"
};

/*
    Class Inheritance
*/
class BaseClass implements IBase {
    id: number = 0;
}
class DerivedFromBaseClass
    extends BaseClass
    implements IDerivedFromBase 
{
    name: string = "nameString";
}

interface IFirstInterface {
    id: number;
}
interface ISecondInterface {
    name: string;
}
class MultipleInterfaces implements
    IFirstInterface,
    ISecondInterface
{
    id: number = 0;
    name: string = "nameString";
}

/*
    The super keyword

    If a derived class has a constructor, then this constructor
    must call the base class constructor using the super keyword, 
    or TypeScript will generate an error,
*/
class BaseClassWithCtor {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
}
class DerivedClassWithCtor extends BaseClassWithCtor {
    private name: string;
    constructor(id: number, name: string) {
        // Try commenting out the following line and see what happens
        super(id);
        this.name = name;
    }
}

/*
    Function Overriding
*/
class BaseClassWithFn {
    print(text: string) {
        console.log(`BaseClassWithFn.print() : ${text}`)
    }
}
class DerivedClassFnOverride extends
    BaseClassWithFn {
    print(text: string) {
        console.log(`DerivedClassFnOverride.print(${text})`);
    }
}
let derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");
class DerivedClassFnCallthrough extends
    BaseClassWithFn
{
    print(text: string) {
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
    protected id: number;
    private name: string = "";
    constructor(id: number) {
        this.id = id;
    }
}
class AccessProtected extends BaseClassProtected {
    constructor(id: number) {
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
abstract class EmployeeBase {
    public id: number;
    public name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
class OfficeWorker extends EmployeeBase {
}
class OfficeManager extends OfficeWorker {
    public employees: OfficeWorker[] = [];
}
let joeBlogg = new OfficeWorker(1, "Joe");
let jillBlogg = new OfficeWorker(2, "Jill")
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
abstract class EmployeeBase2 {
    public id: number;
    public name: string;
    abstract doWork(): void;
    constructor(id: number, name: string) {
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
    public employees: OfficeWorker2[] = [];
    manageEmployees() {
        super.doWork();
        for (let employee of this.employees) {
            employee.doWork();
        }
    }
}
let joeBlogg2 = new OfficeWorker2(1, "Joe");
let jillBlogg2 = new OfficeWorker2(2, "Jill")
let jackManager2 = new OfficeManager2(3, "Jack");
jackManager2.employees.push(joeBlogg2);
jackManager2.employees.push(jillBlogg2);
jackManager2.manageEmployees();

/*
    instanceof Operator
*/
class A { }
class BfromA extends A { }
class CfromA extends A { }
class DfromC extends CfromA { }
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
    id: number = 0;
    print() {
        console.log(`this.id = ${this.id}`);
    }
}
interface IBaseInterfaceClassExt
    extends BaseInterfaceClass {
    setId(id: number): void;
}
class ImplementsExt extends BaseInterfaceClass
    implements IBaseInterfaceClassExt {
    setId(id: number): void {
        this.id = id;
    }
}
