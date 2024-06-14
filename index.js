import inquirer from 'inquirer';
import fs from 'fs';
import { Triangle, Circle, Square, Pentagon } from './lib/shapes.js';

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:',
    validate: input => input.length <= 3 || 'Text must be up to three characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
    validate: input => /^#?[0-9A-Fa-f]{3,6}$|^[a-zA-Z]+$/.test(input) || 'Please enter a valid color keyword or hexadecimal.',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Triangle', 'Circle', 'Square', 'Pentagon'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
    validate: input => /^#?[0-9A-Fa-f]{3,6}$|^[a-zA-Z]+$/.test(input) || 'Please enter a valid color keyword or hexadecimal.',
  },
];

inquirer.prompt(questions).then(answers => {
  let shape;
  switch (answers.shape) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
    case 'Pentagon':
      shape = new Pentagon();
      break;
  }
  shape.setColor(answers.shapeColor);

  const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`;

  fs.writeFile('logo.svg', svgContent, err => {
    if (err) {
      console.error('Error writing to file', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
});