import React from "react";

import Popup from "../Popup";

export default function Profile({ className, reference }) {
  return (
    <div
      ref={reference}
      className={`${className} flex justify-center items-center h-full w-full`}
    >
      <span>profile</span>
    </div>
  );
}
