import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Note from "./Note";

export default () => {
  const divRef = useRef(null);
  const records = useSelector((state) => state.records);
  const day = useSelector((state) => state.date.day);

  if (divRef.current) {
    divRef.current.classList.add("fade-in");
  }

  useEffect(() => {
    setTimeout(() => {
      if (divRef.current) divRef.current.classList.remove("fade-in");
    }, 400);
  });

  console.log("hello");

  return (
    <div
      id="Notes"
      className="flex-[10] overflow-scroll py-3 flex flex-col gap-[0.89rem]"
      ref={divRef}
    >
      {records.length > 0 &&
        records.map((record, index) => {
          return <Note key={index} record={record} />;
        })}
      {records.length === 0 && day && (
        <div className="grid place-content-center">No records found</div>
      )}
      {!day && <div className="grid place-content-center">Select a day</div>}
    </div>
  );
};
