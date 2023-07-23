import React, { useRef, useEffect } from "react";

import images from "../../../../API/images";
import bgcolor from "../../../../API/bgcolor";
import hashtags from "../../../../API/hashtags";

function Hashtags({ tags }) {
  return (
    <>
      {tags.map((hashtag, index) => {
        return (
          <span key={index} className="bg-pr-500 text-10xl px-1 rounded-[9px]">
            {hashtags[hashtag]}
          </span>
        );
      })}
    </>
  );
}

export default function Note({ record }) {
  const divRef = useRef(null);
  if (divRef.current) {
    divRef.current.classList.add("fade-in");
  }

  useEffect(() => {
    setTimeout(() => {
      if (divRef.current) divRef.current.classList.remove("fade-in");
    }, 400);
  });
  const Image = ({ imgObj }) => (
    <img width="50" height="50" src={imgObj.src} alt={imgObj.alt} />
  );

  return (
    <div
      ref={divRef}
      className="flex font-rob mx-[14px] br rounded-[8px] py-[20px] px-[23px] sh"
    >
      <div className="flex flex-col flex-[6] overflow-hidden">
        <div className="text-18xl font-bold">{record.title}</div>
        <div className="text-12xl my-1">{record.description}</div>
        <div className="flex gap-1 text-white overflow-scroll no-scrollbar">
          <Hashtags tags={record.activeTags} />
        </div>
      </div>
      <div className="flex-[1] flex flex-col items-center justify-between">
        <div className={`${bgcolor[record.EmojiSelected]} rounded`}>
          <Image imgObj={images[record.EmojiSelected]} />
        </div>
        <div className="text-10xl">{record.timeStamp ?? "12:30 pm"}</div>
      </div>
    </div>
  );
}
