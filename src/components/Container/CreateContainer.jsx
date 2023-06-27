import React from "react";
import Popup from "../Popup";
import { useSelector } from "react-redux";

export default function Create({ className, reference, handleClose }) {
  const refresh = useSelector((store) => store.refresh);
  return (
    <div
      ref={reference}
      className={`${className} flex justify-center place-items h-full w-full`}
    >
      {refresh && <Popup handleClose={handleClose} />}
    </div>
  );
}
