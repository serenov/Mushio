export default (records = [], action) => {
  switch (action.type) {
    case "Update":
      return action.payload ?? [];
    default:
      return records;
  }
};
