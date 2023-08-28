import inquirer from "inquirer";

inquirer.prompt(
    [
        {
            name: "first_name",
            message: "what is your name ?"
        }
    ]
).then((answers: any) => {
    console.log(`you answered : ${answers.first_name}`)
}).catch((error: any) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
});