"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = require("inquirer");
inquirer_1.default.prompt([
    {
        name: "first_name",
        message: "what is your name ?"
    }
]).then((answers) => {
    console.log(`you answered : ${answers.first_name}`);
}).catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});
