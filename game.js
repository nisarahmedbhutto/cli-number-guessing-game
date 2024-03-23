#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number 1-6",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you have selected the correct number");
}
else {
    console.log("you have selected the wrong number! please try again");
}
