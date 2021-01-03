import { combineReducers } from "redux";
import buildingsReducer from "./buildingsReducer";

const rootReducer = combineReducers({
  //here all the reducers
  buildings: buildingsReducer,
});

export default rootReducer;
