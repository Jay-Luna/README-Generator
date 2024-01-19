// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'Enter a description of this project',
    name: 'description',
},
// {
//     type: 'input',
//     message: 'Enter table of content',
//     name: 'content',
// },
{
    type: 'input',
    message: 'Enter an installation for this project',
    name: 'installation',
},
{
    type: 'input',
    message: 'Enter a usage for this project',
    name: 'usage',
},
{
    type: 'input',
    message: 'Enter a contribution for this project',
    name: 'contribution',
},
{
    type: 'input',
    message: 'Enter if there is a tests',
    name: 'test',
},
{
    type: 'input',
    message: "Enter your GitHub username",
    name: 'username',
},
{
    type: 'input',
    message: "Enter your email",
    name: 'email',
},
{
    type: 'list',
    message: "Select a license",
    choices: ['MIT', 'Apache_2.0', 'Boost_1.0', 'BSD_3--Clause', 'EPL_1.0', 'GPLv3', 'MPL_2.0', 'Unlicense'],
    name: 'license'
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const markdown = generateMarkdown(response);
            console.log(markdown);

            writeToFile('README.md', markdown);
        });
}

// Function call to initialize app
init();
