export default (slide = 1, action) => {
  switch (action.type) {
    case "prev":
      return 1;
    case "next":
      return 2;
    default:
      return slide;
  }
};
