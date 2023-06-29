// TODO: Include packages needed for this application

const inquirer  = require("inquirer");
const fs=require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input", 
        message:"What is the title of your project",
        name:"title",
    },
    {
        type:"input", 
        message:"What is the description of your project",
        name:"Description",
    },
    {
        type:"input", 
        message:"How do you install your project",
        name:"Installation",
    },
    {
        type:"input", 
        message:"What is the usage information of your project",
        name:"Usage",
    },
    {
        type:"input", 
        message:"What is the contribution guidelines of your project",
        name:"Contribution",
    },
    {
        type:"input", 
        message:"What are the test instructions of your project",
        name:"Test",
    },
    {
        type:"input", 
        message:"What is your Github username?",
        name:"Git",
    },
    {
        type:"input", 
        message:"What is your Email address?",
        name:"Email",
    },

];
inquirer.prompt(questions)
.then(answers=>{
    fs.writeFileSync("readme.md",`
# ${answers.title}
# Table of Contents

* [Description](#description)
* [Questions](#questions)


## Description
${answers.Description}
## Installation Instructions
${answers.Installation}
## Usage Information
${answers.Usage}
## Contribution Guidelines
${answers.Contribution}
## Testing
${answers.Test}
## Questions 
https://github.com/${answers.Git}
Email me at ${answers.Email} with any questions

`)
})


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
