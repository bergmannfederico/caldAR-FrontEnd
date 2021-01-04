import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal/Modal";


const BoilerItem = (props) => {
  const [show, setShow] = useState(false);

  const hideModal = () => {
    setShow(false);
  };

  const { id, type, description } = props.boiler;
  return (
    <ul className="ulTable">
      <li className="liTable">{id}</li>
      <li className="liTable">{type}</li>
      <li className="liTable">{description}</li>
      <li className="liTable">
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Edit
        </button>
        <button onClick={props.deleteBoiler.bind(this, id)}>Delete</button>
      </li>
      <Modal
        title="Edit Boiler"
        show={show}
        handleClose={hideModal}
        addEditAppointment={props.editBoiler}
        appointment={props.boiler}
      />
    </ul>
  );
};

BoilerItem.propTypes = {
  boiler: PropTypes.object.isRequired,
  deleteBoiler: PropTypes.func.isRequired,
  editBoiler: PropTypes.func.isRequired,
};

export default BoilerItem;
