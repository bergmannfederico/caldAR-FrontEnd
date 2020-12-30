import {
  ADD_BUILDING,
  EDIT_BUILDING,
  DELETE_BUILDING,
} from '../types/actionTypes'

import buildings from "../../data/buildings.json";

const initialState = {
  list: buildings,
};

const buildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUILDING:
      return {
        ...state,
        list: [...state.list, action.building],
      };
    case EDIT_BUILDING:
      return {
        ...state,
        list: state.list.map((building) => {
          return building.id === action.building.id
            ? action.building
            : building;
        }),
      };
    case DELETE_BUILDING:
      console.log(action.id);
      return {
        ...state,
        list: state.list.filter((building) => building.id !== action.id),
      };
    default:
      return state;
  }
};

export default buildingsReducer;
