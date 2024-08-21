import axios from 'axios';
import endpoints from "../config/api-controller";

// GET METHOD

export const getDestinations = async () => {
  try {
    const respuesta = await axios.get(endpoints.destinations);
    return respuesta.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
};
export const getDestinationsById = async (destinationsId) => {
  try {
    console.log("Solicitando:", endpoints.destinationsById(destinationsId));
    const { data } = await axios.get(endpoints.destinationsById(destinationsId));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const getCrew = async () => {
  try {
    const respuesta = await axios.get(endpoints.crew);
    return respuesta.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
};
export const getCrewById = async (crewId) => {
  try {
    const { data } = await axios.get(endpoints.crewById(crewId));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const getTechnology = async () => {
  try {
    const respuesta = await axios.get(endpoints.technology);
    return respuesta.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
};
export const getTechnologyById = async (technologyId) => {
  try {
    const { data } = await axios.get(endpoints.technologyById(technologyId));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};