function throwsError() {
    throw new Error("Function not implemented.");
}

class GlobalCounter {
    count: number = 0;
    increment(): void {
        this.count++;
    }
}

function hasValueNoWhiteSpace(value: string): boolean {
    if (
        value &&
        value.length > 0 &&
        value.trim().length > 0) {
        return true;
    }
    return false;
}

function testUsing<T>
    (values: T[], func: Function) {
    for (let value of values) {
        func.apply(Object, [value]);
    }
}

class MyCallbackClass {
    executeCallback(
        value: string,
        callbackFn: (value: string) => null
    ) {
        console.log(`executeCallback invoking callbackFn`);
        callbackFn(value);
    }
}

class MySpiedClass {
    testMethod() {
        console.log(`testMethod() called`);
        this.testSpiedMethod();
    }
    testSpiedMethod() {
        console.log(`testSpiedMethod called`)
    }
    methodToBeMocked(): number {
        return 5;
    }
}

class MockAsync {
    executeSlowMethod(
        complete: (value: string) => void
    ) {
        setTimeout(() => {
            complete(`completed`);
        }, 1000);
    }
}

class AsyncWithPromise {
    delayedPromise(): Promise<string> {
        return new Promise<string>(
            (resolve: (str: string) => void,
                reject: (str: string) => void) => {
                setTimeout(() => {
                    console.log(`2. returning success`);
                    resolve("success");
                }, 1000)
            }
        )
    }
}

describe("a group of non-forced tests", () => {
    // test('should be false', () => {
    //     expect(false).toBeFalsy();
    // });
    // it("first test", () => {
    //     expect("string value").toEqual("string value")
    // })
    // it("second test", () => {
    //     expect("abc").not.toEqual("def");
    // })
    // it("should match with toBe", () => {
    //     expect(1).toBe(2);
    // });
    // it("should match with toBe using assignment", () => {
    //     let objA = { id: 1 };
    //     let objB = objA;
    //     expect(objA).toBe(objB);
    // });
    // it("should match with toBe", () => {
    //     let objA = { id: 1 };
    //     let objB = { id: 1 };
    //     expect(objA).toBe(objB);
    // });
    // it("should contain a value", () => {
    //     expect("abcde").toContain("cde");
    // });
    // it("should contain an array item", () => {
    //     let objArray = [
    //         { id: 1 },
    //         { id: 2 }
    //     ];
    //     expect(objArray).toContainEqual({ id: 2 });
    // });
    // it("should not contain a value", () => {
    //     expect("abcde").not.toContain("123");
    // });
    // it("should throw an error", () => {
    //     expect(
    //         () => { throwsError() }
    //     ).toThrowError(new Error("this is an error"));
    // });

    // let globalCounter: GlobalCounter;
    // beforeAll(() => {
    //     globalCounter = new GlobalCounter();
    // })
    // beforeEach(() => {
    //     globalCounter.count = 0;
    // });
    // afterEach(() => {
    //     console.log(`globalCounter.count =
    //         ${globalCounter.count}`);
    // });
    // it("should increment", () => {
    //     globalCounter.increment();
    //     expect(globalCounter.count).toEqual(1);
    // });
    // it("should increment twice", () => {
    //     globalCounter.increment();
    //     globalCounter.increment();
    //     expect(globalCounter.count).toEqual(2);
    // });

    // [1, 2, 3, 4, 5]
    //     .forEach((value: number) => {
    //         it(`${value} should be less than 5`, () => {
    //             expect(value).toBeLessThan(5);
    //         })
    //     });

    // testUsing(
    //     [
    //         [undefined, false],
    //         [null, false],
    //         [" ", false],
    //         ["  ", false],
    //         [" a ", true]
    //     ]
    //     , ([value, isValid]: [string, boolean]) => {
    //         it(`"${value}" hasValueNoWhiteSpace ? ${isValid}`,
    //             () => {
    //                 isValid ?
    //                     expect(hasValueNoWhiteSpace(value)).toBeTruthy() :
    //                     expect(hasValueNoWhiteSpace(value)).toBeFalsy();
    //             }
    //         );
    //     });

    // it("should mock callback function", () => {
    //     let mock = jest.fn();
    //     let myCallbackClass = new MyCallbackClass();
    //     myCallbackClass.executeCallback('test', mock);
    //     expect(mock).toHaveBeenCalled();
    // });
    // it("should call testFunction with argument using mock", () => {
    //     let mock = jest.fn();
    //     let myCallbackClass = new MyCallbackClass();
    //     myCallbackClass.executeCallback("argument_1", mock);
    //     expect(mock).toHaveBeenCalledWith("argument_1");
    // });

    // it("date test with mock", () => {
    //     let mock = jest.fn();
    //     mock.mockReturnValue(new Date(2020, 0, 1));
    //     expect(mock()).toEqual(new Date(2020, 0, 1));
    // });

    // it("should call testSpiedMethod", () => {
    //     let mySpiedClass = new MySpiedClass();
    //     const testMethodSpy = jest.spyOn(
    //         mySpiedClass, 'testSpiedMethod');
    //     mySpiedClass.testMethod();
    //     expect(testMethodSpy).toHaveBeenCalled();
    // });
    // it("should call mock of testMethod", () => {
    //     let mySpiedClass = new MySpiedClass();
    //     const testMethodSpy = jest.spyOn(
    //         mySpiedClass, 'testMethod')
    //         .mockImplementation(() => {
    //             console.log(`mockImplementation called`);
    //         });
    //     mySpiedClass.testMethod();
    //     expect(testMethodSpy).toHaveBeenCalled();
    // });
    // it("should return value from mocked", () => {
    //     let mySpiedClass = new MySpiedClass();
    //     jest.spyOn(mySpiedClass, 'methodToBeMocked')
    //         .mockImplementation((): number => {
    //             return 10;
    //         });
    //     expect(mySpiedClass.methodToBeMocked()).toEqual(10);
    // });
    // it("should wait for callback to complete", () => {
    //     let mockAsync = new MockAsync();
    //     console.log(`1. calling executeSlowFunction`);
    //     let returnedValue !: string;
    //     mockAsync.executeSlowMethod((value: string) => {
    //         console.log(`2. complete called`);
    //         returnedValue = value;
    //     });
    //     console.log(`3. checking return value`);
    //     expect(returnedValue).toBe("completed")
    // });
    // let returnedValue!: string;
    // beforeEach((done: jest.DoneCallback) => {
    //     let mockAsync = new MockAsync();
    //     console.log(`1. calling executeSlowFunction`);
    //     mockAsync.executeSlowMethod((value: string) => {
    //         console.log(`2. executeSlowFunction returned`);
    //         returnedValue = value;
    //         done();
    //     })
    // });
    // it("should return value after 1 second", () => {
    //     console.log(`3. checking returnedValue`);
    //     expect(returnedValue).toEqual("completed");
    // })
    it("should wait 1 second for promise to resolve",
        async () => {
        let asyncWithPromise = new AsyncWithPromise();
        console.log(`1. calling delayedPromise`);
        let returnValue = await asyncWithPromise.delayedPromise();
        console.log(`3. after await`);
        expect(returnValue).toEqual("success");
    })
});



// fdescribe("a group of forced tests and a skipped test", () => {
//     test.only("a test only test", () => {
//         expect("nikos").toEqual("nikos")
//     })
//     fit("a fit test", () => {
//         expect("margarita").not.toEqual("marianna");
//     })
//     xit("second test", () => {
//         expect("abc").not.toEqual("def");
//     })
// });
