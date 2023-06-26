const mysql = require('mysql2/promise');
const dotenv = require('dotenv').config();

let connection;

try {
    connection = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER_NAME,
        password: process.env.DB_USER_PWD,
        database: process.env.DB_NAME,
        port:process.env.PORT_DB
    });
console.log("DB conectada")
    
} catch (error) {
    console.log("Error al conectar con la base de datos");
}

module.exports = { connection };