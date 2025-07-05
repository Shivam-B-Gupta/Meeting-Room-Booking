// const mysql = require("mysql2");
// require("dotenv").config({ path: "../../.env" });
// const mysql_password = process.env.mysql_password;

// const pool = mysql
//   .createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: mysql_password,
//     database: "MeetingRoomBookingApplication",
//   })
//   .promise();

// console.log("Mysql connected successfully");

// async function createUsersTable() {
//   try {
//     await pool.execute(`
//             CREATE TABLE users(
//                 id INT AUTO_INCREMENT PRIMARY KEY,
//                 username VARCHAR(100) NOT NULL,
//                 password VARCHAR(100) NOT NULL,
//                 email VARCHAR(100) NOT NULL UNIQUE
//                 )
//                 `);
//     console.log("✅ 'users' table created or already exists.");
//   } catch (err) {
//     console.log(`error while creating a table ${err}`);
//   }
// }

// createUsersTable();

// // 2️⃣ Define adminModel with basic functions
// const adminModel = {
//   // Create a new admin user
//   createAdmin: async (username, email, hashedPassword) => {
//     const [result] = await pool.execute(
//       "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
//       [username, email, hashedPassword, "admin"]
//     );
//     return {
//       id: result.insertId,
//       username,
//       email,
//       role: "admin",
//     };
//   },
// };

import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

console.log(process.env.DB_NAME + process.env.DB_USER);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connected to MySQL via Sequelize!"))
  .catch((err) => console.error("Connection error:", err));

export default sequelize;
