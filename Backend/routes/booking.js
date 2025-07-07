import { Router } from "express";
const bookingRoutes = Router();
import employeeAuthentication from "../middlewares/employee.js";
import { Op } from "sequelize";

bookingRoutes.post(
  "/booking",
  employeeAuthentication,
  async function (req, res) {
    const { roomId, startTime, endTime } = req.body;
    const employeeId = req.userId;

    const existingBooking = await bookingModel.findOne({
      where: {
        roomId,
        [Op.or]: [
          {
            startTime: {
              [Op.between]: [startTime, endTime],
            },
          },
          {
            endTime: {
              [Op.between]: [startTime, endTime],
            },
          },
        ],
      },
    });

    if (existingBooking) {
      res.status(403).json({
        mssg: `Room is not available between ${startTime} to ${endTime}`,
      });
    }

    await bookingModel.create({
      roomId,
      employeeId,
      startTime,
      endTime,
    });

    res.json({ mssg: "Room booked successfully" });
  }
);

bookingRoutes.get("/availableRooms", async (req, res) => {
  const { startTime, endTime } = req.query;

  const bookedRooms = await bookingModel.findAll({
    where: {
      [Op.or]: [
        {
          startTime: {
            [Op.between]: [startTime, endTime],
          },
        },
        {
          endTime: {
            [Op.between]: [startTime, endTime],
          },
        },
      ],
    },
    attributes: ["roomId"],
  });

  const bookedRoomIds = bookedRooms.map((b) => b.roomId);

  const availableRooms = await roomModel.findAll({
    where: {
      id: { [Op.notIn]: bookedRoomIds },
    },
  });

  res.json(availableRooms);
});
