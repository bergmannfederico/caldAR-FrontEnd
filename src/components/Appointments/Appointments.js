import React, { useState } from "react";
import AppointmentItem from "./AppointmentItem";
import Modal from "./Modal/Modal";
import "./Appointments.css";
import data from "../../data/appointments.json";

const Appointments = () => {
  const [show, setShow] = useState(false);
  const [appointment, setAppointment] = useState({
    id: "",
    buildingId: "",
    boilerId: "",
    technician: "",
  });
  const [appointments, setAppointments] = useState(data.appointments);

  // Delete Appointment
  const deleteAppointment = (id) => {
    console.log(id);
    setAppointments([
      ...appointments.filter((appointment) => appointment.id !== id),
    ]);
  };

  // Add Appointment
  const addAppointment = (appointment) => {
    console.log(appointment);

    let exists = false;
    appointments.forEach((oldApp) => {
      if (oldApp.id === appointment.id) {
        exists = true;
      }
    });
    if (!exists) {
      setAppointments([...appointments, appointment]);
    }
  };

  // Edit Appointment
  const editAppointment = (appointment) => {
    /*
    console.log(appointment);
*/
    console.log(appointments);

    setAppointments(
      appointments.map((oldApp) => {
        if (oldApp.id === appointment.id) {
          return appointment;
        }
        return oldApp;
      })
    );
    console.log(appointments);
  };

  const showModal = (appointment) => {
    setShow(true);
    setAppointment(appointment);
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
      {appointments.map((appointment) => (
        <AppointmentItem
          key={appointment.id}
          appointment={appointment}
          deleteAppointment={deleteAppointment}
          editAppointment={editAppointment}
        />
      ))}
      <Modal
        title="Add Appointment"
        show={show}
        handleClose={hideModal}
        addEditAppointment={addAppointment}
        appointment={appointment}
      />
      <button type="button" onClick={showModal}>
        Add Appointment
      </button>
    </div>
  );
};

export default Appointments;
