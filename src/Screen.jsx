import React, { useEffect, useRef } from "react";
import components from "./components/Container";

export default function Screen({ className, componentArray }) {
  const pushto =
    componentArray !== null
      ? (element) => componentArray.current.push(element)
      : null;
  const color = ["", "bg-red-100", "bg-yellow-500", "bg-blue-500"];

  return (
    <div
      id="Screen"
      className={`${className} overflow-hidden relative w-full h-full`}
    >
      {components.map((Component, index) => {
        return (
          <Component
            key={index}
            className={`${color[index]}  absolute h-full w-full`}
            reference={pushto}
          />
        );
      })}
    </div>
  );
}
