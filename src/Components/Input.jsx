import React from "react";

export default function Input({ type, placeholder, id, icon: Icon }) {
  return (
    <div className=" my-16">
      <label htmlFor={id} className="text-xl mb-1">
        {id}
      </label>
      <div className="flex items-center w-88 h-10 rounded-sm border border-purple-500 px-2 focus-within:ring-2 focus-within:ring-purple-200 focus-within:border-purple-500">
        {Icon && (
          <Icon className="w-5 h-5 text-gray-500 mr-2 text-purple-500" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          className="flex-1 focus:outline-none custom-placeholder"
        />
      </div>
    </div>
  );
}
