import axios from "axios";
import TimeRow from "../Components/CalendarRows";
import { CommonRow } from "../Components/CalendarRows";
import { BACKEND_URL } from "../config";

export default function Calendar() {
  const today = new Date();
  const day = [];
  const roomId = localStorage.getItem("roomId");
  const token = localStorage.getItem("token");

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const fullDate = date.toISOString().split("T")[0];
    day.push({ dayName, fullDate });
  }

  const handleSlotClick = async ({ dayIndex, timeSlot }) => {
    console.log(timeSlot);
    const selectedDay = day[dayIndex];
    const data = {
      date: selectedDay.fullDate,
      day: selectedDay.dayName,
      time: timeSlot,
      roomId: roomId,
    };

    try {
      console.log(data);
      await axios.post(`${BACKEND_URL}/booking/booking`, data, {
        headers: { token: token },
      });
      alert("booked successfully");
    } catch (err) {
      console.log(`error while sending data to the backend, Err: ${err}`);
    }
  };

  const timeSlots = [
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 01:00",
    "01:00 - 02:00",
    "02:00 - 03:00",
    "03:00 - 04:00",
    "04:00 - 05:00",
  ];

  return (
    <div>
      <TimeRow days={day} />
      {timeSlots.map((slot, rowIndex) => (
        <CommonRow
          key={rowIndex}
          col1={slot}
          onClick={({ dayIndex }) =>
            handleSlotClick({ dayIndex, timeSlot: slot })
          }
        />
      ))}
    </div>
  );
}
