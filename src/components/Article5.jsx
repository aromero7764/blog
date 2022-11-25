import React from 'react';

const Article5 = () => {
  return (
    <div id="article5" className="card article">
    <div className="card-content">
      <div className="media">
        <div className="media-center">
          <img
            src="https://i.ibb.co/Xskcdqt/profile-pic-1.png"
            className="author-image"
            alt="Placeholder image"
          />
        </div>
        <div className="media-content has-text-centered">
          <p className="title article-title">Proceso de pago del ISLR 💰</p>
          <p className="subtitle is-6 article-subtitle">
            <a href="#">Niorka Martinez</a> Noviembre 23, 20222
          </p>
        </div>
      </div>
      <div className="content article-body">
        <p>
          En el siguiente esquema podemos ver como es el proceso para realizar el pago del ISLR en 7 sencillos pasos:
        </p>
        <img src="https://i.ibb.co/FsFsP8d/DV7-ZRDMWAAAirdp.jpg" alt="pago islr" />
        <p>
          Fuente:{" "}
          <a
            href="https://twitter.com/seniat_oficial/status/967753296885747712?lang=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            @SENIAT_Oficial
          </a>
          </p>
        
        
        <h3 className="has-text-centered">
        Plazo de pago del ISLR
        </h3>
        <p>
        Se ha hecho una norma que los contribuyentes declaran definitivamente sus rentas y pagan el tributo en el primer trimestre del año. teniendo como fecha máxima de declaración y pago del ISLR el 31 de marzo de todos los años, aunque siempre esta sujeto al calendarios de obligaciones fiscales que publica el SENIAT.


        </p>
        <h3 className="has-text-centered">
        Exenciones del ISLR
        </h3>
        <p>
        En el siguiente video la Youtuber <a href="https://www.youtube.com/@angellymora8677" target="_blank"
            rel="noopener noreferrer">Angelly Mora</a>, nos da una explicación muy clara sobre las exenciones y exoneraciones del ISLR


        </p>
        <figure className="image is-16by9">
          <iframe
            className="has-ratio"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/pMHj22Nm3QE"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </figure>

        <p>
          Fuentes:{" "}
          <a
            href="http://www.ctintegrales.com/pdf/ISLR05_EXENCIONES_EXONERACIONES.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            LISLR
          </a>{" "}
          |{" "}
          <a
            href="https://www.youtube.com/@angellymora8677"
            target="_blank"
            rel="noopener noreferrer"
          >
            @angellymora8677
          </a>{" "}
        </p>

        <h3 className="has-text-centered">Importancia para del ISLR para la Nación</h3>
        <p>
        Los impuestos son una de las más importantes fuentes de ingresos para el gobierno nacional, estos ingresos son posteriormente reinvertidos en educación, salud, infraestructura, justicia y seguridad, así como otros temas fundamentales para el desarrollo del país.


        </p>
        <img src="https://i.ibb.co/LzMmtPf/Doi-Mxp-VWw-AAh06t.jpg" alt="importancia islr" />
        <p>
          Fuente:{" "}
          <a
            href="http://declaraciones.seniat.gob.ve/portal/page/portal/PORTAL_SENIAT"
            target="_blank"
            rel="noopener noreferrer"
          >
            SENIAT
          </a>
        </p>
      </div>
    </div>

  </div>
  );
};

export default Article5;