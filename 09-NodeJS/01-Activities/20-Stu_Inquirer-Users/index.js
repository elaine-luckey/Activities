const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'checkbox',
        name: 'language',
        message: 'What languages do you know?',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
        type: 'list',
        name: 'communication',
        message: 'What is your preferred method of communication?',
        choices: ['email', 'phone', 'telekinesis'],
    },
]).then((data) => {
    console.log(data);
});