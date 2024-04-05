import React from "react";
import "../styles/cartelera.css";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { useContext } from "react";
import { Context } from "../pages/cartelera";
import "../styles/cartelera.css";

/* Componente hijo que contiene las películas */

export default function Movie_section() {
  const { movies, loading } = useContext(Context);

  return (
    <div className="movie_section">
      {loading
        ? Array.from(new Array(14)).map((index) => (
            <Box key={index}>
              <Skeleton
                variant="rectangular"
                sx={{
                  height: "332px",
                  width: "161px",
                  backgroundColor: "rgba(128, 128, 128, 0.788)",
                  borderRadius: "0px 0px 6px 6px",
                }}
              />
            </Box>
          ))
        : movies.map((movie, index) => (
            <React.Fragment key={index}>
              <div className="movie_poster">
                <h2>
                  {movie.Title === "Rogue One: A Star Wars Story"
                    ? "Rouge One"
                    : movie.Title}
                </h2>
                <img src={`/src/photos/${movie.imdbID}.jpg`} alt="poster_img" />
                <button>Comprar ticket</button>
              </div>
            </React.Fragment>
          ))}
    </div>
  );
}
