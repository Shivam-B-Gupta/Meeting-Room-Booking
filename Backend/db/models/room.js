// models/room.js
import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import adminModel from "./admin.js"; // Import Admin model

const roomModel = sequelize.define("Room", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amenities: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  adminId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: adminModel, // reference the Admin model
      key: "id",
    },
    onDelete: "CASCADE", // optional: delete rooms if admin is deleted
  },
});

export default roomModel;
