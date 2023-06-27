const initialState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
};
export default (date = initialState, action) => {
  switch (action.type) {
    case "y":
      return { ...date, year: action.payload };
    case "m":
      return { ...date, month: action.payload };
    case "d":
      return { ...date, day: action.payload };
    default:
      return date;
  }
};
