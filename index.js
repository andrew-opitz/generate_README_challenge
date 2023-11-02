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
      choices: ['MIT', 'Apache 2.0', 'GNU GPL v3']

    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter any installation instructions for your projoect.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter any usage information for your project.'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter the contribution guidelines for your project.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter the test instructions for your project.'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your Github username'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.'
    }
    ])
}











// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(__dirname, '/dist/', fileName),data)
}

// function to initialize app
function init() {
  askQuestions().then(answers => {
    return generateMarkdown(answers)
  }).then(data => {
    writeToFile('README.md', data)
  })
}

// Function call to initialize app
init();
