const arrayFunction = (...args: any[]) => {
    for (let i in args) {
        if(args[i] instanceof Object) {
            console.log(`args[${i}] = ${JSON.stringify(args[i])}`);
            continue; 
        }
        console.log(`args[${i}] = ${args[i]}`);
    }
}

arrayFunction("first", "second", "third", 1, 2, 3, 4, 5, new Date(), { name: "test" });