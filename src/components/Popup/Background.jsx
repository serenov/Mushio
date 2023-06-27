import React from "react";
import { useSelector } from "react-redux";

import bgcolor from "../../API/bgcolor";

import store from "../../Redux/store";

export default function Background() {
  const slide = useSelector((store) => store.slide);

  const EmojiSelected = store.getState().formData.EmojiSelected;

  const color =
    slide === 2
      ? `${bgcolor[EmojiSelected]} duration-500`
      : "bg-ntr-150 duration-1000";

  return (
    <div
      className={`${color} transition-all z-[-1] absolute w-full h-full`}
    ></div>
  );
}
