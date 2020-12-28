import { ADD_APPOINTMENT, EDIT_APPOINTMENT, DELETE_APPOINTMENT } from '../../constants/actionsTypes';
import data from '../../data/appointments.json'

const initalState = {
    list: data.appointments
}

const appointmentsReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_APPOINTMENT:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.appointment
                ]
            };
        case EDIT_APPOINTMENT:
            return {
                ...state,
                list: state.list.map(appointment => {
                    return appointment.id === action.appointment.id ?
                    action.appointment :
                    appointment
                })
            };
        case DELETE_APPOINTMENT:
            console.log(action.id);
            return {
                ...state,
                list: state.list.filter(appointment => appointment.id !== action.id)
            };
        default:
            return state;
    }
}

export default appointmentsReducer;