import React, { useRef, useEffect } from "react";
import Screen from "./Screen";
import Footer from "./Footer";
import CreateContainer from "./components/Container/CreateContainer";

const paths = ["/home", "/search", "/graph", "/profile"];

function App() {
  const componentArray = useRef([]);

  const currSlide = useRef(
    paths.indexOf(window.location.pathname.toLowerCase())
  );

  const divRefCreate = useRef(null);

  useEffect(() => {
    handleClick(currSlide.current, false);
  }, []);

  const handleClick = (to, style = true) => {
    if (to === 4) {
      divRefCreate.current.classList.toggle("pop-up");
      return;
    }

    window.history.pushState("", null, paths[to]);

    style = style ? "transition: all 600ms ease; " : "";

    componentArray.current.map((component, index) => {
      component.style = `transform: translateX(${
        (index - to) * 100
      }%); ${style}`;
    });
  };

  return (
    <div className="relative flex flex-col w-full h-[100dvh] overflow-hidden">
      {currSlide.current !== -1 && (
        <>
          <Screen className="flex-[10]" componentArray={componentArray} />
          <Footer
            className="flex-[1]"
            onClick={handleClick}
            slide={currSlide.current}
          />
          <CreateContainer
            reference={(e) => (divRefCreate.current = e)}
            className="absolute transition-all w-full h-full translate-y-full z-10"
            handleClose={() => handleClick(4)}
          />
        </>
      )}
      {currSlide.current === -1 && (
        <>
          <p>Not found</p>
          <a href="/home">Homepage</a>
        </>
      )}
    </div>
  );
}

export default App;
