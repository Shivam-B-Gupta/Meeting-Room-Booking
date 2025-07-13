import React from "react";

export default function Button({ textOnButton }) {
  return (
    <>
      <button className="w-32 h-10 bg-purple-500 rounded-md cursor-pointer">
        {textOnButton}
      </button>
    </>
  );
}

export function Button2({ textOnButton, Icon }) {
  return (
    <>
      <button className="h-12 w-48 rounded-4xl m-auto bg-gray-100 cursor-pointer">
        <div className="flex justify-center">
          <h2 className="mr-1 text-2xl">{textOnButton} </h2>
          {Icon && <Icon stroke={2} className="text-black h-8" />}
        </div>
      </button>
    </>
  );
}

export function Button3({ textOnButton }) {
  return (
    <div className="">
      <button className="bg-white text-black px-4 py-2 rounded-xl font-medium cursor-pointer hover:bg-gray-100 transition ">
        {textOnButton}
      </button>
    </div>
  );
}
