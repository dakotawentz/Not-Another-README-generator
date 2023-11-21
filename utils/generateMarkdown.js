// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
    return `#license ${license.title}
    ![GitHub License](https://img.shields.io/github/license/${license.username}/${license.repo})
    `;
  }
  return "";
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
        return `\n* [License](#license)\n`
    }
    return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== "none") {
      return `#license ${license}`;
    } else {
      return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(license) {
  return `# ${license.title}
by ${license.name}
${renderLicenseBadge(license.license)}
## Table of Contents
*[Description](#description)
*[Requirements](#requirements)
*[Usage](#usage)
*[Contact-Me](#contact-me)
*[Contributors](#contributors)
*[Testing](#testing)
${renderLicenseLink(license.license)}
## Description
${license.description}
## Usage
${license.usage}
## Contact-me
* Name - ${license.name}
* Email - ${license.email}
* Github - [${license.creator}](https://github.com/${license.creator}/)
## Contributors
${license.contributors}
## Testing
\`\`\`
${license.test}
\`\`\`
${renderLicenseSection(license.license)}
## Questions
${license.question}
`;
}

module.exports = generateMarkdown;
