import React, { Component } from "react";
import AppointmentItem from "./AppointmentItem";
import PropTypes from "prop-types";
import Modal from "./Modal/Modal";

class Appointments extends Component {
  state = {
    show: false,
    appointment: { id: "", buildingId: "", boilerId: "", technician: "" },
    appointments: [
      {
        id: 1,
        buildingId: 51,
        boilerId: 35,
        technician: 1602769488,
      },
      {
        id: 2,
        buildingId: 74,
        boilerId: 67,
        technician: 1593566726,
      },
      {
        id: 3,
        buildingId: 87,
        boilerId: 95,
        technician: 1581982141,
      },
      {
        id: 4,
        buildingId: 74,
        boilerId: 42,
        technician: 1577929214,
      },
      {
        id: 5,
        buildingId: 58,
        boilerId: 46,
        technician: 1584396721,
      },
    ],
  };

  // Delete Appointment
  deleteAppointment = (id) => {
    console.log(id);
    this.setState({
      appointments: [
        ...this.state.appointments.filter(
          (appointment) => appointment.id !== id
        ),
      ],
    });
  };

  // Add Appointment
  addAppointment = (appointment) => {
    console.log(appointment);

    let exists = false;
    this.state.appointments.forEach((oldApp) => {
      if (oldApp.id === appointment.id) {
        exists = true;
      }
    });
    if (!exists) {
      this.setState({
        appointments: [...this.state.appointments, appointment],
      });
    }
  };

  // Edit Appointment
  editAppointment = (appointment) => {
    console.log(appointment);

    this.setState({
      appointments: this.state.appointments.map((oldApp) => {
        if (oldApp.id === appointment.id) {
          return appointment;
        }
        return oldApp;
      }),
    });
  };

  showModal = (appointment) => {
    this.setState({ show: true, appointment: appointment });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <ul>
          <li>Service number</li>
          <li>Building</li>
          <li>Boiler</li>
          <li>Technician</li>
          <li>Actions</li>
        </ul>
        {this.state.appointments.map((appointment) => (
          <AppointmentItem
            key={appointment.id}
            appointment={appointment}
            deleteAppointment={this.deleteAppointment}
            editAppointment={this.editAppointment}
          />
        ))}
        <Modal
          title="Add Appointment"
          show={this.state.show}
          handleClose={this.hideModal}
          addEditAppointment={this.addAppointment}
          appointment={this.state.appointment}
        />
        <button type="button" onClick={this.showModal}>
          Add Appointment
        </button>
      </div>
    );
  }
}

export default Appointments;
