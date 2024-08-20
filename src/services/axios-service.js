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
export const getdestinationsId = async (destinations) => {
  try {
    const { data } = await axios.get(endpoints.destinationsId(destinations));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
/*export const getData = async () => {
  try {
    const respuesta = await axios.get(endpoints.crew);
    return respuesta.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
};
export const getcrewById = async (crew) => {
  try {
    const { data } = await axios.get(endpoints.crew(crew));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const getData = async () => {
  try {
    const respuesta = await axios.get(endpoints.technology);
    return respuesta.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
};
export const gettechnology = async (technology) => {
  try {
    const { data } = await axios.get(endpoints.technology(technology));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};*/