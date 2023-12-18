import React from 'react';
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
            <article className="col-md-6 col-lg-4">
              <img src={noticia1Imagen} alt="Noticia 1" className="noticia-imagen" />
              <div className="noticia-contenido">
                <h3>El auge del comercio online de productos usados</h3>
                <p>El mercado de productos usados en línea está experimentando un crecimiento significativo. Con la creciente conciencia ambiental y la búsqueda de opciones económicas, más personas están recurriendo a plataformas en línea para comprar y vender productos usados, desde dispositivos electrónicos hasta ropa y muebles.</p>
                <p>Este cambio en el comportamiento del consumidor está impulsando la economía circular y brindando oportunidades para la reutilización y el reciclaje. Descubre cómo el comercio online de productos usados está transformando la forma en que compramos y vendemos.</p>
              </div>
            </article>
            <article className="col-md-6 col-lg-4">
              <img src={noticia2Imagen} alt="Noticia 2" className="noticia-imagen" />
              <div className="noticia-contenido">
                <h3>Consejos para comprar ropa de segunda mano en línea</h3>
                <p>La compra de ropa de segunda mano en línea puede ser una excelente manera de obtener prendas de calidad a precios asequibles. Sin embargo, es importante seguir algunos consejos para garantizar una experiencia de compra exitosa. Desde la verificación de la calidad hasta la investigación de las marcas, descubre cómo hacer compras inteligentes de ropa de segunda mano en línea.</p>
                <p>Explora las plataformas populares y aprende a identificar las mejores ofertas sin comprometer la calidad. ¡Encuentra tu próximo tesoro de moda de manera sostenible!</p>
              </div>
            </article>
            <article className="col-md-6 col-lg-4">
              <img src={noticia3Imagen} alt="Noticia 3" className="noticia-imagen" />
              <div className="noticia-contenido">
                <h3>El impacto ambiental positivo del comercio online de productos usados</h3>
                <p>El comercio online de productos usados no solo es beneficioso para el bolsillo, sino también para el medio ambiente. Descubre cómo la reutilización de productos contribuye a reducir la cantidad de residuos textiles y electrónicos, disminuyendo así la huella ambiental.</p>
                <p>Lee historias inspiradoras de personas que han adoptado un enfoque sostenible al comprar y vender productos usados. Únete al movimiento de compras conscientes y descubre cómo tu elección puede marcar la diferencia.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="area_plantillas">
      <div className="container">
        <h3 className="title_lps_slider text-center mb-5">¡Empresas Aliadas!</h3>
        <div className="row justify-content-center align-items-center mt-2">
          <div className="col-lg-4 col-sm-12 mt-3">
            <a href="https://www.limdo.com.pe/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/16738/4/limdo_cte.png?387&amp;time=1702869603"
                className="img-fluid"
                alt="Casos-de-éxito-Bsale"
              />
              <h4 className="title_plantillas_clientes">
                Limdo<i className="fas fa-external-link-alt pl-2"></i>
              </h4>
            </a>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <a href="https://www.pranastoreperu.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/16738/4/prana_cte.png?387&amp;time=1702869603"
                className="img-fluid"
                alt="Casos-de-éxito-Bsale"
              />
              <h4 className="title_plantillas_clientes">
                Prana Store<i className="fas fa-external-link-alt pl-2"></i>
              </h4>
            </a>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <a href="https://www.sweetshopsbrianna.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/16738/4/sweet_cte.png?387&amp;time=1702869603"
                className="img-fluid"
                alt="Casos-de-éxito-Bsale"
              />
              <h4 className="title_plantillas_clientes">
                Sweet Shop Brianna<i className="fas fa-external-link-alt pl-2"></i>
              </h4>
            </a>
          </div>
        </div>
        <div className="row justify-content-center align-items-center pb-5 pt-5">
          <div className="col-lg-4 col-sm-12 mt-3">
            <a href="https://www.coshupet.pe/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/16738/4/coshu_cte.png?387&amp;time=1702869603"
                className="img-fluid"
                alt="Casos-de-éxito-Bsale"
              />
              <h4 className="title_plantillas_clientes">
                Coshu pet<i className="fas fa-external-link-alt pl-2"></i>
              </h4>
            </a>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <a href="https://www.beauty-outletshop.com/" rel="noopener noreferrer">
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/16738/4/beauty_cte.png?387&amp;time=1702869603"
                className="img-fluid"
                alt="Casos-de-éxito-Bsale"
              />
              <h4 className="title_plantillas_clientes">
                Beauty Outlet Shop<i className="fas fa-external-link-alt pl-2"></i>
              </h4>
            </a>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <a href="https://www.pipposshop.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/16738/4/pipposshop_cte.png?387&amp;time=1702869603"
                className="img-fluid"
                alt="Casos-de-éxito-Bsale"
              />
              <h4 className="title_plantillas_clientes">
                Pippo's Shop<i className="fas fa-external-link-alt pl-2"></i>
              </h4>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Noticias;
