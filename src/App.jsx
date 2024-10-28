import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Login from './paginas/login'
import Contactanos from './paginas/contactanos'
import PP from './paginas/paginaprincipal'
import QS from './paginas/quienes_somos'
import Registro from './paginas/registro'

export default function App() {
  return (
   <Router>
     <Routes>

       <Route exact path='/' element={<Inicio/>}/>  
       <Route exact path='/login' element={<Login/>}/> 
       <Route exact path='/contactanos' element={<Contactanos/>}/>
       <Route exact path='/Pagina_Principal' element={<PP/>}/>
       <Route exact path='/quienes_somos' element={<QS/>}/>
       <Route exact path='/registro' element={<Registro/>}/>
     </Routes>
   </Router> 
  );
}
