// functions to run the app
// node reqs
const inquirer = require('inquirer');
const fs = require('fs');

// add a new manager and then ask what type of team member to add next
const newManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name?',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Name is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee ID?',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Employee ID is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'What is your email address?',
            validate: emailAddressInput => {
                if (emailAddressInput) {
                    return true;
                } else {
                    console.log('Email address is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'phoneNumber',
            message: 'What is your office phone number?',
            validate: phoneNumberInput => {
                if (phoneNumberInput) {
                    return true;
                } else {
                    console.log('Phone number is required');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'newTeamMember',
            message: 'Do you want to add a team member?',
            choices: ['engineer', 'intern', 'done']
        }
    ])
};

// add a new engineer
const newEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is the engineer's employee ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "engineerGitHubUserName",
            message: "What is the engineer's GitHub user name?"
        },
        {
            type: 'list',
            name: 'newTeamMember',
            message: 'Do you want to add a team member?',
            choices: ['engineer', 'intern', 'done']
        }
    ])
};

// add a new intern
const newIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is the interns's employee ID?"
        },
        {
            type: "input",
            name: "internGitHubUserName",
            message: "What is the intern's GitHub user name?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?"
        },
        {
            type: 'list',
            name: 'newTeamMember',
            message: 'Do you want to add a team member?',
            choices: ['engineer', 'intern', 'done']
        }
    ])
};

module.exports = { newManager, newEngineer, newIntern };