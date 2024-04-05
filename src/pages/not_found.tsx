import React from "react";
import "../styles/not_found.css";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="not_found">
      <h1>404 | Not Found</h1>
      <p>Sorry page not found</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button>Back to Home</button>
      </Link>
    </div>
  );
}
