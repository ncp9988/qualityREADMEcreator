// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description 
  ${data.description}

  ### Table of Contents
  ### ------------------------
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributor](#contributor)
  * [Testing](#testing)
  * [Github](#github)
  * [License](#license)
  * 
  * 
  #### Installation
  ${data.install}

  ### Usage 
  ${data.usage}

  ### Contributor
  ${data.guide}

  #### Testing
  ${data.test}

  #### GitHub
  [Developer Profile](https://github.com/${data.github})

  #### Email
  <a>href="mailto:${data.email}"</a>

  #### License

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)




`;
}

module.exports = generateMarkdown;

