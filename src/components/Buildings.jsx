import React, { useEffect, useState } from "react";
import Buildings1 from "../data/buildings.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEdit,
  faTrash,
  faUserPlus,

} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import uniqid from "uniqid";

const Buildings = (props) => {
  const [buildings, setBuildings] = useState([]);

  //Get json
  useEffect(() => {
    setBuildings(Buildings1);
  }, []);

  /* const addBuilding = (building) => {
     setBuildings([...buildings, { ...building, id: uniqid() }]);
   };
   const deleteBuilding = (id) => {
     setBuildings(buildings.filter((building) => building.id !== id));
   };*/

  
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "20%", textAlign: "center" };
      },
    },
    {
      dataField: "name",
      text: "Name",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "address",
      text: "Address",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "customerId",
      text: "Customer ID",
      headerStyle: () => {
        return { width: "50%", textAlign: "center" };
      },
    },
    {
      dataField: "customerName",
      text: "Customer Name",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },

    {
      dataField: "installedBoilers",
      text: "Installed Boilers",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "link",
      text: "Action",
      textAlign: "center",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEye} color="white" /> 
              </Button>
            </Link>

            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> 
              </Button>
            </Link>

            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faTrash} /> 
            </Button>
          </div>
        );
      },
    },
  ];

  //const showModal = (appointment) => {
  //setShow(true);
  //setAppointment(appointment);
  //};

  //const hideModal = () => {
  //setShow(false);
  //};
  return (
    <BootstrapTable
      data={buildings}
      keyField="id"
      columns={columns}
      striped={true}
      hover={true}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    buildings: state.buildings.buildings,
  };
};


export default connect(mapStateToProps, null)(Buildings);
