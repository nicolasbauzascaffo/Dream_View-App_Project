import React, { useState, useEffect } from "react";
import getAllMovies from "../services/getAllMovies";
import pop from "../images/pngwing 2.png";
import Movie_section from "../components/movie_section";
import { createContext } from "react";
import "../styles/cartelera.css";

/* Interfaces del Contexto que engloba a los componentes hijos */

interface Movies {
  Title: string;
  imdbID: string;
  image: string;
}

interface ChangeContext {
  movies: Movies[];
  loading: boolean;
}

export const Context = createContext<ChangeContext>();

export default function Cartelera() {
  const [movies, setmovies] = useState<Movies[]>([]);
  const [loading, setloading] = useState<boolean>(false);

  /* UseEffect para obtener las películas
  Nota: la API da un error al dirigirse a la URL del poster de cada película; las imágenes de los posters están
  están cargadas desde el Frontend */

  useEffect(() => {
    setloading(true);
    getAllMovies()
      .then((res) => {
        if (res.status === 200) {
          setmovies(res.data);
        } else {
          console.log("Bad request, 404!");
        }
      })
      .catch((err) => {
        console.log("Error getting movies", err);
        throw err;
      })
      .finally(() => {
        setTimeout(() => {
          setloading(false);
        }, 1500);
      });
  }, []);

  return (
    <Context.Provider value={{ movies, loading }}>
      <div
        className="cartelera"
        style={{
          backgroundImage: `url(${pop})`,
          backgroundSize: "45% auto",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="cartelera_section">
          <h1>En cartelera</h1>
          <section className="container">
            <Movie_section />
          </section>
        </div>
      </div>
    </Context.Provider>
  );
}
