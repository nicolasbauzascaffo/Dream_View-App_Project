import React from "react";
import pop from "../images/pop.png";
import "../styles/reseña.css";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";

export default function Reseña() {
  return (
    <div
      className="reseña"
      style={{
        backgroundImage: `url(${pop})`,
        backgroundSize: "45% auto",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="reseña_section">
        <h1>Reseña de películas</h1>
        <p>Deja tu opinion</p>
      </div>
      <div>
        <Formik
          initialValues={{ nombre: "", email: "", reseña: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.nombre) {
              errors.nombre = "Nombre requerido!";
            } else if (!/^[\w\s]{4,}$/i.test(values.nombre)) {
              errors.nombre = "Nombre debe tener mínimo 4 caracteres";
            } else if (!/^[a-zA-Z\s]+$/.test(values.nombre)) {
              errors.nombre = "Solo se admiten caracteres de tipo alfabético";
            }
            if (!values.email) {
              errors.email = "Email requerido!";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(values.email)) {
              errors.email = "Dirección de correo inválida";
            }
            if (!values.reseña) {
              errors.reseña = "Reseña requerida!";
            } else if (!/^[\w\s]{10,}$/i.test(values.reseña)) {
              errors.reseña = "Reseña debe tener mínimo 10 caracteres";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
            <form className="formulario" onSubmit={handleSubmit}>
  <TextField
    className="form-input"
    label="Nombre"
    multiline
    name="nombre"
    maxRows={4}
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.nombre}
    InputProps={{
      style: { border: '2px solid #554f95' }
    }}
  />
  {errors.nombre && touched.nombre && errors.nombre}
  <TextField
    className="form-input"
    label="Email"
    multiline
    name="email"
    maxRows={4}
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.email}
    InputProps={{
      style: { border: '2px solid #554f95' }
    }}
  />
  {errors.email && touched.email && errors.email}
  <TextField
    className="form-textArea"
    label="Reseña"
    multiline
    name="reseña"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.reseña}
    InputProps={{
      style: { border: '2px solid #554f95' }
    }}
  />
  {errors.reseña && touched.reseña && errors.reseña}
  <button type="submit" disabled={isSubmitting}>
    Submit
  </button>
</form>

          )}
        </Formik>
      </div>
    </div>
  );
}
