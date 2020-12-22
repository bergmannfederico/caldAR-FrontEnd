import React, { Component } from "react";

class ModalForm extends Component {
  state = {
    id: this.props.boiler.id,
    type: this.props.boiler.type,
    description: this.props.boiler.description,
  };

  // Sumbit Form
  onSubmit = (e) => {
    e.preventDefault();
    this.props.closeModal();
    this.props.addEditBoiler(this.state);
    this.setState({
      id: "",
      type: "",
      description: "",
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
          placeholder="Boiler ID"
          value={this.state.id}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="type"
          placeholder="Type"
          value={this.state.type}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default ModalForm;
