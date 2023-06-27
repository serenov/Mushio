import React, { useRef, useState } from "react";

import getCalendar from "../../../../utils/getCalendar";
import CalendarTop from "./CalendarTop";
import Calendar from "./Calendar";
import store from "../../../../Redux/store";

export default function Index() {
  const year = store.getState().date.year;
  const month = store.getState().date.month;

  const calendar = getCalendar(month, year);

  return (
    <div id="calendar-container" className="flex-[6]">
      <CalendarTop />
      <Calendar calendar={calendar} />
    </div>
  );
}
