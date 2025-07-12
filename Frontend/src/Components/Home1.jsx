import React from "react";
import { IconTrendingUp3 } from "@tabler/icons-react";
import { Button2 } from "./Button";

export default function Home1() {
  return (
    <div>
      <div className="bg-[url('/home1.jpg')]  bg-cover bg-center h-screen w-full flex flex-col justify-around pl-24">
        <h1 className="text-white text-5xl font-bold tracking-tight w-xl ">
          Find the perfect space for your next meeting.
        </h1>
        <div className="flex ">
          <h2 className="text-white text-3xl font-medium w-3xl ">
            Book meeting room in top office buildings with ease. Our platform
            connects you with premium spaces designed for productivity and
            collaboration
          </h2>
          <Button2 textOnButton="Explore" Icon={IconTrendingUp3} />
        </div>
      </div>
    </div>
  );
}
