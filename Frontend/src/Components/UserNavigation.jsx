import { Link, useNavigate } from "react-router-dom";
import Button, { Button2, Button3 } from "./Button";
import { IconSquareRoundedX } from "@tabler/icons-react";

export default function UserNavigation({ onClose }) {
  const user = localStorage.getItem("name");
  const firstLetterOfName = [];
  const navigate = useNavigate();
  if (user) {
    firstLetterOfName.push(user.split("")[0].toUpperCase());
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("user_type");
    navigate("home");
  };
  return (
    <div className="w-56 h-64 absolute right-5 top-8 rounded-lg flex flex-col justify-center items-center shadow-xl/30 bg-gray-100">
      <button onClick={onClose} className="absolute left-0 top-0 p-2 ">
        <IconSquareRoundedX stroke={2} className="cursor-pointer" />
      </button>
      {user ? (
        <div className="flex flex-col justify-center">
          <div className="bg-purple-400 py-3 px-5 w-fit m-auto rounded-[8rem]">
            {firstLetterOfName}
          </div>
          <div className="p-4">{user}</div>
          <Button textOnButton="Logout" onClick={handleLogout} />
        </div>
      ) : (
        <Link to="/meetspace/signin">
          <Button textOnButton="Signin" />
        </Link>
      )}
    </div>
  );
}
