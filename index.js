const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'What letters will you include? Up to 3',
        name: 'letters'
    },
    {
        type: 'input',
        message: 'What color will the text be in hexadecimals?',
        name: 'text-color'
    },
    {
        type: 'list',
        message: 'What shape will it be?',
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color is the shape in hexadecimals?',
        name: 'shape-color'
    }
])
.then((response) => 
    promptsValid(response) == true
        ? console.log("SVG file created!")
        : console.log("Please provide valid responses."));

function promptsValid(inputs) {
    var checks = 0;
    
}