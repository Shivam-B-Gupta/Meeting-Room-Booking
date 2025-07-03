const express = require("express");
const app = express();
import sequelize from "./db/db";

app.use(express.json());

// Sync database (creates table if not exists)
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Sync error:", err));

const { employeeRoutes } = require("./routes/employee");
const { adminRoutes } = require("./routes/admin");

app.use("/employee", employeeRoutes);
app.use("/admin", adminRoutes);

app.listen(7000);
