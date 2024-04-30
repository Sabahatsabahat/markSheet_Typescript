#! /usr/bin/env node                                                              // Project MarkSheet console interactive 

import inquirer from "inquirer";
import chalk from "chalk";

async function calculateMarksAndPercentage() {
    // asking for roll number
    let Roll = await inquirer.prompt({
        type: "number",
        name: "num1",
        message: "What is your roll number?"
    });

    let rollNumber: number = Roll.num1;

    if (typeof rollNumber !== "number" || isNaN(rollNumber)) {
        console.log(chalk.red("Invalid roll number. Please enter a valid number."));
        return;
    }

    if (rollNumber !== 104073) {
        console.log(chalk.red("You are not authorized to use this system."));
        return;
    }

    let marks = await inquirer.prompt([
        {
            name: "Typescript",
            type: "number",
            message: "What is your marks in Typescript?"
        },{
            name: "Python",
            type: "number",
            message: "What is your marks in Python?"
        },{
            name: "CSharp",
            type: "number",
            message: "What is your marks in CSharp?"
        }
    ]);

    let TS: number = marks.Typescript;
    let PY: number = marks.Python;
    let C_Sharp: number = marks.CSharp;

    if (isNaN(TS) || isNaN(PY) || isNaN(C_Sharp)) {
        console.log(chalk.red("Marks should be numeric values."));
        return;
    }

    if (TS < 0 || TS > 100 || PY < 0 || PY > 100 || C_Sharp < 0 || C_Sharp > 100) {
        console.log(chalk.red("Marks should be between 0 and 100."));
        return;
    }

    let totalMarks: number = 300;
    let obtainedMarks: number = TS + PY + C_Sharp;
    let percentage: number = (obtainedMarks / totalMarks) * 100;

    let grade: string = "";

    if (percentage >= 90) {
        grade = chalk.green("A+");
    } else if (percentage >= 80) {
        grade = chalk.green("A");
    } else if (percentage >= 70) {
        grade = chalk.yellow("B");
    } else if (percentage >= 60) {
        grade = chalk.yellow("C");
    } else if (percentage >= 50) {
        grade = chalk.yellow("D");
    } else {
        grade = chalk.red("F");
    }

    console.log(chalk.blue("Name: Sabahat"));
    console.log(chalk.blue("Father_name: fayyaz"));
    console.log(chalk.yellow(`Typescript Marks = ${TS} Out Of 100`));
    console.log(chalk.yellow(`Python Marks = ${PY} Out Of 100`));
    console.log(chalk.yellow(`CSharp Marks = ${C_Sharp} Out Of 100`));
    console.log(chalk.green(`Obtain mark ${obtainedMarks} Total Marks = ${totalMarks}`));
    console.log(chalk.green(`Percentage ${percentage.toFixed(2)}%`));
    console.log(chalk.green(`Grade: ${grade}`));
}

calculateMarksAndPercentage();
// _________________________________________________________________________________________End project _________________________________________________________________
