import React from "react";

export default function Top() {
  return (
    <div id="icon-holder" className=" flex justify-between pt-4 pr-1 flex-[1]">
      <div className="bg-white py-2 px-4 rounded-r-xl">
        <img
          width="56px"
          height="54px"
          src="/src/assets/icon-app.png"
          alt="icon"
        />
      </div>
      <div className="flex justify-center items-center mr-3">
        <img src="/src/assets/notification.svg" alt="notification-icon" />
      </div>
    </div>
  );
}
