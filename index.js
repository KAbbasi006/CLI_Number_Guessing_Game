#!  /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        message: "Please guess a number between 1 - 10:  ",
        type: "number",
        name: "userGuessedNumber",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a right number.");
}
else {
    console.log("You guessed a wrong number.");
}
