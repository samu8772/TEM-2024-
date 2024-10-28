import React from "react";
import { Link } from "react-router-dom";

function Menupeq() {
  return (
    <div className="header" style= {{backgroundColor:"#000eb8"}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{margin: "20px"}}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <i>
              Transportate En Medellin
            </i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"i id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Página Principal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Inicio de Sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/registro">
                  Registrate
                </Link>
              </li>
              <li>
                <Link className="nav-link active" to="/contactanos">
                  Contáctanos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/quienes_somos">
                  ¿Quiénes somos?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="¿Qué deseas ver?"
            aria-label="Search"
          />
          <button type="button" className="btn btn-dark">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Menupeq;