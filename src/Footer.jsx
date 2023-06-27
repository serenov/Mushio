import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Actions from "./Redux/Actions";

export default function Footer({ className, onClick, slide }) {
  const [Location, setLocation] = useState(slide);
  const day = useSelector((store) => store.date.day);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    onClick(i);
    if (i !== 4) setLocation(i);
  };

  return (
    <div className={`${className} items-center flex justify-around w-full`}>
      <button onClick={() => handleClick(0)}>H</button>

      <button onClick={() => handleClick(1)}>S</button>

      <button
        disabled={Location !== 0 || day === null}
        onClick={() => {
          dispatch(Actions.refresh());
          handleClick(4);
        }}
      >
        C
      </button>

      <button onClick={() => handleClick(2, "/graph")}>G</button>
      <button onClick={() => handleClick(3, "/profile")}>P</button>
    </div>
  );
}
