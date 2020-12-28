import {combineReducers} from "redux";
import buildingsReducer from "./buildingsReducer";
//import { reducer as formReducer } from "redux-form";

 export default combineReducers({
   buildings:buildingsReducer
  // form: formReducer,
 });
