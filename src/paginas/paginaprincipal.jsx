import React from 'react'
import Menu from '../componentes/menu'
import Init from '../componentes/Init'
import metro from '../imagenes/metro.png'
import solobus from '../imagenes/solobus.png'
import taxi from '../imagenes/taxi.png'

function PP() {
  return (
    <div className='login'>
      <Menu/>
      <div>
        <h1>MEDIOS DE TRANSPORTE</h1>
      </div>
      <div>
        <img src={metro} alt="imagen" width={220}/>
        <h2>Metro</h2>
      </div>
      <div>
        <img src={solobus} alt="imagen" width={220}/>
        <h2>Solobus</h2>
      </div>
      <div>
        <img src={taxi} alt="imagen" width={220}/>
        <h2>Taxi</h2>
      </div>
    </div>
  );
}
export default PP;