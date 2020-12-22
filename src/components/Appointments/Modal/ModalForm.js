import React, { useState } from "react";
import PropTypes from "prop-types";

const ModalForm = (props) => {
  const [id, setId] = useState(props.appointment.id);
  const [buildingId, setBuildingId] = useState(props.appointment.buildingId);
  const [boilerId, setBoilerId] = useState(props.appointment.boilerId);
  const [technician, setTechnician] = useState(props.appointment.technician);

  // Sumbit Form
  const onSubmit = (e) => {
    console.log(props.appointment.id);
    e.preventDefault();
    props.closeModal();
    console.log({ id, buildingId, boilerId, technician });
    props.addEditAppointment({ id, buildingId, boilerId, technician });
    if (props.appointment.id === "") {
      setId("");
      setBuildingId("");
      setBoilerId("");
      setTechnician("");
    }
  };

  // Edit inputs on change
  const handleChange = (e) => {
    switch (e.target.name) {
      case "id":
        setId(e.target.value);
        break;
      case "buildingId":
        setBuildingId(e.target.value);
        break;
      case "boilerId":
        setBoilerId(e.target.value);
        break;
      case "technician":
        setTechnician(e.target.value);
        break;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        name="id"
        placeholder="Service Number"
        value={id}
        onChange={handleChange}
        readOnly={props.appointment.id ? "readOnly" : ""}
      />
      <input
        type="number"
        name="buildingId"
        placeholder="Building ID"
        value={buildingId}
        onChange={handleChange}
      />
      <input
        type="number"
        name="boilerId"
        placeholder="Boiler ID"
        value={boilerId}
        onChange={handleChange}
      />
      <input
        type="text"
        name="technician"
        placeholder="Technician"
        value={technician}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

ModalForm.propTypes = {
  addEditAppointment: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  appointment: PropTypes.object.isRequired,
};

export default ModalForm;
