import records from "./records";
import slide from "./slide";
import date from "./date";
import refresh from "./refresh";
import formData from "./formData";
import loading from "./loading";
import { combineReducers } from "redux";

export default combineReducers({
  records,
  slide,
  date,
  refresh,
  formData,
  loading,
});
