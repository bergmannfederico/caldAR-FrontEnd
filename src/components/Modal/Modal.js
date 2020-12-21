import React from "react";
import "./Modal.css";
import ModalForm from "./ModalForm";

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

export default Modal;
