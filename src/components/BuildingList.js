import React, { useContext } from "react";
import  {BuildingContext } from "../contexts/BuildingContext"

const BuildingList = () => {
  const { buildings, deleteBuilding } = useContext(BuildingContext);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Customer Id ID</th>
          <th>Customer Name</th>
          <th>Installed Boilers</th>
          <t>Actions</t>
        </tr>
      </thead>
      <tbody>
        {buildings.length > 0 ? (
          buildings.map((building) => {
            const {
              id,
              name,
              address,
              customerId,
              customerName,
              installedBoilers,
            } = building;
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{address}</td>
                <td>{customerId}</td>
                <td>{customerName}</td>
                <td>{installedBoilers}</td>
                <td>
                  <button style={btnStyleDel} onclick={deleteBuilding(building.id)}>X</button>
                  <button style={btnStyleEdit} onclick={deleteBuilding(building.id)} >Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No buildings found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
const btnStyleEdit = {
  background: "#193c78",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
const btnStyleDel = {
  background: "#dc8a2a",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default BuildingList;
