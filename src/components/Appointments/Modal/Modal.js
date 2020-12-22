import React from "react";
import "./Modal.css";
import ModalForm from "./ModalForm";
import PropTypes from "prop-types";

const Modal = ({
  handleClose,
  show,
  addEditAppointment,
  appointment,
  title,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>{title}</h2>
        <ModalForm
          addEditAppointment={addEditAppointment}
          closeModal={handleClose}
          appointment={appointment}
        />
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  addEditAppointment: PropTypes.func.isRequired,
  appointment: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;
