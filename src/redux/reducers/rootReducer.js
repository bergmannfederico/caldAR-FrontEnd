import { combineReducers } from "redux";
import appointmentsReducer from './appointmentReducer'
import boilersReducer from './boilersReducer'

const rootReducer = combineReducers({
  //here all the reducers
  appointments: appointmentsReducer,
  boilers: boilersReducer
});

export default rootReducer;
