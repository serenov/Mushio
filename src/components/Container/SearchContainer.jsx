import React from "react";

export default function Search({ className, reference }) {
  return (
    <div
      ref={reference}
      className={`${className} grid place-content-center h-full w-full`}
    >
      Search
    </div>
  );
}
