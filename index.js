
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [ 
      {
        type: 'input',
        name: 'title',
        message: 'Enter project title',
        validate: title => {
            if (title) {
            return true;
            } else {
            console.log('Please enter the title of your project');
            return false;
            }
    }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username',
        validate: username => {
            if (username) {
            return true;
            } else {
            console.log('Please enter your GitHub username!');
            return false;
            }
    }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add a description to your project',
        validate: description => {
            if (description) {
            return true;
            } else {
            console.log('Need description to continue');
            return false;
            }
    }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions to install your project.',
        validate: installation => {
            if (installation) {
            return true;
            } else {
            console.log('Enter instructions for installation');
            return false;
            }
    }
    },  
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your project.',
        validate: usage => {
            if (usage) {
            return true;
            } else {
            console.log('Enter instructions on using project');
            return false;
            }
    }
    },  
    {
        type: 'list',
        name: 'license',
        message: 'Select type of license',
        choices:[ 'Apache 2.0','MIT','GPL 3.0','None'],
        validate: license => {
            if (license) {
            return true;
            } else {
            console.log('Select a license');
            return false;
            }
    }
    },  
    {
         type: 'input',
         name: 'email',
         message: 'Enter Email',
         validate: email => {
            if (email) {
            return true;
            } else {
            console.log('Enter Email');
            return false;
            }
    }
    },

  
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      console.log("Readme Generated");
    });
  }

function init() {inquirer.prompt(questions)
    .then(readmeData => {
        writeToFile("./README.md", generateMarkdown(readmeData))
    })}

init();
