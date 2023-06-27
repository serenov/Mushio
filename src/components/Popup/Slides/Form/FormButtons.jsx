import React, { useState } from "react";
const buttons = [
  {
    imgSrc: "/src/assets/mic.svg",
    alt: "mic",
    text: "Record",
    Element: ({ Items }) => <> </>,
  },
  {
    imgSrc: "/src/assets/gallery.svg",
    alt: "upload_image",
    text: "Image",
    Element: ({ Items }) => {
      return (
        <>
          <input
            className="absolute w-full h-full opacity-0"
            type="file"
            accept="image/*"
            onClick={(e) => {
              if (Items.selected) {
                if (confirm("do you want to clear this item")) {
                  e.preventDefault();
                  e.target.value = "";
                  Items.setSelected(false);
                }
              }
            }}
            onChange={() => {
              Items.setSelected(true);
            }}
          />
        </>
      );
    },
  },
  {
    imgSrc: "/src/assets/deadline.svg",
    alt: "Deadline",
    text: "Deadline",
    Element: ({ Items }) => (
      <>
        <input
          className="absolute w-full h-full opacity-0"
          type="date"
          name=""
          onClick={(e) => {
            if (Items.selected) {
              if (confirm("do you want to clear this item")) {
                e.target.value = "";
                Items.setSelected(false);
              }
            } else e.target.showPicker();
          }}
          onChange={() => Items.setSelected(true)}
        />
      </>
    ),
  },
];

export default () => {
  return buttons.map((button, i) => {
    const [selected, setSelected] = useState(false);

    const color = selected ? "bg-tr3-500 opacity-100" : "bg-white opacity-70";
    const sources = selected ? "/src/assets/done.svg" : button.imgSrc;
    const alt = selected ? "done" : button.alt;

    return (
      <span
        className={`${color} flex-[1] transition-all relative flex justify-center gap-[6px] items-center  py-[3px] rounded-[12px]`}
        key={i}
      >
        <span>
          <img src={sources} alt={alt} />
        </span>

        <span className="text-12xl text-center flex justify-center items-center">
          {button.text}
        </span>

        <button.Element Items={{ selected, setSelected }} />
      </span>
    );
  });
};
