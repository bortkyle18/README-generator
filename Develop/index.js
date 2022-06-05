// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// End of Packages needed for this application



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
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter your email!");
            }
            return true;
        } 
    },

    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project. (Required)',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter the title of your project.");
            }
            return true;
        }
    },
    
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project. (Required)',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a description of your project!");
            }
            return true;
        }
    },

    // Project How To Install
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how users would install your project using step-by-step instructions. (Optional)',
    },

    // Usage of project
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project instructions and examples of it in use. (Optional)',
    },

    // Select license
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license for your project.',
        choices: ['apache-2.0', 'BSD 3-Clause "New" or "Revised"' ,'GNU General Public License v3.0', 'MIT']
    },

    // Contributing to project
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how users can contribute to your project. (Optional)',
    },

    // Test for project
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for project, and explain how to run tests. (Optional)',
    },
];
// End of User Input Questions




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}




// TODO: Create a function to initialize app
function init() {}




// Function call to initialize app
init();
