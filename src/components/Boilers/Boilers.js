import React, { Component } from 'react';
import styles from './boilers.module.css';
import Modal from "./Modal/Modal";
import BoilersItem from './BoilersItem'

class Boilers extends Component {
    state = {
      show: false,
      boiler: { id: "", type: "", description: ""},
      boilers: [
        {
          id: 1,
          type: "A",
          description: "Homely A",
        },
        {
          id: 2,
          type: "B",
          description: "Homely B",
        },
        {
          id: 3,
          type: "C",
          description: "Ecological",
        },
        {
          id: 4,
          type: "D",
          description: "Industrial",
        },
      ],
    };
  
    // Delete Boiler
    deleteBoiler = (id) => {
      console.log(id);
      this.setState({
        boilers: [
          ...this.state.boilers.filter(
            (boiler) => boiler.id !== id
          ),
        ],
      });
    };
  
    // Add Boiler
    addBoiler = (boiler) => {
      console.log(boiler);
  
      let exists = false;
      this.state.boilers.forEach((oldApp) => {
        if (oldApp.id === boiler.id) {
          exists = true;
        }
      });
      if (!exists) {
        this.setState({
          boilers: [...this.state.boilers, boiler],
        });
      }
    };
  
    // Edit Boiler
    editBoiler = (boiler) => {
      console.log(boiler);
  
      this.setState({
        boilers: this.state.boilers.map((oldApp) => {
          if (oldApp.id === boiler.id) {
            return boiler;
          }
          return oldApp;
        }),
      });
    };
  
    showModal = (boiler) => {
      this.setState({ show: true, appointment: boiler });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
    render() {
      return (
        <div>
          {this.state.boilers.map((boiler) => (
            <BoilersItem
              key={boiler.id}
              boiler={boiler}
              deleteBoiler={this.deleteBoiler}
              editBoiler={this.editBoiler}
            />
          ))}
          <Modal
            title="Add Bolier"
            show={this.state.show}
            handleClose={this.hideModal}
            addEditBoiler={this.addBoiler}
            boiler={this.state.boiler}
          />
          <button type="button" onClick={this.showModal}>
            Add Boiler
          </button>
        </div>
      );
    }
  }
  
  export default Boilers;