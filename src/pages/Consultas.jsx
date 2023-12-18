import React from 'react';
import img1 from '../assets/images/nueva-imagen-1.jpg';
import img2 from '../assets/images/nueva-imagen-2.jpg';
import img3 from '../assets/images/nueva-imagen-3.jpg';

const ConsultasView = () => {
  return (
    <div className="container">
      <h1 className="title_lps_beneficios text-center pt-5 mb-5" style={{ fontSize: '2.5rem' }}>
          TENEMOS LO QUE TU NEGOCIO NECESITA
      </h1>
      <div className="row justify-content-center align-items-center">
        {/* Excelente servicio posventa */}
        <div className="col-lg-3 col-sm-12 text-center">
          <div className="bs-img-square img_lps_beneficios2 text-center text-lg-left">
            <picture>
              <source srcSet={img1} media="(min-width: 1201px)" />
              <source srcSet={img1} media="(min-width: 800px)" />
              <source srcSet={img1} media="(min-width:400px)" />
              <source srcSet={img1} media="(min-width:0px)" />
              <img loading="lazy" src={img1} alt="Excelente servicio posventa Tec Trade" />
            </picture>
          </div>
          <div className="lps_box_beneficios mb-5">
            <h6 className="title_lps_beneficios_2 text-lg-left">Atención personalizada <br /> 24/7</h6>
            <p className="text_lps_beneficios_2 text-lg-left">Nos apasiona dar una atención personalizada las 24 horas del día, los 7 días de la semana. Contamos con varios canales de atención y soporte local.</p>
          </div>
        </div>

        {/* No requiere instalación */}
        <div className="col-lg-3 col-sm-12 text-center">
          <div className="bs-img-square img_lps_beneficios2 text-center text-lg-left">
            <picture>
              <source srcSet={img2} media="(min-width: 1201px)" />
              <source srcSet={img2} media="(min-width: 800px)" />
              <source srcSet={img2} media="(min-width:400px)" />
              <source srcSet={img2} media="(min-width:0px)" />
              <img loading="lazy" src={img2} alt="No requiere instalación Tec Trade" />
            </picture>
          </div>
          <div className="lps_box_beneficios mb-5">
            <h6 className="title_lps_beneficios_2 text-lg-left">Sin complicaciones, <br />sin instalación</h6>
            <p className="text_lps_beneficios_2 text-lg-left">La flexibilidad que necesitas la tiene Tec Trade. Es un sistema moderno 100% online. No requiere instalación en equipos y funciona desde cualquier dispositivo con acceso a internet.</p>
          </div>
        </div>

        {/* Sin contratos a largo plazo */}
        <div className="col-lg-3 col-sm-12 text-center">
          <div className="bs-img-square img_lps_beneficios2 text-center text-lg-left">
            <picture>
              <source srcSet={img3} media="(min-width: 1201px)" />
              <source srcSet={img3} media="(min-width: 800px)" />
              <source srcSet={img3} media="(min-width:400px)" />
              <source srcSet={img3} media="(min-width:0px)" />
              <img loading="lazy" src={img3} alt="Sin contratos a largo plazo Tec Trade" />
            </picture>
          </div>
          <div className="lps_box_beneficios mb-5">
            <h6 className="title_lps_beneficios_2 text-lg-left">Libertad para tu <br />negocio</h6>
            <p className="text_lps_beneficios_2 text-lg-left">Podrás disfrutar de todos los beneficios de Tec Trade sin amarrarte a contratos de largo plazo. Confiamos en nuestro excelente producto y calidad de atención para atenderte por mucho tiempo.</p>
          </div>
        </div>

      </div>
      {/* fin row*/}
    </div>
  );
};

export default ConsultasView;
