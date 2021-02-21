function generateMarkdown(title, licenseBadge, description, installation, usage, license, contribution, testing, username, email, avatarURL) {
  const readmeText = `
  # Title: ${title}
  ${licenseBadge}
  
  ## Description
  ${description}
  
  ## Table of Contents
  
  1. [ Installation ](#installation)
  2. [ Usage ](#usage)
  3. [ License ](#license)
  4. [ Contributing ](#contributing)
  5. [ Tests ](#tests)
  6. [ Questions ](#questions)
      
  <a name="installation"></a>
  ## 1. Installation
  
  ${installation}
  <a name="usage"></a>
  ## 2. Usage tips
  
  ${usage}
  
  <a name="license"></a>
  ## 3. License
  
  ${license}
  
  <a name="contributing"></a>
  ## 4. Contributing
  
  ${contribution}
  
  <a name="Tests"></a>
  ## 5. Tests
  
  ${testing}
  
  <a name="Questions"></a>
  ## 6. Questions
  
  Any Questions? Reach me here! ${email}. See more of my work and reach out if you would like to collaborate! ${username}
  <img src="${avatarURL}" alt="profile pic for username">
  `
  return readmeText

}

module.exports = generateMarkdown;