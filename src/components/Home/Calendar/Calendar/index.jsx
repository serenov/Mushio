import React, { useRef, useState } from "react";

import CalendarTop from "./CalendarTop";
import Calendar from "./Calendar";

export default function Index() {
  return (
    <div id="calendar-container" className="flex-[6]">
      <CalendarTop />
      <Calendar />
    </div>
  );
}
