// node requirements
const inquirer = require('inquirer');
const fs = require('fs');
const { newManager, newEngineer, newIntern } = require('./questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managersArray = [];
const engineersArray = [];
const internsArray = [];

const askEngineer = () => {
    newEngineer().then(responses => {
        const engineerCard = new Engineer(responses.engineerName, responses.employeeId, responses.engineerEmail, responses.engineerGitHubUserName);

        // push to the eng array after collecting the responses
        engineersArray.push(engineerCard);

        nextStep(responses.newTeamMember);
    })
};

const askIntern = () => {
    newIntern().then(responses => {
        const internCard = new Intern(responses.internName, responses.employeeId, responses.internGitHubUserName, responses.internSchool);

        // push to the intern array after collecting the responses
        internsArray.push(internCard);

        nextStep(responses.newTeamMember);
    })
};

const nextStep = (choice) => {
    if (choice === 'engineer') {
        askEngineer();
    }
    else if (choice === 'intern') {
        askIntern();
    } else {
        console.log(
            managersArray, engineersArray, internsArray
        )
    }
};

// function to run run the app, starting by getting the manager info
newManager().then(responses => {
    const managerCard = new Manager(responses.managerName, responses.employeeId, responses.emailAddress, responses.phoneNumber);

    managersArray.push(managerCard);

    nextStep(responses.newTeamMember);
});