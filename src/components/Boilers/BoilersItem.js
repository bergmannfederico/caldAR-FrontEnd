import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal/Modal";
import "./boilers.module.css";

class BoilersItem extends Component {
  state = { show: false, boiler: this.props.boiler };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { id, type, description } = this.props.boiler;
    return (
      <ul>
        <li>{id}</li>
        <li>{type}</li>
        <li>{description}</li>
        <li>
          <button
            onClick={() => {
              this.setState({ show: true });
            }}
          >
            Edit
          </button>
          <button onClick={this.props.deleteBoiler.bind(this, id)}>
            Delete
          </button>
        </li>
        <Modal
          title="Edit Bolier"
          show={this.state.show}
          handleClose={this.hideModal}
          addEditBoiler={this.props.editBoiler}
          boiler={this.props.boiler}
        />
      </ul>
    );
  }
}

BoilersItem.propTypes = {
  boilers: PropTypes.object.isRequired,
};

export default BoilersItem;
