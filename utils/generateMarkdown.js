

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
  <a href="mailto:${data.email}"> Please feel free to reach me if you have any questions</a>

  #### License

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)




`;
}

module.exports = generateMarkdown;

