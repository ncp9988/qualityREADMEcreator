// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your project Description (Required):',
            // validate: desInput => {
            //     if (desInput) {
            //         return true;
            //     } else {
            //         console.log('Please enter your Description!');
            //         return false;
            //     }
            // }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter your installation instructions (Required):',
            // validate: installInput => {
            //     if (installInput) {
            //         return true;
            //     } else {
            //         console.log('Please enter your installation instructions!');
            //         return false;
            //     }
            // }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter your usage information (Required):',
            // validate: usageInput => {
            //     if (usageInput) {
            //         return true;
            //     } else {
            //         console.log('Please enter your usage information!');
            //         return false;
            //     }
            // }
        },
        {
            type: 'input',
            name: 'guide',
            message: 'Enter your contribution guidelines (Required):',
            // validate: guideInput => {
            //     if (guideInput) {
            //         return true;
            //     } else {
            //         console.log('Please enter your contribution guidelines!');
            //         return false;
            //     }
            // }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter your test instructions (Required):',
            // validate: testInput => {
            //     if (testInput) {
            //         return true;
            //     } else {
            //         console.log('Please enter your test instructions!');
            //         return false;
            //     }
            // }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github name(Required):',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter your github name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email(Required):',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name:'license',
            message: 'Choose license for your project',
            choices:['MIT','ISC','APACHE2.0','GPL3.0','None']


        }

        
        
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    
}
questions()
.then(readmeData => {
    const readmeFile = generateMarkdown(readmeData);
    fs.writeFile('./README.md',readmeFile, err => {
        if (err) throw err;
      
        console.log('Readme file is created! Check out README.md to see the output!');
      });
})


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
