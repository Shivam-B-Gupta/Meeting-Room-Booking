import React, { useRef, useEffect } from "react";
import Home1 from "../Components/Home1";
import Card from "../Components/Card";
import { useLocation } from "react-router-dom";
import { useRooms } from "../hooks/RoomContext"; // use context
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Home() {
  const { rooms, fetchRooms } = useRooms();
  const exploreref = useRef(null);
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (location.hash === "#explore" && exploreref.current) {
      exploreref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Home1 />
      <div className="bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400">
        <section ref={exploreref}>
          <div className="flex flex-wrap m-auto w-[80%]">
            {Array.isArray(rooms) && rooms.length > 0 ? (
              rooms.map((room) => (
                <Card
                  key={room.id}
                  RoomName={room.name}
                  Location={room.location}
                  Capacity={room.capacity}
                  Amenities={room.amenities}
                  Price={room.price}
                  roomId={room.id}
                  onDelete={fetchRooms}
                  onEdit={fetchRooms}
                />
              ))
            ) : (
              <p className="text-center w-full mt-4">No rooms available</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
