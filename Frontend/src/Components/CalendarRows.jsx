import Button, { Button2, Button3 } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function TimeRow({ days }) {
  const boxStyle =
    "border-solid border-#D11AEE border w-47 flex justify-center bg-black text-white";

  return (
    <div>
      <div className="flex w-screen m-auto justify-center ">
        <div className={`${boxStyle} items-center`}>Time</div>
        {days.map((day, index) => (
          <div key={index} className={boxStyle}>
            <div className="text-center">
              <div>{day.dayName}</div>
              <div>{day.fullDate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CommonRow({ col1, onClick, status, fetchBookings }) {
  const boxStyle =
    "border-solid border-#D11AEE border w-47 h-28 flex justify-center items-center hover:bg-gray-200 cursor-pointer";

  const token = localStorage.getItem("token");
  const handleCancel = async (bookingId) => {
    try {
      await axios.delete(`${BACKEND_URL}/booking/cancel`, {
        headers: { token },
        data: { bookingId },
      });
      alert(`${bookingId} cancelled successfully`);
      fetchBookings();
    } catch (err) {
      console.log(bookingId);
      console.log(err, "error while canceling the booking");
    }
  };

  return (
    <div className="flex w-screen  justify-center ">
      <div className={`${boxStyle} bg-black text-white `}>{col1}</div>
      {[...Array(7)].map((_, dayIndex) => {
        const booking = status?.[dayIndex];

        const isBooked = Boolean(booking);
        return (
          <div
            key={dayIndex}
            className={`${boxStyle} ${
              isBooked
                ? "bg-red-500 text-white cursor-not-allowed hover:bg-red-500 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
            onClick={() => {
              if (!isBooked) onClick({ dayIndex });
            }} // only if not booked
          >
            {isBooked ? (
              <div>
                Booked
                <Button3
                  textOnButton="cancel"
                  onClick={() => handleCancel(booking.id)}
                />
              </div>
            ) : (
              "Available"
            )}
          </div>
        );
      })}
    </div>
  );
}
