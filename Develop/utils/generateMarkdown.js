// Function That Returns A License Badge Based On License answers
// If There Is No License, An Empty String Is Returned
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return `[![MIT](https://img.shields.io/badge/license-MIT-green?style=plastic)]`
  }
  else if (license === 'ISC'){
    return `[![ISC](https://img.shields.io/badge/license-ISC-green?style=plastic)]`
  }
  else if (license === 'BSD 3-Clause'){
    return `[![BSD 3-Clause](https://img.shields.io/badge/license-BSD%203--Clause-green?style=plastic)]`
  }
  else if (license === "apache-2.0") {
    return `[![apache-2.0](https://img.shields.io/badge/license-apache--2.0-green?style=plastic)]`
  }
  else {
    return ""
  }
};
// End of Function That Returns A License Badge



// Function That Returns The License Link
// If There Is No License, An Empty String Is Returned
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return `(https://choosealicense.com/licenses/mit/)`
  }
  else if (license === 'ISC'){
    return `(https://choosealicense.com/licenses/isc/)`
  }
  else if (license === 'BSD 3-Clause'){
    return `(https://choosealicense.com/licenses/bsd-3-clause/)`
  }
  else if (license === "apache-2.0") {
    return `(https://choosealicense.com/licenses/apache-2.0/)`
  }
  else {
    return ""
  }
};
// End Of Function That Returns The License Link



// Function That Returns The README License Section
// If There Is No License, An Empty String Is Returned
function renderLicenseSection(license) {
  if (license) {
    return `## License`
  }
  else {
    return ""
  }
};
// End Of Function That Returns The README License Section



// Function To Generate Markdown For README
function generateMarkdown(answers) {
  const { 
          title, license, description, installation, usage, 
          username, repository, contributing, tests, email
        } = answers

  return `
# ${title}

${renderLicenseBadge(license)}${renderLicenseLink(license)}

## Description

  ${description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Links](#links)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
## Installation

  ${installation}

## Usage

  ${usage}

## Links

  * Application URL: (https://${username}.github.io/${repository}/)
  * Github Repository URL: (https://github.com/${username}/${repository})

${renderLicenseSection(license)}

  ${renderLicenseBadge(license)}${renderLicenseLink(license)}

## Contributions

  ${contributing}

## Tests

  ${tests}

## Questions

  [![GitHub](https://img.shields.io/badge/My%20GitHub-Click%20Here!-blueviolet?style=plastic&logo=GitHub)](https://github.com/${username}) 

  Feel free to reach me at ${email} with any question regarding this project!
  `;
}
// End Of Function To Generate Markdown For README



// Eport README Markdown Function
module.exports = generateMarkdown;