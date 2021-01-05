import React, { Component } from "react";
import MaterialModal from "material-modal";
import { makeStyles } from "redux/index";
import { connect } from "react-redux";
import { bindingActionsCreators } from "redux";
import { hideModal as hideModalAction } from "./redux/actions/modalActions";
import modalTypes from "./redux/types/actionTypes";
import styles from "./modal/modal.module.css";

import BuildingForm from "./Buildings/BuildingForm/BuildingForm";
import RemoveBuildingMessage from "./Buildings/RemoveBuildingMessage/RemoveBuildingMessage";

const getModalStyle = () => {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top},-${left})`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    background_color: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
}));
