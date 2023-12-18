import React from 'react';
import './QuienesSomos.css';
import developer1 from '../assets/images/edilsonhuaman.jpg';
import developer2 from '../assets/images/josearcos.jpg';
import developer3 from '../assets/images/josesanchez.jpg';
import developer4 from '../assets/images/davidbalboa.jpg';
import mision from '../assets/images/nosotros1.jpg';
import mision2 from '../assets/images/nosotros2.jpg';


const QuienesSomos = () => {
    return (
      <>
        {/* SECCIÓN DE QUIENES SOMOS */}
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-5">
              <div className="row px-3">
                <div className="col-12 p-0">
                  <img className="img-fluid w-100" src={mision} alt="Misión" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
              <h1 className="text-tec display-4 m-0">
                Nuestra{' '}
                <span className="text-trade">Misión</span>
              </h1>
              <h5 className="text-muted mb-3">
                Somos una organización comprometida con la tecnología y el comercio, trabajando para impulsar el crecimiento y la innovación en ambos campos. En TEC & TRADE, nos esforzamos por abordar los desafíos actuales y futuros mediante el desarrollo de soluciones tecnológicas sostenibles y la promoción del comercio global. Creemos en la colaboración como motor de cambio y buscamos construir puentes entre la tecnología y el comercio para crear un impacto positivo en la sociedad.
              </h5>
              <ul className="list-inline">
                <li>
                  <h5>
                    <i className="fa fa-check-double text-secondary mr-3"></i>Desarrollo tecnológico sostenible
                  </h5>
                </li>
                <li>
                  <h5>
                    <i className="fa fa-check-double text-secondary mr-3"></i>Fomento del comercio global
                  </h5>
                </li>
                <li>
                  <h5>
                    <i className="fa fa-check-double text-secondary mr-3"></i>Colaboración tecnológica y comercial
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* SECCIÓN DE QUIENES SOMOS */}

        {/* SECCIÓN DE INFORMACIÓN */}
        <div className="container-fluid bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                <h1 className="text-tec display-4 m-0">
                  ¿Por qué nosotros?{' '}
                  <span className="text-trade">¿Somos confiables?</span>
                </h1>
                <h5 className="text-muted mb-4">
                  En TEC & TRADE, creemos en el poder transformador de la tecnología y el comercio para mejorar el mundo. Nos esforzamos por ser líderes en innovación y promover prácticas comerciales sostenibles. Nuestra dedicación a la excelencia nos impulsa a ofrecer soluciones tecnológicas de vanguardia que marcan la diferencia. Contamos con un equipo apasionado y comprometido que trabaja incansablemente para satisfacer las necesidades de nuestros clientes y socios comerciales. Si buscas una colaboración confiable y exitosa, ¡TEC & TRADE es la elección correcta!
                </h5>
                <div className="row py-2">
                  {/* ... Otras partes de tu código */}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="row px-3">
                  <div className="col-12 p-0">
                    <img className="img-fluid w-100" src={mision2} alt="Tecnología y Comercio" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SECCIÓN DE INFORMACIÓN */}

  
        {/* SECCIÓN DEL TEAM */}
        <div className="container mt-5 pt-5 pb-3">
        <div className="d-flex flex-column text-center mb-5">
            <h1 className="text-tec display-3 m-0">
                Conoce al equipo de{' '}
                <span className="text-trade">TEC</span>
                <span className="text-trade"> & </span>
                <span className="text-trade">TRADE</span>
            </h1>
        </div>
        <div className="row justify-content-center text-center">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="team card position-relative overflow-hidden border-0 mb-4">
                <img className="card-img-top team-img" src={developer1} alt="" />
                <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                    <h5>Edilson Huaman</h5>
                    <i>Founder & CEO</i>
                </div>
                <div className="team-social d-flex align-items-center justify-content-center bg-dark mt-3">
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="https://web.facebook.com/edilson.huamanhuanca"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="https://www.linkedin.com/in/edilson-oswaldo-huaman-huanca-78b42a298/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="https://www.instagram.com/edilson_pzk/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                </div>

                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="team card position-relative overflow-hidden border-0 mb-4">
                <img className="card-img-top team-img" src={developer2} alt="" />
                <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                    <h5>José Arcos</h5>
                    <i>Founder & CEO</i>
                </div>
                <div className="team-social d-flex align-items-center justify-content-center bg-dark mt-3">
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="https://www.linkedin.com/in/jose-david-arcos-tejeda/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                </div>

                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="team card position-relative overflow-hidden border-0 mb-4">
                <img className="card-img-top team-img" src={developer3} alt="" />
                <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                    <h5>José Sanchez</h5>
                    <i>Founder & CEO</i>
                </div>
                <div className="team-social d-flex align-items-center justify-content-center bg-dark mt-3">
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                </div>

                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="team card position-relative overflow-hidden border-0 mb-4">
                <img className="card-img-top team-img" src={developer4} alt="" />
                <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                    <h5>David Balboa</h5>
                    <i>Founder & CEO</i>
                </div>
                <div className="team-social d-flex align-items-center justify-content-center bg-dark mt-3">
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                    className="btn btn-outline-primary rounded-circle text-center mx-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                </div>

                </div>
            </div>
            </div>
        </div>
        </div>
        {/* SECCIÓN DEL TEAM */}
      </>
    );
  };
  
  export default QuienesSomos;