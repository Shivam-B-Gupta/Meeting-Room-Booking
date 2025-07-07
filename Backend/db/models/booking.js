import { DataTypes } from "sequelize";
import sequelize from "../db";
import employeeModel from "./employee";
import roomModel from "./room";

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
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
