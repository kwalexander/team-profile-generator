// node requirements
const inquirer = require('inquirer');
const fs = require('fs');
const { newManager, newEngineer, newIntern } = require('./questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const engineersArray = [];
const internsArray = [];

// functions to run inquirer and ask the questions -- remove this an run inquirer from within each team member type?
// function init() {
//     return inquirer.prompt(newManager)
//         .then(inputData => {
//             return inputData;
//         })
// };

// init();

// function to run run the app, starting by getting the manager info
newManager().then(responses => {
    this.name = responses.managerName;
    this.id = responses.employeeId;
    this.email = responses.emailAddress;
    this.officeNumber = responses.phoneNumber;
    this.newTeamMember = responses.newTeamMember;

    const managerCard = new Manager(this.name, this.id, this.email, this.officeNumber);
    console.log(managerCard);

    if (responses.newTeamMember === 'engineer') {
        newEngineer().then(engResponses => {
            this.name = engResponses.engineerName;
            this.id = engResponses.employeeId;
            this.email = engResponses.engineerEmail;
            this.github = engResponses.engineerGitHubUserName;
            this.newTeamMember = engResponses.newTeamMember;

            const engineerCard = new Engineer(this.name, this.id, this.email, this.github);
            if (!engineersArray.engineerCard) {
                engineersArray.push(engineerCard);
            }

            if (responses.newTeamMember === 'engineer') {
                return new Promise(resolve => {
                    resolve(newEngineer());
                })
            } else if (responses.newTeamMember === 'intern') {
                return new Promise(resolve => {
                    resolve(newIntern());
                })
            };
        });
    } else if (responses.newTeamMember === 'intern') {
        newIntern().then(responses => {
            this.name = responses.internName;
            this.id = responses.employeeId;
            this.email = responses.emailAddress;
            this.school = responses.school;
            this.newTeamMember = responses.newTeamMember;

            const internCard = new Intern(this.name, this.id, this.email, this.school);
            if (!internsArray.internCard) {
                internsArray.push(internCard);
            }

            if (responses.newTeamMember === 'engineer') {
                return new Promise(resolve => {
                    resolve(newEngineer());
                })
            }
            else if (responses.newTeamMember === 'intern') {
                return new Promise(resolve => {
                    resolve(newIntern());
                })
            }
        });
    }
});