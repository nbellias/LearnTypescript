// Mapped types with type aliases
interface IAbRequired {
    a: number;
    b: string;
}
let ab: IAbRequired = {
    a: 1,
    b: "test"
}
type WeakInterface<T> = {
    [K in keyof T]?: T[K];
}
let allOptional: WeakInterface<IAbRequired> = {
    a: 351,
    b: "Nikos"
}
console.log(`allOptional.a = ${allOptional.a}`);
console.log(`allOptional.b = ${allOptional.b}`);

// Partial, Readonly, Record, and Pick

/**
 * Make all properties in T optional
 */
type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

/**
 * Make all properties in T readonly
 */
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
let readonlyVar: Readonly<IAbRequired> = 
{
    a: 1, 
    b: "test"
}
// The following line will not compile because readonlyVar is readonly
//readonlyVar.a = 1;

interface IAbc {
    a: number;
    b: string;
    c: boolean
}
type PickAb = Pick<IAbc, "a" | "b">;
let pickAbObject: PickAb = {
    a: 1,
    b: "test"
}

type RecordedCd = Record<"c" | "d", string | number>;
let recordedCdVar: RecordedCd = {
    c: "test",
    d: 1
};
console.log(`recordedCdVar.c = ${recordedCdVar.c}`);
console.log(`recordedCdVar.d = ${recordedCdVar.d}`);

// Conditional types
type NumberOrString<T> = T extends number ? number : string;
function logNumberOrString<T>(input: NumberOrString<T>) {
    console.log(`logNumberOrString : ${input}`);
}
logNumberOrString<number>(1);
logNumberOrString<string>("test");
logNumberOrString<boolean>("boolean does not extend number");
// The following line will not compile because boolean is not a number or string
//logNumberOrString<boolean>(true);

// Conditional type chaining
interface IA {
    a: number;
}
interface IAb {
    a: number;
    b: string;
}
interface IAbc {
    a: number;
    b: string;
    c: boolean;
}
type abc_ab_a<T> = 
    T extends IAbc ? [number, string, boolean] :
    T extends IAb ? [number, string] :
    T extends IA ? [number] :
    never;
function getTupleStringAbc<T>
    (tupleValue: abc_ab_a<T>): string 
{
    let [...tupleDestructured] = tupleValue;
    let returnString = "|";
    for (let value of tupleDestructured) {
        returnString += `${value}|`;
    }
    return returnString;
}
let keyA = getTupleStringAbc<IA>([1]);
console.log(`keyA = ${keyA}`);
let keyAb = getTupleStringAbc<IAb>([1, "test"]);
console.log(`keyAb = ${keyAb}`);
let keyAbc = getTupleStringAbc<IAbc>([1, "test", true]);
console.log(`keyAbc = ${keyAbc}`);

// Distributed conditional types
type dateOrNumberOrString<T> =
    T extends Date ? Date :
    T extends number ? Date | number :
    T extends string ? Date | number | string :
    never;
function compareValues
    <T extends string | number | Date | boolean>
(
    input: T,
    compareTo: dateOrNumberOrString<T>
) {
    // do comparison
}
compareValues(new Date(), new Date());
compareValues(1, new Date());
compareValues(1, 2)
compareValues("test", new Date());
compareValues("test", 1);
compareValues("test", "test");

// Conditional type inference
type inferFromPropertyType<T> =
    T extends { id: infer U } ? U : never;
function testInferFromPropertyType<T>
    (
        arg: inferFromPropertyType<T>
    ) { }
testInferFromPropertyType<{ id: string }>("test");
testInferFromPropertyType<{ id: number }>(1);

// Type inference from function signatures
type inferredFromFnParam<T> =
    T extends (a: infer U) => void ? U : never;
function testInferredFromFnParam<T>(
        arg: inferredFromFnParam<T>
    ) { }
testInferredFromFnParam<(a: number) => void>(1);
testInferredFromFnParam<(a: string) => void>("test");

type inferredFromFnReturnType<T> =
    T extends (a: string) => infer U ? U : never;
function testInferredFromReturnType<T>(
    arg: inferredFromFnReturnType<T>
) { }
testInferredFromReturnType<(a: string) => number>(1);
testInferredFromReturnType<(a: string) => boolean>(false);

// Type inference from arrays
type inferredTypeFromArray<T> = 
    T extends (infer U)[] ? U : never;
function testInferredFromArray<T>
    (args: inferredTypeFromArray<T>) 
{ }
testInferredFromArray<string[]>("test");
testInferredFromArray<number[]>(1);

// Standard conditional types
type ExcludeStringAndNumber = Exclude<
    string | number | boolean,
    string | number>;
let boolValue: ExcludeStringAndNumber = true;

type AnotherStringOrNumber = Extract<
    string | boolean | never,
    string | number>;
let stringValue: StringOrNumber = "test";

type NotNullOrUndef = NonNullable<number | undefined | null>;
let numValue: NotNullOrUndef = 1;