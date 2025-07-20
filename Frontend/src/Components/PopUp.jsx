import Input from "./Input";
import { Button3 } from "./Button";
import {
  IconHome,
  IconMapPin,
  IconUser,
  IconCopyPlus,
  IconSquareRoundedX,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRooms } from "../hooks/RoomContext";
import { BACKEND_URL } from "../config";

export default function PopUp({ onClose, type, roomData }) {
  const [name, setRoomName] = useState(roomData?.name || "");
  const [location, setLocation] = useState(roomData?.location || "");
  const [capacity, setCapacity] = useState(roomData?.capacity || "");
  const [amenities, setAmanities] = useState(roomData?.amenities || "");
  const [roomId, setRoomId] = useState(roomData?.roomId || "");
  const buttonTypeIsAdd = type === "add";
  const token = localStorage.getItem("token");

  const { rooms, fetchRooms } = useRooms();

  const data = { name, location, capacity, amenities };

  const handleSubmit = async () => {
    try {
      await axios.post(`${BACKEND_URL}/room/addRooms`, data, {
        headers: {
          token: token,
        },
      });
      alert(`Added ${data.name}`);

      // Clear form fields
      setRoomName("");
      setLocation("");
      setCapacity("");
      setAmanities("");

      // fetches the refresh data from the backend
      fetchRooms();

      // Close the modal
      onClose();
    } catch (err) {
      console.error("Error adding room", err);
      alert("Failed to add room");
    }
  };

  const handleUpdate = async () => {
    const data = { name, location, capacity, amenities, roomId };
    console.log(data);
    await axios.put(`${BACKEND_URL}/room/update`, data, {
      headers: {
        token: token,
      },
    });
    alert(`updated ${name}`);

    fetchRooms();
  };

  return (
    <div className="flex flex-col items-center m-auto justify-evenly rounded-2xl text-white w-208 h-128 bg-[radial-gradient(122.11%_84.18%_at_50%_100%,_#EDD9FC_0%,_#994FDE_35.62%,_#52299B_63.24%,_#000_100%)]">
      <button
        className="cursor-pointer absolute ml-196 mb-116 "
        onClick={onClose}
      >
        <IconSquareRoundedX stroke={2} className="w-8 h-8" />
      </button>
      <Input
        type="text"
        placeholder="Enter Room Name"
        id="Room"
        icon={IconHome}
        value={name}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter Room Location"
        id="Location"
        icon={IconMapPin}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Enter Room Capacity"
        id="Capacity"
        icon={IconUser}
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter Room Amanities"
        id="Amanities"
        icon={IconCopyPlus}
        value={amenities}
        onChange={(e) => setAmanities(e.target.value)}
      />
      {buttonTypeIsAdd ? (
        <Button3 textOnButton="Add Room" onClick={handleSubmit} />
      ) : (
        <Button3 textOnButton="Update Room" onClick={handleUpdate} />
      )}
    </div>
  );
}
