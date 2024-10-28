import React from 'react'
import Menupeq from '../componentes/menupeq'
import contacto from '../imagenes/contacto.png'

function Contactanos() {
  return (
    <div className='Contactanos'>
      <Menupeq />
      <div className='cont'>
        <h1>Contactanos</h1>
        <img src={contacto} alt="imagen" width={450}/>
        <div>
          <h2>Correos de trabajo:</h2>
          <p>Samuel Galeano Hincapié: samuel.galeano872@gmail.com</p>
          <p>Samuel Zuluaga Maldonado: samu11zuluaga@gmail.com</p>
        </div>
        <div>
          <h2>Instagram:</h2>
          <p>@TIMedellin</p>
        </div>
        <div>
          <h2>PQRS y preguntas:</h2>
          <p>Escríbenos al 3146702296 o al 3196030588</p>
        </div>
      </div>
      
    </div>
  );
}
export default Contactanos;