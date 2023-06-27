import React, { useEffect, useRef } from "react";
import FormButtons from "./FormButtons";

import images from "../../../../API/images";
import { useSelector, useDispatch } from "react-redux";

import setData from "../../../../Redux/Actions/setData";

export default function Form({ reference }) {
  const selectedOption = useSelector((store) => store.formData.EmojiSelected);
  // console.log(selectedOption);

  const dispatch = useDispatch();

  const inputRefs = useRef([]);

  useEffect(() => {
    if (selectedOption !== -1) {
      inputRefs.current[0].value = "";
      inputRefs.current[1].value = "";
    }
  });

  return (
    selectedOption !== -1 && (
      <div
        ref={reference}
        className="flex flex-col absolute w-full h-full translate-x-full"
      >
        <h1 className="grid place-content-center flex-[1.3] font-mon text-32xl text-center font-bold text-ntr-900">
          That's Awesome
        </h1>

        <div className="flex-[2] grid place-content-center">
          <img
            width="156"
            height="156"
            src={images[selectedOption].src}
            alt="menu item"
          />
        </div>

        <div className="flex-[3] gap-10 flex flex-col justify-center">
          <p className="font-bel grid place-content-center">
            Tell Mushio about your day
          </p>

          <div className=" flex flex-col items-center justify-center gap-3 overflow-hidden">
            <input
              className="p-2 bg-white opacity-70 outline-none rounded-[8px] min-w-0 w-[85%]"
              type="text"
              placeholder="Title"
              ref={(e) => inputRefs.current.push(e)}
              onChange={(e) => dispatch(setData.setTitle(e.target.value))}
            />

            <textarea
              placeholder="Description"
              className="p-2 text-16xl bg-white opacity-70 outline-none rounded-[8px] min-w-0 w-[85%]"
              cols="30"
              rows="5"
              ref={(e) => inputRefs.current.push(e)}
              onChange={(e) => dispatch(setData.setDescription(e.target.value))}
            />

            <div className="flex justify-center items-center gap-2 overflow-scroll w-[85%]">
              <FormButtons />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
