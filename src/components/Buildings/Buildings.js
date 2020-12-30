import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addBuilding as addBuildingAction,
  editBuilding as editBuildingAction,
  deleteBuilding as deleteBuildingAction,
} from "../../redux/actions/buildingsActions";
import BuildingItem from "./BuildingItem";
import Modal from "./Modal/Modal";
import "./Buildings.css";

const Buildings = ({
  buildings,
  addBuilding,
  editBuilding,
  deleteBuilding,
}) => {
  const [show, setShow] = useState(false);
  const [building, setBuilding] = useState({
    id: "",
    name: "",
    address: "",
    phone: "",
    customerId: "",
    customerName: "",
    installedBoilers: "",
  });

  const showModal = (building) => {
    setShow(true);
    setBuilding(building);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div>
      <ul className="ulTable">
        <li className="liTable">Name</li>
        <li className="liTable">Address</li>
        <li className="liTable">Phone</li>
        <li className="liTable">Customer ID</li>
        <li className="liTable">Customer Name</li>
        <li className="liTable">Installed Boilers</li>
      </ul>
      {buildings.map((building)=>(
   <BuildingItem
          key={building.id}
          building={building}
          deleteBuilding={deleteBuilding}
          editBuilding={editBuilding}
        />
      ))}
      <Modal
        title="Add Building"
        show={show}
        handleClose={hideModal}
        addEditBuilding={addBuilding}
        building={building}
      />
      <button type="button" onClick={showModal}>
        Add Building
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBuilding: (building) => dispatch(addBuildingAction(building)),
    editBuilding: (building) => dispatch(editBuildingAction(building)),
    deleteBuilding: (id) => dispatch(deleteBuildingAction(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    buildings: state.buildings.list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buildings);
