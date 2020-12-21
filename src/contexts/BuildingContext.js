import React, { createContext, useState, useEffect } from 'react';
import uniqid from "uniqid";

export const BuildingContext = createContext();
const BuildingContextProvider = ({ children }) => {

    function useBuildings() {
    const [buildings, setBuildings] = useState([])

    useEffect(() => {
        fetch("./mocks/buildings")
            .then(response => response.json())
            .then(data => {
                setBuildings(data)
            })
    }, [])
        return buildings
}

const addBuilding = (building) => {
  setBuildings([...useuildings, { ...building, id: uniqid() }]);
};

const deleteBuilding = (id) => {
  setBuildings(buildings.filter((building) => building.id !== id));
    };
    
    return (
    <BuildingContext.Provider value={{ buildings, addBuilding, deleteBuilding}}>
      {children}
    </BuildingContext.Provider>
  );
}

export default BuildingContextProvider;
