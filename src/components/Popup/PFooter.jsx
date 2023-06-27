import React from "react";

import { useSelector, useDispatch } from "react-redux";

import store from "../../Redux/store";

import setData from "../../Redux/Actions/setData";
import Actions from "../../Redux/Actions";

import pushRequest from "../../API/pushRequest";

import getTimeStamp from "../../utils/getTimeStamp";

export default function PFooter({ handleClick, handleClose }) {
  const slide = useSelector((store) => store.slide);

  const dispatch = useDispatch();

  const APIPush = () => {
    const title = store.getState().formData.title;

    const description = store.getState().formData.description;

    if (title === "" && description === "") {
      alert("field must not be empty");
      return;
    }

    dispatch({ type: "t" });
    setTimeout(() => {
      const year = store.getState().date.year;
      const month = store.getState().date.month;
      const day = store.getState().date.day;

      dispatch({ type: "TS", payload: getTimeStamp() });
      const allRecords = pushRequest(
        `_${day}${month}${year}`,
        store.getState().formData
      );
      dispatch(Actions.recUpdate(allRecords));

      dispatch({ type: "t" });
      handleClose(4);
      setTimeout(() => {
        dispatch(setData.reset());
        dispatch(Actions.prevSlide());
        dispatch(Actions.refresh());
      }, 500);
    }, 2000);
  };

  return (
    <div className="flex-[0.6] py-2 grid place-items-center w-[90%] h-[100%]">
      {slide === 1 && (
        <button
          type="button"
          className="flex items-center justify-center h-[50px] max-w-[500px] w-[96%] bg-neutral-900 text-white rounded-[10px]"
          onClick={() => {
            handleClick(2);
          }}
        >
          <span className="text-16xl">Next</span>
          <img
            width="24px"
            height="24px"
            className="inline-block"
            src="/src/assets/nav-left.svg"
            alt="next"
          />
        </button>
      )}
      {slide === 2 && (
        <button
          type="button"
          className="flex items-center justify-center h-[50px] max-w-[500px] w-[96%] bg-neutral-900 text-white rounded-[10px]"
          onClick={() => APIPush()}
        >
          <span className="text-16xl">Submit</span>
        </button>
      )}
    </div>
  );
}
