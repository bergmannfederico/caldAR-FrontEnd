import { ADD_APPOINTMENT, EDIT_APPOINTMENT, DELETE_APPOINTMENT } from '../../constants/actionsTypes';

export const addAppointment = appointment => ({
    type: ADD_APPOINTMENT,
    appointment: appointment
});

export const editAppointment = appointment => ({
    type: EDIT_APPOINTMENT,
    appointment: appointment
});

export const deleteAppointment = id => ({
    type: DELETE_APPOINTMENT,
    id: id
});