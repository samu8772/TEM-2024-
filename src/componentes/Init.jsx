import React from 'react'
import '../estilos/index.css'
import Pie_de_pagina from '../componentes/Pie_de_pagina'
import {Link } from "react-router-dom"

function Init(){
  return (
    <div className='app'>
      <header className='header'>
        <div className='login-section'>
          <h2>Iniciar Sesión</h2>
          <form>
            <div>
              <label>Usuario:</label>
              <input type="text" name="username@gmail.com"></input>
            </div>
            <div>
              <label>Contraseña:</label>
              <input type="password" name="password"></input>
            </div>
            <Link to="/Pagina_Principal">
              <button type="submit" >Inicia Sesión</button>
            </Link>
            
          </form>
        </div>
        <div className='info-section'>
          <h2>Como funcionamos</h2>
          <p>Esta página utiliza un sistema avanzado de búsqueda y recopilación de información desde distintas páginas oficiales de medios de transporte para brindar una ruta, hora, ubicación y lugar de manera exacta para que puedas llegar seguro a tu destino bajo cualquier metodo de transporte.</p>
        </div>
      </header>
      <Pie_de_pagina />
    </div>
  );
}

export default Init;