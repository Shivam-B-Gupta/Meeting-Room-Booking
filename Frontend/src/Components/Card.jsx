import {
  IconMapPin,
  IconUsers,
  IconWifi,
  IconCoffee,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import { Button2, Button3, ButtonIcon } from "./Button";
import { useContext, useState } from "react";
import axios from "axios";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import { BACKEND_URL } from "../config";
import PopUp from "./PopUp";
import { useRooms } from "../hooks/RoomContext";

export default function Card({
  RoomName,
  Location,
  Capacity,
  Price,
  Amenities,
  roomId,
  onDelete, // 👈 new prop
  onEdit,
}) {
  const user_type = localStorage.getItem("user_type");
  const token = localStorage.getItem("token");
  const isAdmin = user_type === "admin";
  const [showPopUp, setShowPopUp] = useState(false);
  const [name, setName] = useState(RoomName);
  const [location, setLocation] = useState(Location);
  const [capacity, setCapacity] = useState(Capacity);
  const [amenities, setAmanities] = useState(Amenities);

  const { rooms } = useRooms;

  const handleDelete = async () => {
    try {
      await axios.delete(`${BACKEND_URL}/room/delete`, {
        headers: { token },
        data: { roomId },
      });

      // ✅ Refresh rooms
      if (onDelete) onDelete();
    } catch (err) {
      console.error("Error deleting room:", err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setShowPopUp(true);
  };
  const handleBook = () => {}; // Just placeholder if not defined

  return (
    <div className="relative h-120 w-80 rounded-[2rem] overflow-hidden shadow-lg ml-auto mr-auto mt-6 mb-6">
      <div className="bg-[url('/office.webp')] bg-cover bg-center h-80 w-80">
        <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white p-5 space-y-2">
          <h1 className="text-xl font-bold">{RoomName}</h1>
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <IconMapPin size={16} />
              <span>{Location}</span>
            </div>
            <div>
              ₹ <span className="font-semibold">{Price}</span>/Hour
            </div>
          </div>

          <div className="flex items-center text-sm gap-1">
            <IconUsers size={16} />
            <span>Capacity: {Capacity} seater</span>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-4 mt-2 text-white opacity-90">
              <IconWifi size={20} />
              <IconCoffee size={20} />
              <IconDeviceLaptop size={20} />
            </div>
            <div>
              {isAdmin ? (
                <div className="flex gap-4">
                  <ButtonIcon Icon={IconTrash} onClick={handleDelete} />
                  <ButtonIcon Icon={IconEdit} onClick={handleUpdate} />
                </div>
              ) : (
                <Button3 textOnButton="Book now" onClick={handleBook} />
              )}
            </div>
            {showPopUp && (
              <div className="fixed top-0 left-0 w-full h-full  bg-opacity-50 z-50 flex justify-center items-center">
                <PopUp
                  onClose={() => setShowPopUp(false)}
                  type="update"
                  roomData={{ name, location, capacity, amenities, roomId }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
