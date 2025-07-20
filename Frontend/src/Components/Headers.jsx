import React, { useState } from "react";
import Bell from "../Icons/Bell";
import User from "../Icons/User";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";

export default function Headers() {
  const [showPopUp, setShowPopUp] = useState(false);
  const user_type = localStorage.getItem("user_type");
  const isAdmin = user_type === "admin";

  const handlePopUp = (e) => {
    e.preventDefault();
    setShowPopUp(true);
  };

  const navLink = "text-xl underline underline-offset-5 ";
  return (
    <>
      <div>
        <header className="flex flex-col">
          <div className="flex justify-between bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 ">
            <h1 className="text-3xl font-bold italic">Meetspace</h1>
            <div className="flex m-1">
              <Bell />
              <User />
            </div>
          </div>
          <nav className=" flex justify-around p-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500">
            <Link to="/meetspace/home" className={navLink}>
              Home
            </Link>

            {isAdmin ? (
              <a href="#" className={navLink} onClick={handlePopUp}>
                Add Room
              </a>
            ) : (
              <Link to="/meetspace/bookaspace" className={navLink}>
                Book a Space
              </Link>
            )}
            <Link to="/meetspace/home#explore" className={navLink}>
              Explore
            </Link>
            <Link to="" className={navLink}>
              Contact us
            </Link>
          </nav>
        </header>
        {showPopUp && (
          <div className="fixed top-0 left-0 w-full h-full  bg-opacity-50 z-50 flex justify-center items-center">
            <PopUp onClose={() => setShowPopUp(false)} type="add" />
          </div>
        )}
      </div>
    </>
  );
}
