import { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import MailIcon from "../Icons/Mail";
import PasswordIcon from "../Icons/Password";
import SideComponent from "../Components/SideComponent";

export default function Auth() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2">
        <SideComponent />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-y-10">
        <h1 className="text-4xl font-semibold">Login</h1>
        <Input type="text" placeholder="Email" id="Email" icon={MailIcon} />
        <Input
          type="text"
          placeholder="Password"
          id="Password"
          icon={PasswordIcon}
        />
        <Button textOnButton="Login" />
      </div>
    </div>
  );
}
