import React, { createContext, useState, useEffect } from 'react';
import uniqid from "uniqid";
import buildingList from "../mocks/buildings"

 export const BuildingContext = createContext();
 const BuildingContextProvider = ({ children }) => {
 
  const [buildings, setBuildings] = useState([])

    useEffect(() => {
        fetch(buildingList)
            .then(response => response.json())
            .then(buildings => {
                setBuildings(buildings)
            })
    }, [])



const addBuilding = (building) => {
  setBuildings([...buildings, { ...building, id: uniqid() }]);
};

const deleteBuilding = (id) => {
  setBuildings(buildings.filter((building) => building.id !== id));
    };
    
    
return (
    <BuildingContext.Provider value={{ buildings, deleteBuilding }}>
        {children}
    </BuildingContext.Provider>
);
}

export default BuildingContextProvider;
