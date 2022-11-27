// node requirements
const inquirer = require('inquirer');
const fs = require('fs');
const { newManager, newEngineer, newIntern } = require('./questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

    if (responses.newTeamMember === 'engineer') {
        newEngineer().then(responses => {
            this.name = responses.engineerName;
            this.id = responses.employeeId;
            this.email = responses.emailAddress;
            this.github = responses.github;
            this.newTeamMember = responses.newTeamMember;
        });
    } else if (responses.newTeamMember === 'intern') {
        newIntern().then(responses => {
            this.name = responses.internName;
            this.id = responses.employeeId;
            this.email = responses.emailAddress;
            this.school = responses.school;
            this.newTeamMember = responses.newTeamMember;
        });
    }
})