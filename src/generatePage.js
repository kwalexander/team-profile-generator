// functions to create the page content by type (similar to unit 9)

const createTeam = (employeesArray) => {

    const cardsArray = [];

    const createManager = manager => {

        return `
            <div class="card mx-3 my-3" style="max-width: 360px" id="employee">
                <div class="card-header">
                    <h2>Manager: ${manager.name}</h2>
                </div>
                <div class="card-fill">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
            `
    };

    // create engineer card if needed
    const createEngineer = engineer => {

        return `
            <div class="card mx-3 my-3" style="max-width: 360px" id="employee">
                <div class="card-header">
                    <h2>Engineer: ${engineer.name}</h2>
                </div>
                <div class="card-fill">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>
            `
    }

    // create intern card if needed
    const createIntern = intern => {
        return `
            <div class="card mx-3 my-3" style="max-width: 360px" id="employee">
                <div class="card-header">
                    <h2>Intern: ${intern.name}</h2>
                </div>
                <div class="card-fill">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
            `
    };

    cardsArray.push(employeesArray.filter(employee => employee.getRole() === "Manager").map(manager => createManager(manager)));
    cardsArray.push(employeesArray.filter(employee => employee.getRole() === "Engineer").map(engineer => createEngineer(engineer)));
    cardsArray.push(employeesArray.filter(employee => employee.getRole() === "Intern").map(intern => createIntern(intern)));
    return cardsArray.join("");

};

module.exports = employeesArray => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, chrink-to-fit=no" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                <link rel="stylesheet" href="./style.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <title>Team Overview</title>
            </head>
            <body>
                <header>
                    <div class="card-header">
                        <h1>Team Overview</h1>
                    </div>
                </header>
                <div id="team-container">
                <div class = "d-flex flex-wrap justify-content-center">
                    ${createTeam(employeesArray)}
                </div>
            </body>
        </html>
    `
};