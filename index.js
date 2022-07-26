// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
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
    inquirer.prompt(questions).then(function (data) {
        const readMe = generateMarkdown(data);
        writeToFile("README.md", readMe);
    });
}

// Function call to initialize app
init();