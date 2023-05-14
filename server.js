const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: ']TRGLfgT9rfUTp`B-C2a0;OUM=alSX.{',
        database: 'employees_db'
    },
);


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
        }
    }
}