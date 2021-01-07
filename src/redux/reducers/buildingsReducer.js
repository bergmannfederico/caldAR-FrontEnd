import {
  GET_BUILDINGS,
  ADD_BUILDING,
  DELETE_BUILDING,
} from "../types/actionTypes";

const initialState = {
  isLoading: false,
  list: [],
  error: false,
};

export const buildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUILDINGS:
      return {
        ...state,
        isLoading: true,
      };
    
    case ADD_BUILDING:
      return {
        ...state,
        isLoading: true,
      };
   
    case DELETE_BUILDING:
      return {
        ...state,
        isLoading: true,
      };
    
    default:
      return state;
  }
};
export default buildingsReducer;
