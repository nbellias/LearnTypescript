export class Module1 {
    print(): void {
        localPrint(`Module1.print() called`);
    }
}

function localPrint(text: string) {
    console.log(`localPrint: ${text}`);
}

export class MultipleClass1 {}
export class MultipleClass2 {}

export default function DefaultAdd(
    a: number, b: number) {
    return a + b;
}
export class ModuleNonDefaultExport { }
