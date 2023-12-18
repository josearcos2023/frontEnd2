import banner1 from '../assets/images/carrusel1.jpg';
import banner2 from '../assets/images/carrusel2.jpg';
import banner3 from '../assets/images/carrusel3.jpg';

import './MainBanner.css';

function MainBanner() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="carousel-title">Descubre las Últimas Tendencias</h5>
        <p className="carousel-description">Explora nuestra colección de productos de alta calidad y estilo único.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="carousel-title">Ofertas Exclusivas</h5>
        <p className="carousel-description">Aprovecha nuestras ofertas exclusivas y encuentra lo que necesitas al mejor precio.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="carousel-title">Envío Rápido y Seguro</h5>
        <p className="carousel-description">Entregamos tus productos de manera rápida y segura, para que disfrutes cuanto antes.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default MainBanner