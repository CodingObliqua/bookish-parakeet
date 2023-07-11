// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information of your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What is the contribution guidelines of your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the test instructions of your project?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "git",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "list",
    message: "Choose a license for your application:",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GNU GPLv3", "ISC"],
  },
];

inquirer.prompt(questions).then((answers) => {
  const licenseBadge = generateLicenseBadge(answers.license);
  const licenseNotice = generateLicenseNotice(answers.license);

  fs.writeFileSync("readme.md", generateReadme(answers, licenseBadge, licenseNotice));
});

// Generate the README content based on the answers
function generateReadme(answers, licenseBadge, licenseNotice) {
  return `# ${answers.title}
# Table of Contents

* [Description](#description)
* [Questions](#questions)
* [installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [License](#license)



## Description
${answers.description}
## Installation Instructions
${answers.installation}
## Usage Information
${answers.usage}
## Contribution Guidelines
${answers.contribution}
## Testing
${answers.test}
## License

${licenseBadge}
${licenseNotice}

## Questions 
https://github.com/${answers.git}
Email me at ${answers.email} with any questions
`;
}

// Generate the license badge based on the selected license
function generateLicenseBadge(license) {
  let licenseBadgeURL = "";

  switch (license) {
    case "MIT":
      licenseBadgeURL =
        "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "Apache 2.0":
      licenseBadgeURL =
        "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;
    case "GNU GPLv3":
      licenseBadgeURL =
        "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case "ISC":
      licenseBadgeURL =
        "https://img.shields.io/badge/License-ISC-blue.svg";
      break;
    default:
      licenseBadgeURL = "";
  }

  return `![License](${licenseBadgeURL})`;
}

// Generate the license notice based on the selected license
function generateLicenseNotice(license) {
  return `This application is covered under the ${license} license.`;
}

// TODO: Create a function to initialize app
function init() {
  // TODO: Add initialization logic if needed
}

// Function call to initialize app
init();