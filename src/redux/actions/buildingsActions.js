//import Buildings1 from "../data/buildings.json";
import {
  GET_BUILDINGS_FETCHING,
  GET_BUILDINGS_FULFILLED,
  GET_BUILDINGS_REJECTED,
  ADD_BUILDINGS_FETCHING,
  ADD_BUILDINGS_FULFILLED,
  ADD_BUILDINGS_REJECTED,
  DELETE_BUILDINGS_FETCHING,
  DELETE_BUILDINGS_FULFILLED,
  DELETE_BUILDINGS_REJECTED,
} from "../types/actionTypes";

/*const Buildings = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    setBuildings(Buildings1);
  }, []);*/

const getBuildingsFetching = () => ({
  type: GET_BUILDINGS_FETCHING,
});

const getBuildingsFulfilled = (payload) => ({
  type: GET_BUILDINGS_FULFILLED,
  payload,
});

const getBuildingsRejected = () => ({
  type: GET_BUILDINGS_REJECTED,
});

export const getBuildings = () => (dispatch) => {
  dispatch(getBuildingsFetching());
  return fetch("../data/buildings.json")
    .then((data) => data.json())
    .then((response) => {
      dispatch(getBuildingsFulfilled(response));
    })
    .catch(() => {
      dispatch(getBuildingsRejected());
    });
};

const addBuildingsFetching = () => ({
  type: ADD_BUILDINGS_FETCHING,
});

const addBuildingsFulfilled = (payload) => ({
  type: ADD_BUILDINGS_FULFILLED,
  payload,
});

const addBuildingsRejected = () => ({
  type: ADD_BUILDINGS_REJECTED,
});

export const addBuilding = (building) => (dispatch) => {
  dispatch(addBuildingsFetching());
  return fetch("../data/buildings.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(building),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(addBuildingsFulfilled(response));
    })
    .catch(() => {
      dispatch(addBuildingsRejected());
    });
};

const deleteBuildingsFetching = () => ({
  type: DELETE_BUILDINGS_FETCHING,
});

const deleteBuildingsFulfilled = (payload) => ({
  type: DELETE_BUILDINGS_FULFILLED,
  payload,
});

const deleteBuildingsRejected = () => ({
  type: DELETE_BUILDINGS_REJECTED,
});

export const deleteBuilding = id => dispatch => {
  dispatch(deleteBuildingsFetching());
  return fetch(`${"../data/buildings.json"}/${id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteBuildingsFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteBuildingsRejected());
    });
}