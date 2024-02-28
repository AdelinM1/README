
const licenseList = [ 'Apache 2.0','MIT','GPL 3.0','None']
function renderLicenseBadge(license) {
  if (license===licenseList[0]){
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'}
   else if (license===licenseList[1]){
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'}
   else if (license===licenseList[2]){
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'}
    else {
      return ""
    }
    
}

function renderLicenseLink(license) {
  if (license === licenseList[0]) {
    return `[${licenseList[0]}](https://opensource.org/licenses/apache-2-0)`;
  } else if (license === licenseList[1]) {
    return `[${licenseList[1]}](https://opensource.org/licenses/MIT)`;
  } else if (license === licenseList[2]) {
    return `[${licenseList[2]}](https://opensource.org/licenses/GPL-3-0)`;
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license === licenseList[0]) {
    return `This project is licensed under the Apache License 2.0.`;
  } else if (license === licenseList[1]) {
    return `This project is licensed under the MIT License.`;
  } else if (license === licenseList[2]) {
    return `This project is licensed under the GNU General Public License (GPL) version 3.0.`;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## License
  ${renderLicenseBadge(data.license)}

  

  ## Table of Contents
  * [Username](#username)
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contact](#email)
   
  ## Username
  ${data.username}
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Email
  ${data.email}


`;
}

module.exports = generateMarkdown;
