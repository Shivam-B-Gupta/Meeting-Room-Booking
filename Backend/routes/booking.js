import { Router } from "express";
const bookingRoutes = Router();
import employeeAuthentication from "../middlewares/employee.js";
import { Op } from "sequelize";
import employeeModel from "../db/models/employee.js";
import roomModel from "../db/models/room.js";
import bookingModel from "../db/models/booking.js";
import sendBookingConfirmation from "../utils/mail.js";

bookingRoutes.post(
  "/booking",
  employeeAuthentication,
  async function (req, res) {
    try {
      const { roomId, day, time } = req.body;
      const userId = req.userId;
      const normalizedDate = new Date(req.body.date);
      // const bookingTime = `${startTime} to ${endTime}`;
      const room = await roomModel.findByPk(roomId);
      const employee = await employeeModel.findByPk(userId);
      console.log("all good 1");

      const existingBooking = await bookingModel.findOne({
        where: {
          roomId,
          date: normalizedDate,
          time,
        },
      });
      console.log("all good 2");

      if (existingBooking) {
        return res.status(403).json({
          mssg: `Room is not available between ${time}`,
        });
      }
      console.log("Existing booking:", existingBooking);

      await bookingModel.create({
        roomId,
        userId,
        day,
        date: normalizedDate,
        time,
      });
      console.log("all good 4");

      // Send confirmation email
      await sendBookingConfirmation(employee.email, room.name, time);

      res.json({ mssg: "Room booked and confirmation sent!" });
    } catch (err) {
      console.error("Booking error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
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

export default bookingRoutes;

// sshivamgupta833@gmail.com
