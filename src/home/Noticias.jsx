import noticia1Imagen from '../assets/images/noticia1.jpg';
import noticia2Imagen from '../assets/images/noticia2.jpg';
import noticia3Imagen from '../assets/images/noticia3.jpg';
import './Noticias.css';

function Noticias() {
  return (
    <>
      <section id="noticias" className="padded">
        <div className="container">
          <h2>Noticias</h2>
          <div className="row">
            <article className="col">
              <img src={noticia1Imagen} alt="Noticia 1" className="noticia-imagen" />
              <h3>El auge del comercio online de productos usados</h3>
              <p>El mercado de productos usados en línea está experimentando un crecimiento significativo. Con la creciente conciencia ambiental y la búsqueda de opciones económicas, más personas están recurriendo a plataformas en línea para comprar y vender productos usados, desde dispositivos electrónicos hasta ropa y muebles.</p>
              <p>Este cambio en el comportamiento del consumidor está impulsando la economía circular y brindando oportunidades para la reutilización y el reciclaje. Descubre cómo el comercio online de productos usados está transformando la forma en que compramos y vendemos.</p>
            </article>
            <article className="col">
              <img src={noticia2Imagen} alt="Noticia 2" className="noticia-imagen" />
              <h3>Consejos para comprar ropa de segunda mano en línea</h3>
              <p>La compra de ropa de segunda mano en línea puede ser una excelente manera de obtener prendas de calidad a precios asequibles. Sin embargo, es importante seguir algunos consejos para garantizar una experiencia de compra exitosa. Desde la verificación de la calidad hasta la investigación de las marcas, descubre cómo hacer compras inteligentes de ropa de segunda mano en línea.</p>
              <p>Explora las plataformas populares y aprende a identificar las mejores ofertas sin comprometer la calidad. ¡Encuentra tu próximo tesoro de moda de manera sostenible!</p>
            </article>
            <article className="col">
              <img src={noticia3Imagen} alt="Noticia 3" className="noticia-imagen" />
              <h3>El impacto ambiental positivo del comercio online de productos usados</h3>
              <p>El comercio online de productos usados no solo es beneficioso para el bolsillo, sino también para el medio ambiente. Descubre cómo la reutilización de productos contribuye a reducir la cantidad de residuos textiles y electrónicos, disminuyendo así la huella ambiental.</p>
              <p>Lee historias inspiradoras de personas que han adoptado un enfoque sostenible al comprar y vender productos usados. Únete al movimiento de compras conscientes y descubre cómo tu elección puede marcar la diferencia.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Noticias;
