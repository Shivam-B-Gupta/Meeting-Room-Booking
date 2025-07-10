import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function sendBookingConfirmation(
  email,
  roomName,
  bookingTime
) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Room Booking Confirmation",
    html: `
      <h3>Booking Confirmed ✅</h3>
      <p>You have successfully booked <strong>${roomName}</strong>.</p>
      <p><strong>Time:</strong> ${bookingTime}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
