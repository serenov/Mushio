const initState = {
  EmojiSelected: -1,
  activeTags: [],
  title: "",
  description: "",
  timeStamp: "",
};

export default (formData = initState, action) => {
  switch (action.type) {
    case "SE":
      return { ...formData, EmojiSelected: action.payload };
    case "NT":
      return {
        ...formData,
        activeTags: action.payload,
      };
    case "ST":
      return { ...formData, title: action.payload };
    case "SD":
      return { ...formData, description: action.payload };
    case "TS":
      return { ...formData, timeStamp: action.payload };
    case "RF":
      return { ...initState };
    default:
      return formData;
  }
};
