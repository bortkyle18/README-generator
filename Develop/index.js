// Packages Needed For This Application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// End Of Packages Needed For This Application



// User Input Questions
const questions = [
    // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username. (Required)',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a GitHub username!");
            }
            return true;
        }
    },

    // GitHub Repository
    {
        type: 'input',
        name: 'repository',
        message: 'Enter the name of your repository on GitHub. (Required)',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter the name of your repository on GitHub!");
            }
            return true;
        } 
    },

    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your email!");
                return false;
            }
        } 
    },

    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the title of your project.");
                return false;
            }
        }
    },
    
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a description of your project!");
                return false;
            }
        }
    },

    // Project How To Install
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how users would install your project using step-by-step instructions. (Optional)',
    },

    // Usage Of Project
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project instructions and examples of it in use. (Optional)',
    },

    // Select License
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license for your project.',
        choices: ['MIT', 'ISC', 'BSD 3-Clause','apache-2.0']
    },

    // Contributing To Project
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how users can contribute to your project. (Optional)',
    },

    // Test For Project
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for project, and explain how to run tests. (Optional)',
    },
];
// End Of User Input Questions



// Function To Write README File
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Creating file.");
        
    });
}
// End Of Function To Write README File



// Function To Initialize App
function init() {inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    });}
// End Of Function To Initialize App



// Run App!
init();
