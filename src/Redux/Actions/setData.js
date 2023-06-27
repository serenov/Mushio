const setEmoji = (payload) => {
  return {
    type: "SE",
    payload,
  };
};
const newTags = (payload) => {
  return {
    type: "NT",
    payload,
  };
};
const setTitle = (payload) => {
  return {
    type: "ST",
    payload,
  };
};

const reset = () => {
  return {
    type: "RF",
  };
};
const setDescription = (payload) => {
  return {
    type: "SD",
    payload,
  };
};

export default { setEmoji, newTags, setTitle, setDescription, reset };
