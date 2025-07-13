import React from "react";
import Bell from "../Icons/Bell";
import User from "../Icons/User";
import { Link } from "react-router-dom";

export default function Headers() {
  const navLink = "text-xl underline underline-offset-5 ";
  return (
    <div>
      <header className="flex flex-col">
        <div className="flex justify-between bg-gray-200 ">
          <h1 className="text-3xl ">Meetspace</h1>
          <div className="flex m-1">
            <Bell />
            <User />
          </div>
        </div>
        <nav className=" flex justify-around mt-1 mb-1">
          <Link to="/meetspace/home" className={navLink}>
            Home
          </Link>
          <Link to="/meetspace/bookaspace" className={navLink}>
            Book a Space
          </Link>
          <Link to="/meetspace/home#explore" className={navLink}>
            Explore
          </Link>
          <Link to="" className={navLink}>
            Contact us
          </Link>
        </nav>
      </header>
    </div>
  );
}
