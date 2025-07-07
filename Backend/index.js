import express from "express";
import employeeRoutes from "./routes/employee.js";
import adminRoutes from "./routes/admin.js";
import roomRoutes from "./routes/room.js";
import sequelize from "./db/db.js";

const app = express();
app.use(express.json());

// Sync database (creates table if not exists)
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Sync error:", err));

app.use("/employee", employeeRoutes);
app.use("/admin", adminRoutes);
app.use("/room", roomRoutes);

app.listen(7000);
