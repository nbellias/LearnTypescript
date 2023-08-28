import * as fs from "fs";

fs.readFile("./test1.txt", (err, data) => {
    if (err) {
        console.log(`an error occurred : ${err}`);
    } else {
        console.log(`test1.txt contents : ${data}`);
        fs.readFile("./test2.txt", (err, data) => {
            if (err) {
                console.log(`an error occurred : ${err}`);
            } else {
                console.log(`test2.txt contents : ${data}`);
                fs.readFile("./test3.txt", (err, data) => {
                    if (err) {
                        console.log(`an error occurred : ${err}`);
                    } else {
                        console.log(`test3.txt contents : ${data}`);
                    }
                })
            }
        })
    }
});