import { legacy_createStore as createStore } from "redux";
import allReducers from "./Reducers";

export default createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
