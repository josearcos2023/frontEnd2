import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainFooter from './common/MainFooter'
import MainHeader from './common/MainHeader'
import MainNav from './common/MainNav'
import Inicio from './pages/inicio'
import Inversiones from './pages/Inversiones'
import Empleados from './pages/Empleados'
import Proveedores from './pages/Proveedores'
import Tienda from './pages/Tienda'
import ProductoDetalles from './pages/ProductoDetalles'
import Carrito from './pages/Carrito'
import Seleccionados from './pages/Seleccionados'
import Pedidos from './pages/Pedidos'
/*import Clientes from './pages/Clientes'*/
import Productos from './pages/Productos';
import Consultas from './pages/Consultas'
import ConsultasDetalles from './pages/ConsultasDetalles'
import Login from './pages/Login'
import Directores from './pages/Directores'
import { useState } from 'react'
import Escritorio from './pages/Escritorio'
import SesionCerrada from './pages/SesionCerrada'
import ProtectedRoute from './utils/ProtectedRoute'

/*Nuevas rutas*/ 
import Noticias from './home/Noticias';
import QuienesSomos from './pages/QuienesSomos';



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
            <Route path='/empleados' element={<Empleados/>}/>
            <Route path='/proveedores' element={<Proveedores/>}/>
            <Route path='/tienda' element={<Tienda/>}/>

            <Route path='/noticias' element={<Noticias />} />
            <Route path='/nosotros' element={<QuienesSomos />} />

            <Route path="/productodetalles/:idproducto" element={<ProductoDetalles/>} />
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/seleccionados' element={<Seleccionados/>}/>
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

            <Route path="/directores" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Directores />
              </ProtectedRoute>
            } />
            <Route path="/escritorio" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Escritorio />
              </ProtectedRoute>
            } />

            <Route path="/productos" element={
              <ProtectedRoute>
                <Productos />
              </ProtectedRoute>
            }/>

            <Route path="/inversiones" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Inversiones />
              </ProtectedRoute>
            } />


          </Routes>

          <MainFooter />
        </BrowserRouter>



      </>
  )
}

export default App