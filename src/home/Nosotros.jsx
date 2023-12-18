import React from "react";
import './Nosotros.css';

// Importa las imágenes
import iphoneImg from '../assets/images/iphone.jpg';
import calzadoImg from '../assets/images/calzados.jpg';
import zapatillasImg from '../assets/images/zapatillas.jpg';
import accesoriosImg from '../assets/images/accesorios.jpg';

function Nosotros() {
  // Dummy data for the cards
  const cardData = [
    {
      id: 1,
      imageSrc: iphoneImg,
      title: "iPhone 13",
      description: "El último modelo de iPhone con características innovadoras."
    },
    {
      id: 2,
      imageSrc: calzadoImg,
      title: "Zapatos Elegantes",
      description: "Encuentra zapatos elegantes para cualquier ocasión especial."
    },
    {
      id: 3,
      imageSrc: zapatillasImg,
      title: "Zapatillas Deportivas",
      description: "Descubre nuestra colección de zapatillas deportivas cómodas y modernas."
    },
    {
      id: 4,
      imageSrc: accesoriosImg,
      title: "Reloj de Moda",
      description: "Completa tu estilo con nuestro elegante reloj de moda."
    },
  ];

  return (
    <>      
      <section id="nosotros" className="padded">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {cardData.map((card) => (
              <div className="col" key={card.id}>
                <div className="card h-100">
                  <img src={card.imageSrc} className="card-img-top" alt={card.title} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <button className="btn btn-primary recolor">Ver más</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Nosotros;
