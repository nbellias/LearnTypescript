"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayedPromise = void 0;
function delayedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`2. calling resolve()`);
            resolve();
        }, 1000);
    });
}
exports.delayedPromise = delayedPromise;
function callDelayedPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`1. before calling delayedPromise`);
        yield delayedPromise();
        console.log(`3. after calling delayedPromise`);
    });
}
callDelayedPromise();
function errorPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`2. calling reject()`);
            reject("promise rejected");
        }, 1000);
    });
}
function callErrorPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`1. calling errorPromise()`);
            yield errorPromise();
        }
        catch (error) {
            console.log(`3. await threw : ${error}`);
        }
    });
}
callErrorPromise();
function promiseWithValues() {
    return new Promise((resolve, reject) => {
        resolve(["first", "second"]);
    });
}
function getValuesFromPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`1. calling promiseWithValues()`);
        let values = yield promiseWithValues();
        for (let value of values) {
            console.log(`value : ${value}`);
        }
    });
}
getValuesFromPromise();
