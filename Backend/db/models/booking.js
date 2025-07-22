import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import employeeModel from "./employee.js";
import roomModel from "./room.js";

const bookingModel = sequelize.define("Booking", {
  roomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: roomModel,
      key: "id",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: employeeModel, // reference the employee model
      key: "id",
    },
    onDelete: "CASCADE", // optional: delete booking if admin is deleted
  },

  day: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default bookingModel;
