const mysql = require('mysql');

const db = mysql.createConnection({
  user     : 'your_user',
  password : 'your_password',
  database : 'your_database'
});

module.exports = db;