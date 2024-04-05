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
  const [movies, setMovies] = useState<Movies[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        if (res.status === 200) {
          setMovies(res.data);
          if (res.data.length > 0) {
            setBackgroundImage(res.data[0].Images[1]);
          }
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

  const handleSlideChange = (index: number) => {
    const movie = movies[index];
    if (movie) {
      setBackgroundImage(movie.Images[1]);
    }
  };

  return (
    <ContextSlider.Provider value={{ movies }}>
      <div
        className="destacados"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <SwiperComponent onSlideChange={handleSlideChange} />
      </div>
    </ContextSlider.Provider>
  );
}
