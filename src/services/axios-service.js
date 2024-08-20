import axios from 'axios';

// GET METHOD

export const getData = async (URL_API) => {
  try {
    const respuesta = await axios.get(URL_API);
    return respuesta.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}