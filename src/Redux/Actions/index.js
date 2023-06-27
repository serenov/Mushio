const recUpdate = (payload) => {
  return {
    type: "Update",
    payload,
  };
};

const nextSlide = () => {
  return {
    type: "next",
  };
};

const prevSlide = () => {
  return {
    type: "prev",
  };
};

const setMonth = (payload) => {
  return {
    type: "m",
    payload,
  };
};
const setDay = (payload) => {
  return {
    type: "d",
    payload,
  };
};
const setYear = (payload) => {
  return {
    type: "y",
    payload,
  };
};

const refresh = () => {
  return {
    type: "refresh",
  };
};
export default {
  recUpdate,
  nextSlide,
  prevSlide,
  setDay,
  setMonth,
  setYear,
  refresh,
};
