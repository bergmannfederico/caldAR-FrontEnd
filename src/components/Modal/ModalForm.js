import React, { Component } from "react";

class ModalForm extends Component {
  state = {
    id: this.props.appointment.id,
    buildingId: this.props.appointment.buildingId,
    boilerId: this.props.appointment.boilerId,
    technician: this.props.appointment.technician,
  };

  // Sumbit Form
  onSubmit = (e) => {
    e.preventDefault();
    this.props.closeModal();
    this.props.addEditAppointment(this.state);
    this.setState({
      id: "",
      buildingId: "",
      boilerId: "",
      technician: "",
    });
  };

  // Edit inputs on change
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="number"
          name="id"
          placeholder="Service Number"
          value={this.state.id}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="buildingId"
          placeholder="Building ID"
          value={this.state.buildingId}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="boilerId"
          placeholder="Boiler ID"
          value={this.state.boilerId}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="technician"
          placeholder="Technician"
          value={this.state.technician}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default ModalForm;