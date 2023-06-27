import React, { useRef } from "react";
import PHeader from "./PHeader";
import PFooter from "./PFooter";
import Menu from "./Slides/Menu";
import Form from "./Slides/Form";

import Actions from "../../Redux/Actions";

import { useDispatch } from "react-redux";
import Background from "./Background";
import store from "../../Redux/store";
import Loading from "./Loading";

export default function index({ handleClose }) {
  const MenuDiv = useRef(null);
  const FormDiv = useRef(null);

  const dispatch = useDispatch();

  const handleClick = (slide) => {
    if (store.getState().formData.EmojiSelected === -1) {
      alert("select an option");
      return;
    }

    const t = (p) =>
      `transform: translateX(${p}%); transition: all 500ms ease; `;

    if (slide === 2) {
      MenuDiv.current.style = t(-100);
      FormDiv.current.style = t(0);
      dispatch(Actions.nextSlide());
    } else {
      MenuDiv.current.style = t(0);
      FormDiv.current.style = t(100);
      dispatch(Actions.prevSlide());
    }
  };

  return (
    <div className="relative flex flex-col w-[100%] h-full items-center">
      <Loading />
      <Background />
      <PHeader handleClick={handleClick} handleClose={handleClose} />
      <div className="relative flex flex-[5] w-[90%] overflow-hidden">
        <Menu reference={(e) => (MenuDiv.current = e)} />
        <Form reference={(e) => (FormDiv.current = e)} />
      </div>
      <PFooter handleClick={handleClick} handleClose={handleClose} />
    </div>
  );
}
