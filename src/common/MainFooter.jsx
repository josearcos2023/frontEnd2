import './MainFooter.css';

function MainFooter() {
  return (
    <footer id="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="src/assets/images/logooo.png" alt="Logo" width="200" height="150" className="logo" />
            <p>Renueva tu estilo, Compra Ahora!</p>
          </div>
          <div className="col-md-4">
            <h4>Ubicación</h4>
            <p><i className="fas fa-map-marker-alt"></i> Av. Cascanueces, Santa Anita</p>
            <p><i className="fas fa-phone-alt"></i> +51 961201284</p>
            <p><i className="fas fa-envelope"></i> tec&trade@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h4>Conocer más</h4>
            <p><i className="fas fa-greater-than"></i> Inicio</p>
            <p><i className="fas fa-greater-than"></i> Nosotros</p>
            <p><i className="fas fa-greater-than"></i> Productos</p>
          </div>
        </div>
        <hr />
        <p className="text-center">Todos los derechos reservados &copy; 2023</p>
      </div>
    </footer>
  );
}

export default MainFooter;
