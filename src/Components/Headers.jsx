import React from "react";
import Bell from "../Icons/Bell";
import { Link } from "react-router-dom";

export default function Headers() {
  const thisIsNice = "ml-2 p-5 text-3xl bg-red-500 ";
  return (
    <div>
      <nav className="flex flex-col">
        <div className="flex">
          <h1 className="text-4xl ">Meetspace</h1>
          <Bell />
        </div>
        <div className="w-screen bg-red-200 p-5 flex">
          <Link className={`${thisIsNice}`}>Home</Link>
        </div>
      </nav>
         
    </div>
  );
}
