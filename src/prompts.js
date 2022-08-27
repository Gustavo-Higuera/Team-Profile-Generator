const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information

let teamInfo = (type) => {
  const questions = [
    {
      type: 'input',
      message: 'Employee Name: ',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Employee email: ',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Employee ID: ',
      name: 'id',
    }
  ];

  switch (type) {
    case 'manager':
      questions.push({
        type: 'input',
        message: 'Office Number: ',
        name: 'officeNumber'
      });
      break;
    case 'engineer':
      questions.push({
        type: 'input',
        message: 'GitHub: ',
        name: 'github'
      });
      break;
    case 'intern':
      questions.push({
        type: 'input',
        message: 'School Name: ',
        name: 'schoolName'
      });
      break;
  }

  return questions;
}

let promptUser = () => {
  // setup team array to recieve user prompts
  team = [];

  return inquirer
    .prompt(
      // prompt user for manager info
      teamInfo('manager')
    )
    .then(manager => {
      team.push(new Manager(manager));
      // prompt user to add employees
      return addEmployees(team);
    });
}

let addEmployees = (team) => {
  console.log('\n-----------------');
  return inquirer
    .prompt({
      type: 'list',
      name: 'addOption',
      message: 'Would you like to add another person to this team?',
      choices: [
        'Add Engineer',
        'Add Intern',
        "No"
      ]
    })
    .then(({ addOption }) => {
      if (addOption === 'Add Engineer') {
        return inquirer
          // prompt user for engineer info
          .prompt(teamInfo('engineer'))
          .then(engineer => {
            team.push(new Engineer(engineer));

            return addEmployees(team);
          });

      } else if (addOption === 'Add Intern') {
        return inquirer
          // prompt user for intern info
          .prompt(teamInfo('intern'))
          .then(intern => {
            team.push(new Intern(intern));
            return addEmployees(team);
          });

      } else if (addOption === "No") {
        return team;
      }
    });
}

module.exports = promptUser;

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab