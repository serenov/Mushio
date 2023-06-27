import React from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import Notes from "./Calendar/Notes";

export default function Home() {
  return (
    <div id="Home" className="flex flex-col h-full overflow-hidden">
      <Header />
      <Calendar />
      <Notes />
    </div>
  );
}
