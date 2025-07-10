import React from "react";

export default function Button({ textOnButton }) {
  return (
    <>
      <button className="w-32 h-10 bg-purple-500 rounded-md">
        {textOnButton}
      </button>
    </>
  );
}
