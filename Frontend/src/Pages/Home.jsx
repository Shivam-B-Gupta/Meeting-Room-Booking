import React, { useEffect, useRef } from "react";
import Home1 from "../Components/Home1";
import Card from "../Components/Card";
import { useLocation } from "react-router-dom";

export default function Home() {
  const exploreref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#explore" && exploreref.current) {
      exploreref.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Home1 />
      <div className=" bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">
        <section ref={exploreref}>
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
        </section>
      </div>
    </div>
  );
}
