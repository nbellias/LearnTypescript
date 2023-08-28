"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module1_1 = require("./module1");
let mod1 = new module1_1.Module1();
mod1.print();
const module1_2 = require("./module1");
let myRenamedMod = new module1_2.Module1();
myRenamedMod.print();
const module1_3 = require("./module1");
let mc1 = new module1_3.MultipleClass1();
let mc2 = new module1_3.MultipleClass2();
// Module namespaces
const MultipleExports = require("./module1");
let meMc1 = new MultipleExports.MultipleClass1();
let meMc2 = new MultipleExports.MultipleClass2();
const module1_4 = require("./module1");
let modDefault = (0, module1_4.default)(1, 2);
let modNonDefault = new module1_4.ModuleNonDefaultExport();
