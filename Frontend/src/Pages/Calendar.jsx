import axios from "axios";
import TimeRow from "../Components/CalendarRows";
import { CommonRow } from "../Components/CalendarRows";
import { BACKEND_URL } from "../config";
import { useState, useEffect } from "react";

export default function CalendarTest() {
  const timeSlots = [
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 01:00",
    "01:00 - 02:00",
    "02:00 - 03:00",
    "03:00 - 04:00",
    "04:00 - 05:00",
  ];

  const today = new Date();
  const day = [];
  const roomId = localStorage.getItem("roomId");
  const token = localStorage.getItem("token");

  const [bookedSlots, setBookedSlots] = useState(
    Array(timeSlots.length).fill(Array(7).fill(false))
  );

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const fullDate = date.toISOString().split("T")[0];
    day.push({ dayName, fullDate });
  }

  //  Fetch bookings on component mount

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/booking/bookingInfo?roomId=${roomId}`
      );

      const bookings = response.data.bookingData;
      const newBooked = Array(timeSlots.length)
        .fill(null)
        .map(() => Array(7).fill(false));

      bookings.forEach((booking) => {
        const rowIndex = timeSlots.indexOf(booking.time);
        const bookingDate = booking.date.split("T")[0];

        const dayIndex = day.findIndex((d) => d.fullDate === bookingDate);

        if (rowIndex !== -1 && dayIndex !== -1) {
          newBooked[rowIndex][dayIndex] = booking;
        }
      });

      setBookedSlots(newBooked);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };
  useEffect(() => {
    fetchBookings();
  }, []);

  //  Booking handler
  const handleSlotClick = async ({ dayIndex, timeSlot }) => {
    const selectedDay = day[dayIndex];
    const data = {
      date: selectedDay.fullDate,
      day: selectedDay.dayName,
      time: timeSlot,
      roomId: roomId,
    };

    try {
      await axios.post(`${BACKEND_URL}/booking/booking`, data, {
        headers: { token: token },
      });

      alert("Booked successfully");

      const newBooked = [...bookedSlots];
      const rowIndex = timeSlots.indexOf(timeSlot);
      newBooked[rowIndex] = [...newBooked[rowIndex]];
      newBooked[rowIndex][dayIndex] = true;
      setBookedSlots(newBooked);
    } catch (err) {
      console.log(`Error booking: ${err}`);
    }
  };

  return (
    <div>
      <TimeRow days={day} />
      {timeSlots.map((slot, rowIndex) => {
        const isFullyBooked = bookedSlots[rowIndex]?.every(Boolean);
        return (
          <CommonRow
            key={rowIndex}
            col1={slot}
            isFullyBooked={isFullyBooked}
            onClick={({ dayIndex }) =>
              handleSlotClick({ dayIndex, timeSlot: slot })
            }
            status={bookedSlots[rowIndex]}
            fetchBookings={fetchBookings}
          />
        );
      })}
    </div>
  );
}
