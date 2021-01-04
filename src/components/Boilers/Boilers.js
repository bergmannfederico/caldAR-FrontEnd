import React, { useState } from "react";
import { connect } from 'react-redux';
import { 
    addBoiler as addBoilerAction, 
    editBoiler as editBoilerAction,
    deleteBoiler as deleteBoilerAction
} from '../../redux/actions/boilersActions'
import BoilerItem from "./BoilersItem";
import Modal from "./Modal/Modal";


const Boilers = ({
  boilers,
  addBoiler,
  editBoiler,
  deleteBoiler,
}) => {
  const [show, setShow] = useState(false);
  const [boiler, setBoiler] = useState({
    id: "",
    type: "",
    description: ""
  });
  //const [appointments, setAppointments] = useState(data.appointments);

//   // Delete Appointment
//   const deleteAppointment = (id) => {
//     console.log(id);
//     setAppointments([
//       ...appointments.filter((appointment) => appointment.id !== id),
//     ]);
//   };

//   // Add Appointment
//   const addAppointment = (appointment) => {
//     console.log(appointment);

//     let exists = false;
//     appointments.forEach((oldApp) => {
//       if (oldApp.id === appointment.id) {
//         exists = true;
//       }
//     });
//     if (!exists) {
//       setAppointments([...appointments, appointment]);
//     }
//   };

//   // Edit Appointment
//   const editAppointment = (appointment) => {
//     /*
//     console.log(appointment);
// */
//     console.log(appointments);

//     setAppointments(
//       appointments.map((oldApp) => {
//         if (oldApp.id === appointment.id) {
//           return appointment;
//         }
//         return oldApp;
//       })
//     );
//     console.log(appointments);
//   };

  const showModal = (boiler) => {
    setShow(true);
    setBoiler(boiler);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div>
      <ul className="ulTable">
        <li className="liTable">Service number</li>
        <li className="liTable">Building</li>
        <li className="liTable">Boiler</li>
        <li className="liTable">Technician</li>
        <li className="liTable">Actions</li>
      </ul>
      {boiler.map((boiler) => (
        <BoilerItem
          key={boiler.id}
          boiler={boiler}
          deleteBoiler={deleteBoiler}
          editBoiler={editBoiler}
        />
      ))}
      <Modal
        title="Add Boiler"
        show={show}
        handleClose={hideModal}
        addEditAppointment={addBoiler}
        appointment={boiler}
      />
      <button type="button" onClick={showModal}>
        Add Appointment
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBoiler: (boiler) => dispatch(addBoilerAction(boiler)),
    editBoiler: (boiler) => dispatch(editBoilerAction(boiler)),
    deleteBoiler: (id) => dispatch(deleteBoilerAction(id))
  }
}

const mapStateToProps = state => {
  return{
    appointments: state.appointments.list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boilers);
