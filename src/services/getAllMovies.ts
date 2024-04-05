import axios from "axios";

/* Función asíncrona para obtener todas las películas */

const getAllMovies = async () => {
  try {
    return await axios.get(
      "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
    );
  } catch (error) {
    console.log("Something is wrong getting movies!", error);
    throw error;
  }
};

export default getAllMovies;
