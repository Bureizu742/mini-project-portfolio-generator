const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator.js')

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What\'s your location?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What\'s your story?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What\'s your LinkedIn?',
        name: 'linkedIn',
    },
    {
        type: 'input',
        message: 'What\'s your GitHub?',
        name: 'gitHub',
    },
    {
        type: 'rawlist',
        message: 'What license was this created with?',
        name: 'license',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD"
        ]
    }
];

inquirer.prompt(questions).then((answers) => {
    utils.generatePage(answers);
});