import React from 'react';
import './Objetivos.css';

function Objetivos() {
  return (
    <section id="objetivos" className="padded">
      <div className="container">
        <h2>Nuestros Objetivos</h2>
        <div className="objetivo">
          <h3>1. Promover la Sostenibilidad</h3>
          <p>Fomentamos la compra y venta de productos usados para reducir el impacto ambiental, contribuyendo así a un estilo de vida más sostenible. ¡Únete a nosotros en la lucha contra el desperdicio!</p>
        </div>
        <div className="objetivo">
          <h3>2. Ofrecer Variedad y Calidad</h3>
          <p>Buscamos proporcionar a nuestros clientes una amplia gama de productos nuevos y usados de alta calidad. Desde electrónicos hasta ropa, encontrarás opciones que se adapten a tus necesidades y gustos.</p>
        </div>
        <div className="objetivo">
          <h3>3. Facilitar una Experiencia Única</h3>
          <p>Nuestro objetivo es crear una plataforma que ofrezca a los usuarios una experiencia única y agradable al comprar y vender. Implementamos funciones intuitivas para hacer que tu visita sea inolvidable.</p>
        </div>
      </div>
    </section>
  );
}

export default Objetivos;