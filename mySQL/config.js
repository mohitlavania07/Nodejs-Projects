const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
});

con.connect((err) => {
    if (err) {
        console.warn("Error connecting to database:", err);
    } else {
        console.warn("Connected to database");
    }
});

module.exports = con;
