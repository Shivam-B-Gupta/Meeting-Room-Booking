const mysql =  require('mysql2');
require('dotenv').config({path: '../.env'})
const mysql_password = process.env.mysql_password

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: mysql_password,
    database: 'MeetingRoomBookingApplication'
}).promise()

const result = await pool.query('SELECT * FROM MeetingRoomBookingApplication')
console.log(result)