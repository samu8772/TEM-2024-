import React from "react";
import Designer from "../imagenes/Designer.jpeg";
import { Link } from "react-router-dom";

function Portada() {
  return (
    <div className="container" style={{ backgroundColor: "#ffffff"}}>
      <div className="row mt-3">
        <img
          src={Designer}
          className="rounded mx-auto d-block"
          alt="logo"
          style={{ maxWidth: "600px" }}
        ></img>
        <div className="mx auto">
          <p className="text-center" pb-4>Tu guía de transporte: fácil, rápido y accesible.</p>
        </div>

        <Link to="/registro">
          <div class="d-grid gap-2 col-6 mx-auto pb-1">
            <button type="button" class="btn btn-dark">
              Registrarse
            </button>
          </div>
        </Link>
        <Link to="/login">
          <div class="d-grid gap-2 col-6 mx-auto pb-3">
            <button type="button" class="btn btn-dark">
              Iniciar Sesión
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Portada;
