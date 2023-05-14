const inqurier = require("inquirer");
const mysql = require('mysql2');
const utils = require('./server.js');





function handleFirst(data) {
    // let responseReturn = utils.handleInq(data);
    // console.log(responseReturn);
    utils.handleInq(data);
}

function init() {
    inqurier
    .prompt([
        {
            type: 'list',
            message: 'Hello! What would you like to do today?',
            name: 'welcomeChoice',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        }
    ])
    .then((data) => handleFirst(data));
}

init();