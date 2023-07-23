import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import request from "../../../../API/request";

import Actions from "../../../../Redux/Actions";

import scrollIntoView from "../../../../utils/scrollIntoView";

import store from "../../../../Redux/store";

import getCalendar from "../../../../utils/getCalendar";

const Cell = ({ dayName, dayNum, isToday, setDay, reference }) => {
  const addulation = isToday ? "bg-pr-500" : "hover:bg-pr-200";
  return (
    <span
      id={isToday ? "calendar_dates" : ""}
      className={
        addulation +
        " active:bg-pr-750 min-w-[35px] p-[4px] font-rob flex flex-col cursor-pointer justify-center items-center rounded-[8px]"
      }
      onClick={() => {
        if (!isToday) setDay(dayNum);
      }}
      ref={isToday ? reference : null}
    >
      <div className="text-14xl">{dayName}</div>
      <div className="text-20xl font-bold">{dayNum}</div>
    </span>
  );
};

export default function Calendar() {
  const day = useSelector((store) => store.date.day);
  const month = useSelector((store) => store.date.month);

  const initialRender = useRef(true);

  const year = store.getState().date.year;

  const calendar = getCalendar(month, year);

  const dispatch = useDispatch();

  let activeDay = null;
  let containerDiv = null;

  const handleClick = (day) => {
    dispatch(Actions.setDay(day));
  };

  const apiCall = () => {
    if (initialRender) return;
    const year = store.getState().date.year;
    const dateKey = `_${day}${month}${year}`;
    const res = request(dateKey);

    dispatch(Actions.recUpdate(res));
  };

  useEffect(apiCall, [day]);

  useEffect(() => {
    if (!initialRender.current) dispatch(Actions.setDay(null));
  }, [month]);

  useEffect(() => {
    scrollIntoView(containerDiv, activeDay);
    initialRender.current = false;
  }, []);

  return (
    <div className="flex-[5] relative mb-[24px] flex overflow-hidden">
      <span className="w-[55px] h-[100%] absolute left-0 fl"></span>
      <span className="w-[55px] h-[100%] absolute right-0 fr"></span>
      <div
        ref={(elem) => (containerDiv = elem)}
        className="flex gap-2 overflow-scroll relavtive no-scrollbar "
      >
        <span className="px-5"></span>
        {calendar.map((date, index) => {
          return (
            <Cell
              key={index}
              dayName={date.name}
              dayNum={date.day}
              isToday={date.day === day}
              setDay={handleClick}
              reference={(elem) => (activeDay = elem)}
            />
          );
        })}
        <span className="px-5"></span>
      </div>
    </div>
  );
}
