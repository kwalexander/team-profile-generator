// functions to run the app
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeesArray = [];
const createTeam = require('./src/generatePage');

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
    ])
        .then((data) => {
            const managerName = data.managerName
            const employeeId = data.employeeId
            const emailAddress = data.emailAddress
            const phoneNumber = data.phoneNumber

            const manager = new Manager(managerName, employeeId, emailAddress, phoneNumber)

            employeesArray.push(manager);

            // console.log(employeesArray);

            nextStep()
        })
};

// add a new engineer
const newEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log('Name is required');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the engineer's employee ID?",
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
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('Email address is required');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerGitHubUserName",
            message: "What is the engineer's GitHub user name?",
            validate: engineerGitHubUserNameInput => {
                if (engineerGitHubUserNameInput) {
                    return true;
                } else {
                    console.log('GitHub user name is required');
                    return false;
                }
            }
        },
    ])
        .then((data) => {
            const engineerName = data.engineerName
            const employeeId = data.employeeId
            const engineerEmail = data.engineerEmail
            const engineerGitHubUserName = data.engineerGitHubUserName

            const engineer = new Engineer(engineerName, employeeId, engineerEmail, engineerGitHubUserName)

            employeesArray.push(engineer);

            nextStep()
        })
};

// add a new intern
const newIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Name is required');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the interns's employee ID?",
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
            type: "input",
            name: "internGitHubUserName",
            message: "What is the intern's GitHub user name?",
            validate: internGitHubUserNameInput => {
                if (internGitHubUserNameInput) {
                    return true;
                } else {
                    console.log('GitHub user name is required');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log('School is required');
                    return false;
                }
            }
        },
    ])
        .then((data) => {
            const internName = data.internName
            const employeeId = data.employeeId
            const internGitHubUserName = data.internGitHubUserName
            const internSchool = data.internSchool

            const intern = new Intern(internName, employeeId, internGitHubUserName, internSchool)

            employeesArray.push(intern);
            // console.log(internCard);

            nextStep()
        }
        )
};

// ask what team member to add next
const nextStep = () => {
    inquirer.prompt({
        type: 'list',
        name: 'newTeamMember',
        message: 'Do you want to add a team member?',
        choices: ['engineer', 'intern', 'done']
    }).then(data => {
        switch (data.newTeamMember) {
            case 'engineer':
                newEngineer();
                break;
            case 'intern':
                newIntern();
                break;
            case 'done':
                console.log('done');
                generateTeam();
                break;
        }
    })
};

const generateTeam = () => {
    fs.writeFile('./dist/index.html', createTeam(employeesArray), err => {
        if (err) throw new Error(err);
        console.log('File generated!');
        // console.log(employeesArray);
    })
};

newManager();

// module.exports = { newManager, newEngineer, newIntern };