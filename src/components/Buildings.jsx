import React, { useEffect, useState } from "react";
import Buildings1 from "../mocks/buildings.json"

/* function useBuildings() {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    fetch("./mocks/buildings.json")
      .then((response) => response.json())
      .then((data) => {
        setBuildings(data);
      });
  }, []);

  return buildings;
} */


const Buildings = ()  => {

  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    setBuildings (Buildings1)
  }, []);

  return (
    <div className="container mt-5" align="center">
      <h4>Buildings</h4>

      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
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
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.adrress}</td>
                  <td>{item.customerId}</td>
                  <td>{item.customerName}</td>
                  <td>{item.installedBoilers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Buildings;