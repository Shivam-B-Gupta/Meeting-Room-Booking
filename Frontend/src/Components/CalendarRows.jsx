export default function TimeRow({}) {
  const today = new Date();
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const dayNumber = date.getDate();

    days.push({ dayName, dayNumber });
  }

  const boxStyle =
    "border-solid border-#D11AEE border w-47 flex justify-center bg-black text-white";

  return (
    <div>
      <div className="flex w-screen m-auto justify-center ">
        <div className={`${boxStyle} items-center`}>Time</div>
        {days.map((day, index) => (
          <div key={index} className={boxStyle}>
            <div className="text-center">
              <div>{day.dayName}</div>
              <div>{day.dayNumber}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CommonRow({ col1, col2, col3, col4, col5, col6, col7, col8 }) {
  const boxStyle =
    "border-solid border-#D11AEE border w-47 h-28 flex justify-center items-center hover:bg-gray-200 cursor-pointer";
  return (
    <div className="flex w-screen  justify-center ">
      <div className={`${boxStyle} bg-black text-white `}>{col1}</div>
      <div className={boxStyle}>{col2}</div>
      <div className={boxStyle}>{col3}</div>
      <div className={boxStyle}>{col4}</div>
      <div className={boxStyle}>{col5}</div>
      <div className={boxStyle}>{col6}</div>
      <div className={boxStyle}>{col7}</div>
      <div className={boxStyle}>{col8}</div>
    </div>
  );
}
