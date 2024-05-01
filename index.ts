#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.blue("\n \t\tProject-06 Word Counter"));
console.log("=".repeat(60));

let answers = await inquirer.prompt(
    [
        {
            name:"sentence",
            type:"input",
            message:"Enter a scentence: ",
        }
    ]
);

let words = answers.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold("Scentence words: "));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(60));