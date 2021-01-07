import {
  ADD_BUILDING,
  UPDATE_BUILDING,
  DELETE_BUILDING,
  GET_BUILDINGS,
} from "../types/actionTypes";

export const getBuildings = (buildings) => ({
  type: GET_BUILDINGS,
  buildins: buildings,
});

export const addBuilding = (building) => ({
  type: ADD_BUILDING,
  building: building,
});

export const editBuilding = (building) => ({
  type: UPDATE_BUILDING,
  building: building,
});

export const deleteBuilding = (id) => ({
  type: DELETE_BUILDING,
  id: id,
});
