import { combineReducers } from "redux";
import appointmentsReducer from './appointmentReducer'

const rootReducer = combineReducers({
  //here all the reducers
  appointments: appointmentsReducer
});

export default rootReducer;
