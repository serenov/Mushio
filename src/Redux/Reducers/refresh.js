export default (state = false, action) => {
  switch (action.type) {
    case "refresh":
      return state ? false : true;
    default:
      return state;
  }
};
