import React, { useState, useEffect } from "react";
import pop from "../images/pop.png";
import { Formik, Form, FormikErrors } from "formik";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import starIcon from "../images/starVector.png";
import { useNavigate } from "react-router-dom";

import "../styles/reseña.css";

interface Movies {
  value: string;
  label: string;
}

interface FormValues {
  nombre: string;
  email: string;
  reseña: string;
  pelicula: string;
}

export default function Reseña() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedMovie, setSelectedMovie] = useState<string>("Avatar");
  const [finishProcess, setfinishProcess] = useState<boolean>(false);
  const [name, setname] = useState<string>("");
  const [movieName, setmovieName] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);

  const navigate = useNavigate();

  const movies: Movies[] = [
    { value: "Avatar", label: "Avatar" },
    { value: "I Am Legend", label: "I Am Legend" },
    { value: "300", label: "300" },
    { value: "The Avengers", label: "The Avengers" },
    { value: "The Wolf of Wall Street", label: "The Wolf of Wall Street" },
    { value: "Interstellar", label: "Interstellar" },
    { value: "Game of Thrones", label: "Game of Thrones" },
    { value: "Vikings", label: "Vikings" },
    { value: "Gotham", label: "Gotham" },
    { value: "Power", label: "Power" },
    { value: "Narcos", label: "Narcos" },
    { value: "Breaking Bad", label: "Breaking Bad" },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: "#554F95",
      },
    },
  });

  /* Formulario de Reseñas se creó utilizando Formik */

  return (
    <ThemeProvider theme={theme}>
      <div
        className="reseña"
        style={{
          backgroundImage: `url(${pop})`,
          backgroundSize: "50% auto",
          backgroundPosition: "left bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          {finishProcess === false ? (
            <React.Fragment>
              <div className="reseña_section">
                <h1>Reseña de películas</h1>
                <p>Deja tu opinión</p>
              </div>
              <Formik
                initialValues={{
                  nombre: "",
                  email: "",
                  reseña: "",
                  pelicula: "Avatar",
                }}
                validate={(values: FormValues) => {
                  const errors: FormikErrors<FormValues> = {};
                  if (!values.nombre) {
                    errors.nombre = "¡Nombre requerido!";
                  } else if (!/^[\w\sáéíóúÁÉÍÓÚüÜ]{4,}$/i.test(values.nombre)) {
                    errors.nombre =
                      "El nombre debe tener al menos 4 caracteres alfanuméricos";
                  }
                  if (!values.email) {
                    errors.email = "¡Email requerido!";
                  } else if (
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(values.email)
                  ) {
                    errors.email = "Dirección de correo inválida";
                  }
                  if (!values.reseña) {
                    errors.reseña = "¡Reseña requerida!";
                  } else if (!/^[\w\s]{10,}$/i.test(values.reseña)) {
                    errors.reseña =
                      "La reseña debe tener al menos 10 caracteres";
                  }

                  return errors;
                }}
                onSubmit={(
                  values: FormValues,
                  { setSubmitting, resetForm }
                ) => {
                  setTimeout(() => {
                    resetForm();
                    setSubmitting(false);
                    setfinishProcess(true);
                    setname(values.nombre);
                    setmovieName(values.pelicula);
                    setloading(true);
                    setTimeout(() => {
                      setfinishProcess(true);
                      navigate("/");
                      setloading(false);
                    }, 4000);
                  }, 1200);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form className="formulario" onSubmit={handleSubmit}>
                    <TextField
                      className="form-input"
                      select
                      label="Película"
                      color="primary"
                      focused
                      maxRows={1}
                      InputLabelProps={{ style: { color: "white" } }}
                      name="pelicula"
                      inputProps={{ style: { color: "white" } }}
                      onChange={(e) => {
                        handleChange(e);
                        setSelectedMovie(e.target.value);
                      }}
                      onBlur={handleBlur}
                      value={values.pelicula}
                      SelectProps={{
                        style: { color: "white" },
                        MenuProps: {
                          PaperProps: {
                            style: {
                              color: "white",
                              backgroundColor: "black",
                            },
                          },
                        },
                      }}
                    >
                      {movies.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          style={{ color: "white" }}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <p></p>
                    <TextField
                      className="form-input"
                      label="Nombre"
                      multiline
                      color="primary"
                      name="nombre"
                      InputLabelProps={{ style: { color: "white" } }}
                      focused
                      maxRows={1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nombre}
                      inputProps={{ style: { color: "white" } }}
                    />
                    <p>{errors.nombre && touched.nombre && errors.nombre}</p>
                    <TextField
                      className="form-input"
                      label="Email"
                      multiline
                      name="email"
                      maxRows={1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      focused
                      color="primary"
                      InputLabelProps={{ style: { color: "white" } }}
                      inputProps={{ style: { color: "white" } }}
                    />

                    <p>{errors.email && touched.email && errors.email}</p>
                    <TextField
                      className="form-textArea"
                      label="Reseña"
                      multiline
                      name="reseña"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.reseña}
                      focused
                      InputLabelProps={{ style: { color: "white" } }}
                      rows={8}
                      inputProps={{ style: { color: "white" } }}
                      color="primary"
                    />
                    <p>{errors.reseña && touched.reseña && errors.reseña}</p>
                    <button
                      className="form-btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {loading ? <span className="loader"></span> : "Finalizar"}
                    </button>
                  </Form>
                )}
              </Formik>
            </React.Fragment>
          ) : (
            <section className="message-Box">
              <h3>Reseña de Películas</h3>
              <h2>{`Muchas gracias ${name}!`}</h2>
              <img src={starIcon} alt="star-vector" />
              <p>Tu reseña sobre la película {movieName} ha sido enviada</p>
            </section>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
