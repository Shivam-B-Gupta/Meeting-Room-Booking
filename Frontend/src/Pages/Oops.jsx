import { useRef } from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

export default function Oops() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/meetspace/home", { replace: true });
  };

  return (
    <div className="flex flex-col justify-center items-center text-white text-4xl bg-[radial-gradient(122.11%_84.18%_at_50%_100%,_#EDD9FC_0%,_#994FDE_35.62%,_#52299B_63.24%,_#000_100%)]  h-screen">
      <div>Oops not found</div>
      <div className="text-2xl">
        <Button textOnButton="Home" onClick={handleNavigate} />
      </div>
    </div>
  );
}
