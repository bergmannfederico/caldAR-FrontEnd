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
      <table className="table table-striped">
        <thead>
          <tr>
            <button type="button" onClick={showModal}>
              Add Building
            </button>
          </tr>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Customer ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Installed Boilers</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
      </table>
      {buildings.map((building) => (
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
