import express from "express";
import employeeRoutes from "./routes/employee.js";
import adminRoutes from "./routes/admin.js";
import roomRoutes from "./routes/room.js";
import sequelize from "./db/db.js";
import bookingRoutes from "./routes/booking.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Sync database (creates table if not exists)
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Sync error:", err));

app.use("/employee", employeeRoutes);
app.use("/admin", adminRoutes);
app.use("/room", roomRoutes);
app.use("/booking", bookingRoutes);

app.listen(7000);
