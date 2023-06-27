import React from "react";

import hashtags from "../../../../API/hashtags";
import images from "../../../../API/images";
import bg from "../../../../API/bgcolor";

import { useSelector, useDispatch } from "react-redux";
import setData from "../../../../Redux/Actions/setData";

const Hashtags = () => {
  const activeTags = useSelector((store) => store.formData.activeTags);
  const dispatch = useDispatch();

  return (
    <div className=" flex flex-wrap justify-center gap-[9px]">
      {hashtags.map((tag, i) => {
        const on = activeTags.includes(i)
          ? "bg-sc-500 text-white scale-[1.1]"
          : "bg-white";
        const classNames = `${on} cursor-pointer transition-all text-11xl grid place-content-center px-[8px] h-[28px] rounded-[14px]`;
        return (
          <span
            key={i}
            className={classNames}
            onClick={() => {
              const prev = [...activeTags];
              if (prev.includes(i)) prev.splice(prev.indexOf(i), 1);
              else prev.push(i);
              dispatch(setData.newTags(prev));
            }}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
};

const Options = () => {
  const selectedOption = useSelector((store) => store.formData.EmojiSelected);
  const dispatch = useDispatch();

  return (
    <div className={`flex flex-wrap justify-center gap-5`}>
      {images.map((img, i) => {
        const opacity =
          selectedOption === -1 || selectedOption === i
            ? "scale-[1.08] "
            : "opacity-50";
        return (
          <span
            key={i}
            className={
              bg[i] +
              " cursor-pointer grid place-content-center rounded-[12px] aspect-square w-[80px]"
            }
            onClick={() => {
              dispatch(setData.setEmoji(i));
            }}
          >
            <img
              className={opacity + " transition-all"}
              width="56"
              height="54"
              src={img.src}
              alt={img.alt}
            />
          </span>
        );
      })}
    </div>
  );
};

export default function Menu({ reference }) {
  return (
    <div ref={reference} className="flex flex-col absolute w-full h-full">
      <h1 className="flex-[3] font-mon text-32xl grid text-center place-content-center font-bold text-ntr-900">
        How are you feeling Today?
      </h1>

      <div className="flex-[5] grid place-content-center">
        <Options />
      </div>

      <div className="font-bel flex-[4] flex flex-col overflow-hidden">
        <p className="flex-[1] font-[100] grid place-content-center text-18xl text-center">
          what made you feel like that?
        </p>
        <div className="font-[100] p-1 flex-[4] overflow-scroll">
          <Hashtags />
        </div>
      </div>
    </div>
  );
}
