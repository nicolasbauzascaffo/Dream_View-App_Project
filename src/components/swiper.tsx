import React from "react";
import "swiper/swiper-bundle.css";
import "../styles/destacadas.css";
import { Navigation } from "swiper/modules";
import trailer from "../images/view Trailer.png";
import reseña_icon from "../images/Movie Ticket.png";
import star_icon from "../images/Star Filled.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextSlider } from "../pages/destacadas";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SwiperComponent() {
  interface Trailers {
    Title: string;
    url: string;
  }

  const trailers: Trailers[] = [
    {
      Title: "Avatar",
      url: "https://www.youtube.com/watch?v=CM79GTEm2ps",
    },
    {
      Title: "I Am Legend",
      url: "https://www.youtube.com/watch?v=TXQ7kRnFXS4",
    },
    {
      Title: "300",
      url: "https://www.youtube.com/watch?v=UrIbxk7idYA",
    },
  ];

  const { movies } = useContext(ContextSlider);

  const getTrailer = (name: string) => {
    const movieTrailer = trailers.find((movie) => movie.Title === name);
    return movieTrailer ? movieTrailer.url : "";
  };

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={1}
    >
      {movies
        .sort((a, b) => parseInt(a.imdbRating) - parseInt(b.imdbRating))
        .slice(0, 3)
        .map((movie, index) => (
          <SwiperSlide className="slide" key={index}>
            <section className="movie-slide">
              <section className="movie-rating">
                <img src={star_icon} alt="star_icon" />
                <p>{parseInt(movie.imdbRating)}/10</p>
                <p>IMDB</p>
              </section>
              <section className="movie-slide-img">
                <img src={`/src/photos/${movie.imdbID}.jpg`} alt="poster_img" />
              </section>
              <section className="movie-info">
                <section className="movie-slide-info">
                  <section className="movie-slide-info-container">
                    <h2>{movie.Title}</h2>
                    <hr style={{ width: "100%" }} />
                    <p>{movie.Plot}</p>
                  </section>
                </section>
                <section className="movie-slide-icons">
                  <section className="btn-box">
                    <Link to={getTrailer(movie.Title)}>
                      <img
                        className="icon-btn"
                        src={trailer}
                        alt="trailer-icon"
                      />
                    </Link>
                    <p>Ver Trailer</p>
                  </section>
                  <Link style={{ textDecoration: "none" }} to="/reseña">
                    <section className="btn-box">
                      <img
                        className="icon-btn"
                        src={reseña_icon}
                        alt="reseña-icon"
                      />
                      <p>Dejar reseña</p>
                    </section>
                  </Link>
                </section>
              </section>
            </section>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
