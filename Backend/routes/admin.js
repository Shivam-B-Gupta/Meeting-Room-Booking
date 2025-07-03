import { Router } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import adminModel from "../db/models/admin"; // Adjust path as necessary

const adminRoutes = Router();

adminRoutes.post("/signup", async function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    password: z.string().min(8).max(15),
    username: z.string().min(3).max(20),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    console.log("❌ Zod validation failed:", parsedDataWithSuccess.error);
    res.status(400).json({ mssg: "Incorrect Format" });
    return;
  }

  const { email, password, username } = parsedDataWithSuccess.data;

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = await adminModel.create({
    email,
    password: hashedPassword,
    username,
  });

  console.log("🟢 New user created:", newUser);

  return res.json({
    username: newUser.username,
    mssg: "Signup successful",
  });
});

export default adminRoutes;
