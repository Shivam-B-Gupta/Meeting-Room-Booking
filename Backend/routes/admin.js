import { Router } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import adminModel from "../db/models/admin.js"; // Adjust path as necessary
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

const adminRoutes = Router();

adminRoutes.post("/signup", async function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    password: z.string().min(8).max(15),
    name: z.string().min(3).max(20),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    console.log("❌ Zod validation failed:", parsedDataWithSuccess.error);
    res.status(400).json({ mssg: "Incorrect Format" });
    return;
  }

  const { email, password, name } = parsedDataWithSuccess.data;

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = await adminModel.create({
    email,
    password: hashedPassword,
    name,
  });

  console.log("🟢 New user created:", newUser);

  return res.json({
    name: newUser.name,
    mssg: "Signup successful",
  });
});

adminRoutes.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const user = await adminModel.findOne({
    where: { email },
  });

  if (!user) {
    res.status(403).json({
      mssg: "User not found",
    });
  }
  const name = user.name;

  const decryptedPassword = await bcrypt.compare(password, user.password);

  if (decryptedPassword) {
    const token = jwt.sign(
      {
        id: user.id,
      },
      JWT_ADMIN_PASSWORD
    );
    res.json({
      token: token,
      name: name,
    });
  } else {
    res.json({
      mssg: "incorrect credentials",
    });
  }
});

export default adminRoutes;
