import React from "react";

import { useSelector, useDispatch } from "react-redux";
import Action from "../../../../Redux/Actions";
import store from "../../../../Redux/store";

export default function CalendarTop() {
  // full form of Month

  const month = useSelector((store) => store.date.month);
  const year = store.getState().date.year;

  const Month = new Date(year, month - 1).toLocaleDateString("en-US", {
    month: "short",
  });

  const dispatch = useDispatch();

  const handleClick = (m) => {
    if (m === 13) {
      dispatch(Action.setYear(year + 1));
      dispatch(Action.setMonth(1));
    } else if (m === 0) {
      dispatch(Action.setYear(year - 1));
      dispatch(Action.setMonth(12));
    } else dispatch(Action.setMonth(m));
  };

  return (
    <div
      id="calendar-top"
      className="flex-[3] flex justify-between items-center py-3 px-3"
    >
      <span onClick={() => handleClick(month - 1)}>
        <img height={18} width={18} src="/src/assets/chevron-l.svg" alt="" />
      </span>

      <span className="font-mon font-bold text-20xl">{`${Month}, ${year}`}</span>

      <span onClick={() => handleClick(month + 1)}>
        <img height={18} width={18} src="/src/assets/chevron-r.svg" alt="" />
      </span>
    </div>
  );
}
