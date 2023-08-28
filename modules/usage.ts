import { Module1 } from "./module1";
let mod1 = new Module1();
mod1.print();

import { Module1 as MyMod1 } from "./module1";
let myRenamedMod = new MyMod1();
myRenamedMod.print();

import { MultipleClass1, MultipleClass2 } 
    from "./module1";
let mc1 = new MultipleClass1();
let mc2 = new MultipleClass2();

// Module namespaces
import * as MultipleExports from "./module1";
let meMc1 = new MultipleExports.MultipleClass1();
let meMc2 = new MultipleExports.MultipleClass2();

import DefaultAdd, { ModuleNonDefaultExport } 
    from "./module1";
let modDefault = DefaultAdd(1, 2);    
let modNonDefault = new ModuleNonDefaultExport();