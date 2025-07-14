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
