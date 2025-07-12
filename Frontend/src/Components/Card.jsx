import {
  IconMapPin,
  IconUsers,
  IconWifi,
  IconCoffee,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import { Button3 } from "./Button";

export default function Card({ RoomName, Location, Capacity, Price }) {
  return (
    <div className="relative  h-120 w-80 rounded-[2rem] overflow-hidden shadow-lg ml-auto mr-auto mt-8">
      <div className="bg-[url('/office.webp')] bg-cover bg-center h-80 w-80">
        {/* Dark overlay */}
        <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white p-5 space-y-2">
          {/* Room Name */}
          <h1 className="text-xl font-bold">{RoomName}</h1>

          {/* Location & Price */}
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <IconMapPin size={16} />
              <span>{Location}</span>
            </div>
            <div>
              ₹ <span className="font-semibold">{Price}</span>/Hour
            </div>
          </div>

          {/* Capacity */}
          <div className="flex items-center text-sm gap-1">
            <IconUsers size={16} />
            <span>Capacity: {Capacity} seater</span>
          </div>

          {/* Amenities icons */}
          <div className="flex justify-between">
            <div className="flex  gap-4 mt-2 text-white opacity-90">
              <IconWifi size={20} />
              <IconCoffee size={20} />
              <IconDeviceLaptop size={20} />
              <div>
                {/* Book Now Button */}
                <Button3 textOnButton="Book now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
