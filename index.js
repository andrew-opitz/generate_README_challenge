// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
const project = {
  references: []
};
function askQuestions() {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'Please enter your project title.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter your project description.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select license from list',
      choices: ['MIT', 'Apacha 2.0', 'GPL']

    }
    ])
}











// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(__dirname, '/dist/', fileName),data)
}

// TODO: Create a function to initialize app
function init() {
  askQuestions().then(answers => {
    return generateMarkdown(answers)
  }).then(data => {
    writeToFile('README.md', data)
  })
}

// Function call to initialize app
init();
