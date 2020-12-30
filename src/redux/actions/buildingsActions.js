import {
  ADD_BUILDING,
  EDIT_BUILDING,
  DELETE_BUILDING,
} from '../types/actionTypes'

export const addBuilding = (building) => ({
  type: ADD_BUILDING,
  building: building,
});

export const editBuilding = (building) => ({
  type: EDIT_BUILDING,
  building: building,
});

export const deleteBuilding = (id) => ({
  type: DELETE_BUILDING,
  id: id,
});
