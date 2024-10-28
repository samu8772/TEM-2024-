import React from 'react'
import Menupeq from '../componentes/menupeq'
import Init from '../componentes/Init'
import { Link } from "react-router-dom";

function QS() {
  return (
    <div className='QS'>
      <Menupeq />
      <div className='qs'>
        <h2>¿Quiénes somos?</h2>
        <p>Somos tres programadores experimentados y empresarios. Encontramos la necesidad de un grupo de personas en la ciudad de Medellín. Dicha necesidad es de querer conocer información más resumida, compacta y directa sobre los distintos métodos de transporte en la metrópolis.</p>
        <p>Para obtener más información y contacto sobre nosotros puedes presionar aquí:</p>
        <Link to="/contactanos">
          <div>
            <button type="button" class="btn btn-dark">
              Contáctanos
            </button>
          </div>
        </Link>
      </div>
      <div>
        <h2>¿Para qué es nuestra página?</h2>
        <p>Nuestra página cuenta con un sistema avanzado de recopilación de información sobre los diferentes métodos de transporte que hay en Medellín. Como el Metro, Solobus, distintos tipos de circulares, taxis, entre otros. Esto para brindar una mejor movilización y conocimiento de las rutas en la ciudad de Medellín.</p>
      </div>
      <div>
        <h2>¿Para quién va dirigida nuestra página?</h2>
        <p>Nuestra página va dirigida principalmente para turistas, extranjeros y personas que se encuentren en el municipio de Medellín. Será útil para aquellos que no conozcan con exactitud las rutas, tarifas u horarios de algún tipo de transporte.</p>
      </div>
    </div>
  );
}
export default QS;