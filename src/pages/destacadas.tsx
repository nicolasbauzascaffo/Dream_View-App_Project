import React, { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import getAllMovies from "../services/getAllMovies";
import "../styles/destacadas.css";
import { createContext } from "react";
import SwiperComponent from "../components/swiper";

interface Movies {
  Title: string;
  imdbID: string;
  image: string;
  imdbRating: string;
  Plot: string;
  Images: string;
}

interface ChangeContext {
  movies: Movies[];
}

export const ContextSlider = createContext<ChangeContext>();

export default function Destacadas() {
  /* Interfaces de las películas */

  /* UseEffect y useState para obtener las películas */

  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        if (res.status === 200) {
          setMovies(res.data);
        } else {
          console.log("Bad request, 404!");
        }
      })
      .catch((err) => {
        console.log("Error getting movies", err);
      });
  }, []);

  /* Se filtran 3 películas mas rankeadas y se mapean con Swiper para crear el carrousel
  Nota: las imágenes están descargadas en formato jpg ya que la URL de la api del poster de cada película da error.
  */

  return (
    <ContextSlider.Provider value={{ movies }}>
      <div
        className="destacados"
      >
        <SwiperComponent />
      </div>
    </ContextSlider.Provider>
  );
}
