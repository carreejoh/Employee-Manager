const mysql = require('mysql2');
const inqurier = require("inquirer");
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: ']TRGLfgT9rfUTp`B-C2a0;OUM=alSX.{',
        database: 'employees_db'
    },
);


function addDepartment() {
    inqurier
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'newDepartment'
        }
    ])
    .then((data) => {
        db.execute('INSERT INTO department (dep_name) VALUES (?)', [data.newDepartment]);
        console.log("Department has been added");
    });
};

function addRole() {
    inqurier
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'newRoleName'
        },
        {
            type: 'input',
            message: 'What is the salary for this new role?',
            name: 'newRoleSalary'
        },
        {
            type: 'list',
            message: 'What department is this role in?',
            name: 'newRoleDepartment',
            choices: ['Engineering', 'Management', 'Sales', 'Maintenance']
        },
        {
            type: 'input',
            message: 'What is the ID of this role?',
            name: 'newRoleID'
        }

    ])
    .then((data) => {
        let departmentID = function() {
            if(data.newRoleDepartment === 'Sales') {
                return 1;
            } else if (data.newRoleDepartment === 'Engineering') {
                return 2;
            } else if (data.newRoleDepartment === 'Management') {
                return 3;
            } else if (data.newRoleDepartment === 'Maintenance') {
                return 4;
            }
        };
        let newID = departmentID();
        db.execute('INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)', [data.newRoleID, data.newRoleName, data.newRoleSalary, newID]);
        console.log("Role has been added");
    })
};

function addEmployee() {
    inqurier
    .prompt([
        {
            type: 'input',
            message: 'What is the employees first name?',
            name: 'newEmpName'
        },
        {
            type: 'input',
            message: 'What is the employees last name?',
            name: 'newEmpLast'
        },
        {
            type: 'input',
            message: 'What is the employees roles ID?',
            name: 'newEmpSalary'
        },
        {
            type: 'input',
            message: 'Who is the employees manager and whats their ID?',
            name: 'newEmpManager'
        }
    ])
    .then((data) => {
        db.execute('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [data.newEmpName, data.newEmpLast, data.newEmpSalary, data.newEmpManager]);
    })
};

async function updateEmployee() {
    db.execute('SELECT * FROM employee', (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log(result);
    db.execute('SELECT * FROM role', (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log(result);
        })
    inqurier
    .prompt([
        {
            type: 'input',
            message: 'Whats the employees ID?',
            name: 'employeeChoice',
        },
        {
            type: 'input',
            message: 'Whats the new roles ID?',
            name: 'newEmployeeRole'
        }
    ]) .then(function(data) {
        db.execute('UPDATE employee SET role_id = ? WHERE id = ?', [data.newEmployeeRole, data.employeeChoice])
    })
   
    })
};

module.exports = {



    handleInq(data) {
        if(data.welcomeChoice === "view all departments") {
            db.query('SELECT * FROM department', (err, result) => {
                if(err) {
                    console.log(err);
                }
                console.log(result);
            })
        } else if (data.welcomeChoice === "view all roles") {
            db.query('SELECT * FROM role', (err, result) => {
                if(err) {
                    console.log(err);
                }
                console.log(result);
            })
        } else if (data.welcomeChoice === "view all employees") {
            db.query('SELECT * FROM employee', (err, result) => {
                if(err) {
                    console.log(err);
                }
                console.log(result);
            })
        } else if (data.welcomeChoice === "add a department") {
            addDepartment();
        } else if (data.welcomeChoice === "add a role") {
            addRole();
        } else if (data.welcomeChoice === "add an employee") {
            addEmployee();
        } else if (data.welcomeChoice === "update an employee role") {
            updateEmployee();
        }
    }
}