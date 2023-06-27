import React from "react";

import { useSelector, useDispatch } from "react-redux";

// import Actions from "./Redux/Actions";
import Actions from "../../Redux/Actions";
import setData from "../../Redux/Actions/setData";

export default function PHeader({ handleClick, handleClose }) {
  const slide = useSelector((store) => store.slide);
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between items-end flex-[0.7] w-[90%]">
      <button disabled={slide === 1} onClick={() => handleClick(1)}>
        <img
          className={`opacity-1 transition-all`}
          width="20"
          height="20"
          src="/src/assets/chevron-l.svg"
          alt="back"
        />
      </button>
      <button
        onClick={() => {
          handleClose(4);
          setTimeout(() => {
            dispatch(setData.reset());
            dispatch(Actions.prevSlide());
            dispatch(Actions.refresh());
          }, 500);
        }}
      >
        <img src="/src/assets/close.svg" alt="close" />
      </button>
    </header>
  );
}
