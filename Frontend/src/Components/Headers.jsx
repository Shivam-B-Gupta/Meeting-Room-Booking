import React, { useContext, useState } from "react";
import { IconUser, IconBell } from "@tabler/icons-react";
import Bell from "../Icons/Bell";
import User from "../Icons/User";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";
import { HashLink } from "react-router-hash-link";
import { UserContext } from "../hooks/UserContext";
import UserNavigation from "./UserNavigation";

export default function Headers() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showPopUp2, setShowPopUp2] = useState(false);
  const { userType } = useContext(UserContext);
  const isAdmin = userType === "admin";
  const handlePopUp = (e) => {
    e.preventDefault();
    setShowPopUp(true);
  };

  const handlePopUp2 = () => {
    setShowPopUp2(true);
    console.log(showPopUp2);
  };

  const navLink = "text-xl underline underline-offset-5 ";
  return (
    <>
      <div>
        <header className="flex flex-col">
          <div className="flex justify-between bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 ">
            <h1 className="text-3xl font-bold italic">Meetspace</h1>
            <div className="flex m-1">
              <IconBell
                size={28}
                stroke={2}
                className="cursor-pointer text-purple-700 mx-1 "
              />
              <IconUser
                size={28}
                stroke={2}
                onClick={handlePopUp2}
                className="cursor-pointer text-purple-700 mx-1"
              />
              {showPopUp2 && (
                <UserNavigation onClose={() => setShowPopUp2(false)} />
              )}
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
              <HashLink smooth to="/meetspace/home#explore" className={navLink}>
                Book a Space
              </HashLink>
            )}
            <Link to="/meetspace/home#explore" className={navLink}>
              Explore
            </Link>
            <Link to="" className={navLink}>
              Contact us
            </Link>
            <Link to="/meetspace/test" className={navLink}>
              test
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
