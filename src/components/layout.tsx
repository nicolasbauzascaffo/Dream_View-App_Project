import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

/* Layout que engloba el ruteo de la Aplicación */

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
