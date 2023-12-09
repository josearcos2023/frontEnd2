// Objetivos.jsx
import React from 'react';
import './Objetivos.css';
import imagen1 from '../assets/images/objetivos1.jpg';
import imagen2 from '../assets/images/objetivos2.jpg';
import imagen3 from '../assets/images/objetivos3.jpg';

function Objetivos() {
  return (
    <section id="objetivos" className="padded">
      <div className="container">
        <h2>OBJETIVOS</h2>
        <div className="objetivo-container">
          <div className="objetivo">
            <img src={imagen1} alt="Objetivo 1" className="objetivo-imagen" />
            <div className="objetivo-texto">
              <h3>
                <span className="color1">Promover la</span>{' '}
                <span className="color2">Sostenibilidad</span>
              </h3>
              <p>
                Nuestro compromiso es fomentar un entorno sostenible al
                promover la compra y venta de productos usados. Al hacerlo,
                contribuimos significativamente a la reducción del impacto
                ambiental, formando parte activa de un estilo de vida más
                sostenible. Únete a nosotros en esta noble lucha contra el
                desperdicio y haz la diferencia.
              </p>
            </div>
          </div>
          <div className="objetivo">
            <img src={imagen2} alt="Objetivo 2" className="objetivo-imagen" />
            <div className="objetivo-texto">
              <h3>
                <span className="color1">Ofrecer Variedad</span>{' '}
                <span className="color2">y Calidad</span>
              </h3>
              <p>
                Nos esforzamos por proporcionar a nuestros clientes una
                amplia gama de productos nuevos y usados de la más alta calidad.
                Desde electrónicos innovadores hasta prendas de vestir con estilo,
                encontrarás opciones que se adaptan a tus necesidades y gustos
                más exigentes. Descubre la variedad y calidad que caracterizan
                nuestra plataforma.
              </p>
            </div>
          </div>
          <div className="objetivo">
            <img src={imagen3} alt="Objetivo 3" className="objetivo-imagen" />
            <div className="objetivo-texto">
              <h3>
                <span className="color1">Facilitar una</span>{' '}
                <span className="color2">Experiencia Única</span>
              </h3>
              <p>
                Nuestra meta principal es crear una plataforma que ofrezca a
                los usuarios una experiencia de compra y venta única y
                excepcionalmente agradable. Implementamos funciones intuitivas
                para hacer que cada visita sea inolvidable y cómoda. Explora la
                diferencia con una experiencia única en nuestra plataforma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Objetivos;
