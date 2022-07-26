// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
const inquirer = require("inquirer"); // this was needed as it was not defined below
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe the installation process."
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage of the project."
    },
    {
        type: "input",
        name: "contributing",
        message: "Please describe the contribution process."
    },
    {
        type: "input",
        name: "tests",
        message: "Please describe the tests."
    },
    {
        type: "input",
        name: "questions",
        message: "Please describe any questions."
    },
    {
        type: "input",
        name: "author",
        message: "Please enter your name."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email."
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license.",
        choices: ["MIT", "APACHE", "BSD", "None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => { // arrow func needed vs func format inquirer.prompt(questions) is the func that takes in array of questions
              // was not defined 
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();