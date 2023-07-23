import React from "react";
import { useSelector } from "react-redux";

import store from "../../../../Redux/store";

import Note from "./Note";

export default () => {
  const records = useSelector((state) => state.records);
  const day = store.getState().date.day;

  return (
    <div
      id="Notes"
      className="flex-[10] overflow-scroll py-3 flex flex-col gap-[0.89rem]"
    >
      {records.length > 0 &&
        records.map((record, index) => {
          return <Note key={index} record={record} />;
        })}
      {records.length === 0 && day && (
        <div className="grid place-content-center fade-in">
          No records found
        </div>
      )}
      {!day && (
        <div className="grid place-content-center fade-in">Select a day</div>
      )}
    </div>
  );
};
