function generateMarkdown(title, licenseBadge, description, installation, usage, license, contribution, testing, username, email, avatarURL) {
  const readmeText =
  `
  # Title: ${title}
 
  ${licenseBadge}

  
  ## Description
  ${description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
      
  <a name="installation"></a>
  ## 1. Installation
  
  ${installation}
  <a name="usage"></a>
  ## Usage tips
  
  ${usage}
  
  <a name="license"></a>
  ## License
  
  ${license}
  
  <a name="contributing"></a>
  ## Contributing
  
  ${contribution}
  
  <a name="Tests"></a>
  ## Tests
  
  ${testing}
  
  <a name="Questions"></a>
  ## Questions
  
  Any Questions? Reach me here! ${email}. See more of my work and reach out if you would like to collaborate! ${username}
  <img src="${avatarURL}" alt="profile pic for username">
  `
  return readmeText

}

module.exports = generateMarkdown;