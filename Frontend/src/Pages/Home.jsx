import React from "react";
import Home1 from "../Components/Home1";
import Card from "../Components/Card";

export default function Home() {
  return (
    <div>
      <Home1 />
      <div className=" bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">
        <div className="flex flex-wrap  m-auto w-[90%]">
          <Card
            RoomName="WeWork"
            Location="Vikhroli"
            Capacity="100"
            Price="1400/hour"
          />
          <Card
            RoomName="WeWork"
            Location="Vikhroli"
            Capacity="100"
            Price="1400/hour"
          />
          <Card
            RoomName="WeWork"
            Location="Vikhroli"
            Capacity="100"
            Price="1400/hour"
          />
          <Card
            RoomName="WeWork"
            Location="Vikhroli"
            Capacity="100"
            Price="1400/hour"
          />
          <Card
            RoomName="WeWork"
            Location="Vikhroli"
            Capacity="100"
            Price="1400/hour"
          />
          <Card
            RoomName="WeWork"
            Location="Vikhroli"
            Capacity="100"
            Price="1400/hour"
          />
        </div>
      </div>
    </div>
  );
}
