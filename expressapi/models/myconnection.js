const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_Password,
  database: process.env.DB_DatabaseName,
  connectionLimit: 5,
  queueLimit: 0,
  waitForConnection: true
})

module.exports = pool.promise();