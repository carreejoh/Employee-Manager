const inqurier = require("inquirer");
const mysql = require('mysql2');
const utils = require('./server.js');


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: ']TRGLfgT9rfUTp`B-C2a0;OUM=alSX.{',
        database: 'employees_db'
    },
);


// db.query('SELECT * FROM role', (err, result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result);
// })





function handleFirst(data) {
    let responseReturn = utils.handleInq(data);
    console.log(responseReturn);
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