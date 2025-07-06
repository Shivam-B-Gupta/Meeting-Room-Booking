import { Router } from "express";
import adminAuthentication from "../middlewares/admin.js";
import roomModel from "../db/models/room.js";
import { where } from "sequelize";
const roomRoutes = Router();

roomRoutes.post("/addRooms", adminAuthentication, async function (req, res) {
  const { name, location, capacity, amenities } = req.body;
  const adminId = req.adminId;

  if (!name || !location || !capacity) {
    res.json({
      mssg: "the inputs can't be empty",
    });
  }

  await roomModel.create({
    name: name,
    location: location,
    capacity: capacity,
    amenities: amenities,
    adminId: adminId,
  });

  res.json({
    mssg: "added a room",
  });
});

roomRoutes.put("/update", adminAuthentication, async function (req, res) {
  const { name, location, capacity, amenities } = req.body;
  const adminId = req.adminId;

  if (!name || !location || !capacity || !amenities) {
    res.json({
      mssg: "required updated value to update the info",
    });
  }

  try {
    const admin = await roomModel.findOne({ where: { adminId: adminId } });

    if (!admin) {
      res.json({ mssg: "Room not found" });
    } else {
      await admin.update({
        name: name,
        location: location,
        capacity: capacity,
        amenities: amenities,
      });

      res.json({ mssg: "room updated successfully" });
    }
  } catch (err) {
    res.json({
      mssg: "error updating room",
      err: err,
    });
  }
});

roomRoutes.delete("/delete", adminAuthentication, async function (req, res) {
  const adminId = req.adminId;
  const { roomId } = req.body;

  try {
    const result = await roomModel.destroy({ where: { id: roomId } });

    if (result === 0) {
      res.json({ mssg: "Room not found" });
    }

    res.json({ mssg: "deleted the room" });
  } catch (err) {
    res.status(403).json({ mssg: `error: ${err}` });
  }
});

export default roomRoutes;
