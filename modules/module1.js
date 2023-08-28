"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleNonDefaultExport = exports.MultipleClass2 = exports.MultipleClass1 = exports.Module1 = void 0;
class Module1 {
    print() {
        localPrint(`Module1.print() called`);
    }
}
exports.Module1 = Module1;
function localPrint(text) {
    console.log(`localPrint: ${text}`);
}
class MultipleClass1 {
}
exports.MultipleClass1 = MultipleClass1;
class MultipleClass2 {
}
exports.MultipleClass2 = MultipleClass2;
function DefaultAdd(a, b) {
    return a + b;
}
exports.default = DefaultAdd;
class ModuleNonDefaultExport {
}
exports.ModuleNonDefaultExport = ModuleNonDefaultExport;
