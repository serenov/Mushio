export default (loading = false, action) => {
  switch (action.type) {
    case "t":
      return !loading;
    default:
      return loading;
  }
};
