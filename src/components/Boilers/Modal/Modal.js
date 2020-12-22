import React from "react";
import "./modal.module.css";
import ModalForm from "./ModalForm";

const Modal = ({
  handleClose,
  show,
  addEditBoiler,
  boiler,
  title,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>{title}</h2>
        <ModalForm
          addEditBolier={addEditBoiler}
          closeModal={handleClose}
          boiler={boiler}
        />
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;