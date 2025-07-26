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

      const existingBooking = await bookingModel.findOne({
        where: {
          roomId,
          date: normalizedDate,
          time,
        },
      });

      if (existingBooking) {
        return res.status(403).json({
          mssg: `Room is not available between ${time}`,
        });
      }

      await bookingModel.create({
        roomId,
        userId,
        day,
        date: normalizedDate,
        time,
      });

      // Send confirmation email
      await sendBookingConfirmation(employee.email, room.name, time);

      res.json({ mssg: "Room booked and confirmation sent!" });
    } catch (err) {
      console.error("Booking error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// sshivamgupta833@gmail.com

bookingRoutes.get("/bookingInfo", async (req, res) => {
  try {
    const { roomId } = req.query;

    const bookingData = await bookingModel.findAll({
      where: { roomId }, // find by foreign key
    });

    if (!bookingData || bookingData.length === 0) {
      return res.status(404).json({ error: "No bookings found for this room" });
    }

    res.json({ bookingData });
  } catch (err) {
    console.error("Error fetching booking:", err);
    res.status(500).json({ error: "Failed to fetch booking data" });
  }
});

bookingRoutes.delete("/cancel", employeeAuthentication, async (req, res) => {
  try {
    const { bookingId } = req.body;
    const userId = req.userId;

    const booking = await bookingModel.findOne({
      where: {
        id: bookingId,
        userId: userId,
      },
    });

    if (!bookingId) {
      return res
        .status(404)
        .json({ error: "booking not found in the database" });
    }

    await booking.destroy();

    res.json({ mssg: "booking canceled successfully" });
  } catch (err) {
    res.status(403).json({ error: err });
  }
});

export default bookingRoutes;
