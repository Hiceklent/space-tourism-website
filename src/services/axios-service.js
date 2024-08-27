import axios from 'axios';
import endpoints from "../config/api-controller";

// GET METHOD

export const getDataDestinations = async () => {
  try {
    const respuesta = await axios.get(endpoints.destinations);
    return respuesta.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
};

export const getDataCrew = async () => {
  try {
    const respuesta = await axios.get(endpoints.crew);
    return respuesta.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
};

export const getDataTechnology = async () => {
  try {
    const respuesta = await axios.get(endpoints.technology);
    return respuesta.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
};