import React from "react";
import Home from "../Home";

export default function HomeContainer({ className, reference }) {
  return (
    <div
      id="HomeContainer"
      ref={reference}
      className={`${className} h-full w-full`}
    >
      <Home />
    </div>
  );
}
