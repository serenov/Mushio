import React from "react";

export default function Graph({ className, reference }) {
  return (
    <div
      ref={reference}
      className={`${className} grid place-content-center h-full w-full`}
    >
      Graph
    </div>
  );
}
