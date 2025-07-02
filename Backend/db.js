const mysql =  require('mysql2');
require('dotenv').config({path: '../.env'})
const mysql_password = process.env.mysql_password

const pool = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: mysql_password,
    database: 'MeetingRoomBookingApplication'
})

console.log('Mysql connected successfully')


async function createUsersTable(){

    try{

        
        await pool.execute(`
            CREATE TABLE users(
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(100) NOT NULL,
                password VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE
                )
                `)
                }
                catch(err){
                    console.log(`error while creating a table ${err}`)
                }
    }

    createUsersTable();