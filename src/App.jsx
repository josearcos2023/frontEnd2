import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainFooter from './common/MainFooter'
import MainHeader from './common/MainHeader'
import MainNav from './common/MainNav'
import Inicio from './pages/inicio'
import Tienda from './pages/Tienda'
import ProductoDetalles from './pages/ProductoDetalles'
import Carrito from './pages/Carrito'
import Pedidos from './pages/Pedidos'
/*import Clientes from './pages/Clientes'*/
import Productos from './pages/Productos';
import Consultas from './pages/Consultas'
import ConsultasDetalles from './pages/ConsultasDetalles'
import Login from './pages/Login'
import { useState } from 'react'
import SesionCerrada from './pages/SesionCerrada'
import ProtectedRoute from './utils/ProtectedRoute'

/*Nuevas rutas*/ 
import Noticias from './home/Noticias';
import QuienesSomos from './pages/QuienesSomos';
import Login2 from "./pages/Login2.jsx";
import Register from "./pages/Register.jsx";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState(null);


  const handleLogin = (data) => {
    setIsAuthenticated(true);
    console.log(data);
    setUsuario(data);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    alert("Su sesión ha sido cerrada");
  };
  return (
      <>
        <BrowserRouter>
          <MainHeader />
          <MainNav isAuthenticated={isAuthenticated} onLogout={handleLogout} usuario={usuario} />
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path="/login2" element={<Login2/>} />
            <Route path="/register" element={<Register/>} />
            <Route path='/tienda' element={<Tienda/>}/>

            <Route path='/noticias' element={<Noticias />} />
            <Route path='/nosotros' element={<QuienesSomos />} />

            <Route path="/productodetalles/:idproducto" element={<ProductoDetalles/>} />
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/pedidos' element={<Pedidos/>}/>
            {/* De Cientes a Productos */ }
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/consultas' element={<Consultas/>}/>
            <Route path='/consultasdetalles' element={<ConsultasDetalles/>}/>
            <Route path="/sesioncerrada" element={<SesionCerrada />} />
            <Route
                path="/login"
                element={<Login onLogin={(data) => handleLogin(data)} isAuthenticated={isAuthenticated} />}
            />


            <Route path="/productos" element={
              <ProtectedRoute>
                <Productos />
              </ProtectedRoute>
            }/>


          </Routes>

          <MainFooter />
        </BrowserRouter>



      </>
  )
}

export default App