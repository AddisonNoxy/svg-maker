const fs = require('fs');
const inquirer = require('inquirer');
const {Square, Triangle, Circle} = require("./lib/shapes.js");

inquirer.prompt([
    {
        type: 'input',
        message: 'What letters will you include? Up to 3',
        name: 'letters'
    },
    {
        type: 'input',
        message: 'What color will the text be?',
        name: 'textcolor'
    },
    {
        type: 'list',
        message: 'What shape will it be?',
        name: 'shape',
        choices: ['triangle', 'square', 'circle']
    },
    {
        type: 'input',
        message: 'What color is the shape?',
        name: 'shapecolor'
    }
])
.then((response) => 
    promptsValid(response) == true
        ? createFile(response.shape, response.letters, response.textcolor, response.shapecolor)
        : console.log("Please provide valid responses."));

function promptsValid(inputs) {
    var checks = 0;

    if (inputs.letters.length <= 3) {
        checks++;
    } else {
        return false;
    }

    let letters = /^[A-Za-z]+$/;

    if (inputs.textcolor.match(letters)) {
        checks++
    } else {
        return false;
    }

    if (inputs.shapecolor.match(letters)) {
        checks++
    } else {
        return false;
    }

    return true;
    
}

function createFile(shape, text, textColor, shapeColor) {
    switch (shape) {
        case "triangle":
            var newShape = new Triangle(300, 300, "white");
            break;
        case "square":
            var newShape = new Square(300, 300, "white");
            break;
        case "circle":
            var newShape = new Circle(300, 300, "white");
            break;
        default:
            var newShape = new Triangle(300, 300, "white");
    }

    newShape.setText(text);
    newShape.setColor(shapeColor);
    newShape.setTextColor(textColor);

    fs.writeFile('./examples/logo.svg', newShape.fullRender(), function (e) {
        console.log("Generated logo.svg");
    });
}