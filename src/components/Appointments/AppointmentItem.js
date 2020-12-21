import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import "./Appointments.css";

class AppointmentItem extends Component {
  state = { show: false, appointment: this.props.appointment };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { id, buildingId, boilerId, technician } = this.props.appointment;
    return (
      <ul>
        <li>{id}</li>
        <li>{buildingId}</li>
        <li>{boilerId}</li>
        <li>{technician}</li>
        <li>
          <button
            onClick={() => {
              this.setState({ show: true });
            }}
          >
            Edit
          </button>
          <button onClick={this.props.deleteAppointment.bind(this, id)}>
            Delete
          </button>
        </li>
        <Modal
          title="Edit Appointment"
          show={this.state.show}
          handleClose={this.hideModal}
          addEditAppointment={this.props.editAppointment}
          appointment={this.props.appointment}
        />
      </ul>
    );
  }
}

AppointmentItem.propTypes = {
  appointment: PropTypes.object.isRequired,
};

export default AppointmentItem;
