import React, { useEffect, useState } from "react";
import Buildings1 from "../mocks/buildings.json";
import "bootstrap/dist/css/bootstrap.min.css";

const Buildings = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    setBuildings(Buildings1);
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
          <th scope="col">Customer ID</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Installed Boilers</th>
        </tr>
      </thead>
      <tbody>
        {buildings.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.phone}</td>
            <td>{item.customerId}</td>
            <td>{item.customerName}</td>
            <td>{item.installedBoilers}</td>
            <td>
              <button
                style={btnStyleDel}
                //onClick={item.delBuilding.bind(this, item.id)}
              >
                X
              </button>
            </td>
            <td>
              <button
                style={btnStyleEdit}
                /*onClick={item.editBuilding.bind(
               item,item.id ,
                item.name,
                item.address,
                item.phone,
                item.customerId,
                item.customerName
              )}*/
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
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

export default Buildings;
