// Imported inquirer package and file system package and shape modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shape')
const SVG = require('./lib/svg');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'userText',
            message: 'Please enter 3 characters to display in your logo:',
            validate: function (value) {
                if (value.length === 3) {
                    return true;
                } else {
                    return 'Please enter 3 characters';
                }
            }
        },

        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter the color or hexadecimal for your text:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape for your logo from the following:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the color or hexadecimal for your shape:'
        }
    ])

    .then((response) => {
        console.log(response);

        let userShape;
        if (response.shape.toLowerCase() === 'circle') {
            userShape = new Circle();
        } else if (response.shape.toLowerCase() === 'square') {
            userShape = new Square();
        } else if (response.shape.toLowerCase() === 'triangle') {
            userShape = new Triangle();
        }

        userShape.setColor(response.shapeColor);

        const Svg = new SVG();

        Svg.setText(response.userText, response.textColor);
        Svg.setShape(userShape);
        fs.writeFileSync('logo.svg', Svg.render());

    });
