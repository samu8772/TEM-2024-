import React from 'react'
import Menupeq from '../componentes/menupeq'
import { Link } from "react-router-dom";
import FormularioRegistro from '../componentes/FormularioRegistro';

function Registro(){
  return (
    <div className="container">
      <Menupeq/>
      <FormularioRegistro/>
    </div>
  );
}

export default Registro