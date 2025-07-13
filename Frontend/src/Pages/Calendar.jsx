import TimeRow from "../Components/CalendarRows";
import { CommonRow } from "../Components/CalendarRows";
import PopUp from "../Components/PopUp";

export default function Calendar() {
  return (
    <div>
      <TimeRow />
      <CommonRow col1="10:00 - 11:00" col2="2" />
      <CommonRow col1="11:00 - 12:00" col2="2" />
      <CommonRow col1="12:00 - 01:00" col2="2" />
      <CommonRow col1="01:00 - 02:00" col2="2" />
      <CommonRow col1="02:00 - 03:00" col2="2" />
      <CommonRow col1="03:00 - 04:00" col2="2" />
      <CommonRow col1="04:00 - 05:00" col2="2" />
      <PopUp />
    </div>
  );
}
