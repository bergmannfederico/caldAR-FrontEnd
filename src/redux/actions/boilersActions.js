import { ADD_BOILERS, EDIT_BOILERS, DELETE_BOILERS } from '../../constants/actionsTypes';

export const addBoiler = boiler => ({
    type: ADD_BOILERS,
    boiler: boiler
});

export const editBoiler = boiler => ({
    type: EDIT_BOILERS,
    boiler: boiler
});

export const deleteBoiler = id => ({
    type: DELETE_BOILERS,
    id: id
});