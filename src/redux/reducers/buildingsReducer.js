import {
  GET_BUILDINGS_FETCHING,
  GET_BUILDINGS_FULFILLED,
  GET_BUILDINGS_REJECTED,
  ADD_BUILDINGS_FETCHING,
  ADD_BUILDINGS_FULFILLED,
  ADD_BUILDINGS_REJECTED,
  DELETE_BUILDINGS_FETCHING,
  DELETE_BUILDINGS_FULFILLED,
  DELETE_BUILDINGS_REJECTED,
} from "../types/actionTypes";

const initialState = {
  isLoading: false,
  list: [],
  error: false,
};

export const buildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUILDINGS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BUILDINGS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_BUILDINGS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ADD_BUILDINGS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_BUILDINGS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
      };
    case ADD_BUILDINGS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case DELETE_BUILDINGS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_BUILDINGS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter((building) => building._id !== action.payload),
      };
    case DELETE_BUILDINGS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
export default buildingsReducer;
