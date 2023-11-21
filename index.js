// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path")
const octokit = require("./utils/api")

const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "Describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines on how other developers can contribute to your project.",
        name: 'contributors'
    },
    {
        type: 'input',
        message: "Provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'input',
        message: "Are there any questions?",
        name: 'questions'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'none'],
        name: 'license'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((responses) => {
        console.log("Creating README...");
        writeToFile("./README.md", generateMarkdown({...responses}));
    })
    .catch((err) => {
        console.error("Error occured", err);
    })
}

// Function call to initialize app


init();