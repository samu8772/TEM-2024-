import React from 'react'
import { Link } from 'react-router-dom'
import si from '../imagenes/siisoo.jpg'

function Pie_de_pagina(){
  return (
    <div className="footer">
      <div className="container fluid">
        <div className="row mx-auto">
          <div className="text-center mx-auto">
            <h2 className="encabezado mt-5 pt-4">Transportate en Medellin</h2>
            <img src={si} alt="imagen" width={450}/>
            <h4 className="encabezado">
              Conocenos mas
            </h4>
            <p className="px-3">
              <small>
                contenido de la página
              </small>
              </p>
              <section className="text-center pb-4">
              <Link to="" className="btn btn-primary">Mas informacion</Link>
              </section>
              </div>
              <div className="text-center mx-auto">
              <h2 className="encabezado mt-3 pt-3">
              <span className="text-primary">TEM Siempre te acompaña</span>
              </h2>
            <p className="px-3">
              <small>
                <strong>
                  Sobre Nosotros
                </strong>
              </small>
            </p>
            <section className="text-center pb-4">
              <Link to="/contactanos" className="btn btn-primary">
                Contactanos
              </Link>
            </section>
            <div id="copyright">
              <hr/>
              <p><small></small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pie_de_pagina;