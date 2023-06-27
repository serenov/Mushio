import React from "react";
import Top from "./Top";
import Greet from "./Greet";

export default function Header() {
  return (
    <div id="Header" className="bg-ntr-150 flex-[7] flex flex-col">
      <Top />
      <Greet />
    </div>
  );
}
