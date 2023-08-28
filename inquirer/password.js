"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = require("inquirer");
const requireLetterAndNumber = (value) => {
    if (/\w/.test(value) && /\d/.test(value)) {
        return true;
    }
    return 'Password need to have at least a letter and a number';
};
inquirer_1.default
    .prompt([
    {
        type: 'password',
        message: 'Enter a password',
        name: 'password1',
        validate: requireLetterAndNumber,
    },
    {
        type: 'password',
        message: 'Enter a masked password',
        name: 'password2',
        mask: '*',
        validate: requireLetterAndNumber,
    },
])
    .then((answers) => console.log(JSON.stringify(answers, null, '  ')));
