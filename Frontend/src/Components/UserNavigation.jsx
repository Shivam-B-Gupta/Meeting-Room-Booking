import Button, { Button2, Button3 } from "./Button";
import { IconSquareRoundedX } from "@tabler/icons-react";

export default function UserNavigation({ onClose }) {
  const user = localStorage.getItem("name");
  const firstLetterOfName = user.split("")[0].toUpperCase();

  const handleLogout = () => {};
  return (
    <div className="w-56 h-64 absolute right-5 top-8 rounded-lg flex flex-col justify-center items-center shadow-xl/30 bg-gray-100">
      <button onClick={onClose} className="absolute left-0 top-0 p-2 ">
        <IconSquareRoundedX stroke={2} className="cursor-pointer" />
      </button>
      <div className="bg-purple-400 px-5 py-3 rounded-[4rem]">
        {firstLetterOfName}
      </div>
      <div className="p-4">{user}</div>
      <Button textOnButton="Logout" onClick={handleLogout} />
    </div>
  );
}
