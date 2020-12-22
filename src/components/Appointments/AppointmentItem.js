import React, {useState} from "react";
import PropTypes from "prop-types";
import Modal from "./Modal/Modal";
import "./Appointments.css"

const AppointmentItem = (props) => {
    const [show, setShow] = useState(false);


  const hideModal = () => {
    setShow(false);
  };

    const { id, buildingId, boilerId, technician } = props.appointment;
    return (
      <ul className='ulTable'>
        <li className='liTable'>{id}</li>
        <li className='liTable'>{buildingId}</li>
        <li className='liTable'>{boilerId}</li>
        <li className='liTable'>{technician}</li>
        <li className='liTable'>
          <button
            onClick={() => {
                setShow(true);
            }}
          >
            Edit
          </button>
          <button onClick={props.deleteAppointment.bind(this, id)}>
            Delete
          </button>
        </li>
        <Modal
          title="Edit Appointment"
          show={show}
          handleClose={hideModal}
          addEditAppointment={props.editAppointment}
          appointment={props.appointment}
        />
      </ul>
    );
}

AppointmentItem.propTypes = {
  appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.function.isRequired,
    editAppointment: PropTypes.function.isRequired
};

export default AppointmentItem;
