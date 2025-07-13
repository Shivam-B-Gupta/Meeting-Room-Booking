import Input from "./Input";
import { Button3 } from "./Button";
import {
  IconHome,
  IconMapPin,
  IconUser,
  IconCopyPlus,
  IconSquareRoundedX,
} from "@tabler/icons-react";

export default function PopUp() {
  return (
    <div className="flex flex-col items-center m-auto justify-evenly rounded-2xl text-white w-208 h-128 bg-[radial-gradient(122.11%_84.18%_at_50%_100%,_#EDD9FC_0%,_#994FDE_35.62%,_#52299B_63.24%,_#000_100%)]">
      <button className="cursor-pointer absolute ml-196 mb-116 ">
        <IconSquareRoundedX stroke={2} className="w-8 h-8" />
      </button>
      <Input
        type="text"
        placeholder="Enter Room Name"
        id="Room"
        icon={IconHome}
      />
      <Input
        type="text"
        placeholder="Enter Room Location"
        id="Location"
        icon={IconMapPin}
      />
      <Input
        type="text"
        placeholder="Enter Room Capacity"
        id="Capacity"
        icon={IconUser}
      />
      <Input
        type="text"
        placeholder="Enter Room Amanities"
        id="Amanities"
        icon={IconCopyPlus}
      />
      <Button3 textOnButton="Add Room" />
    </div>
  );
}
