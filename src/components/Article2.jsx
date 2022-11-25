import React from "react";

const Article2 = () => {
  return (
    <div id="post2" className="card article">
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
            <p className="title article-title">¿Qué es el ISRL? 🔱</p>
            <p className="subtitle is-6 article-subtitle">
              <a href="#">Niorka Martinez</a> Noviembre 24, 20222
            </p>
          </div>
        </div>
        <div className="content article-body">
          <p>
            El Impuesto Sobre la Renta (ISLR) es un arancel tributario que se
            declara y paga de manera obligatoria en los primeros tres meses del
            año (enero, febrero y marzo) al estado. Es calculado de acuerdo a
            los ingresos percibidos por el contribuyente durante el año fiscal
            anterior.
          </p>
          <p>
            Es importante destacar que aquellos ciudadanos venezolanos sujetos a
            la norma, que incumplan ya sea con la declaración o el pago oportuno
            del ISLR serán objeto de sanciones por parte de la Administración
            Aduanera y Tributaria. Estas multas oscilan de acuerdo a su gravedad
            entre las 50 y las 150 UT.
          </p>
          <h3 className="has-text-centered">
            ¿Quiénes están obligados al pago del ISLR?
          </h3>
          <p>
            El artículo 79 de la Ley de Impuesto sobre la Renta detalla que
            deben declarar el Impuesto Sobre la Renta las personas naturales,
            asalariados con ingreso anual superior a 1.000 UT y no asalariados
            con ingresos brutos mayores a 1.500 UT. No obstante, conforme a lo
            previsto en el decreto de emergencia económica actual la base para
            este cálculo será de 6.000 U.T. Igualmente todas las personas
            jurídicas deberán declarar independientemente de los ingresos
            generados.
          </p>
          <h3 className="has-text-centered">
            ¿Cómo se realiza el pago del ISLR?
          </h3>
          <figure className="image is-16by9">
            <iframe
              className="has-ratio"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/FBaZvWGnD-g"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </figure>

          <p>
            Fuentes:{" "}
            <a
              href="https://www.sunaval.gob.ve/2022/02/10/seniat-invita-a-cancelar-impuesto-sobre-la-renta/#:~:text=El%20Impuesto%20Sobre%20la%20Renta,durante%20el%20a%C3%B1o%20fiscal%20anterior."
              target="_blank"
              rel="noopener noreferrer"
            >
              SUNAVAL
            </a>{" "}
            |{" "}
            <a
              href="http://declaraciones.seniat.gob.ve/portal/page/portal/MANEJADOR_CONTENIDO_SENIAT/05MENU_HORIZONTAL/5.1ASISTENCIA_CONTRIBUYENTE/5.1.2ORIENTACION_GENERA/5.1.2.1TRAMITES_ELECTRONI/RegistroAutorizados.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              SENIAT
            </a>{" "}
          </p>

          <h3 className="has-text-centered">¿Qué es acreditar el ISLR?</h3>
          <p>
            El Impuesto acreditable es la cantidad de tributo pagado en el
            extranjero, por enriquecimientos de fuente extraterritorial, el cual
            podrá acreditarse total o parcialmente contra el Impuesto Sobre la
            Renta venezolano, dentro de los límites establecidos en las normas
            que regulan la materia.
          </p>
         
            <blockquote>
              En lo que se refiere a la legislación interna, el Código Orgánico
              Tributario establece como objetivo de las leyes evitar los efectos
              de la doble tributación internacional (artículo 11 del COT). En
              este sentido, la LISR contiene una disposición mediante la cual
              adopta el método de imputación limitada como mecanismo para evitar
              la doble imposición jurídica internacional, el cual se aplica
              tanto a las rentas gravadas con la tarifa progresiva como a las
              rentas gravadas con tarifas proporcionales.
            </blockquote>
         
          <p>
            Venezuela posee tratados firmados con diferentes países para evitar
            la Doble Tributación e Imposición Internacional.
          </p>
          <p>
            Los convenios que actualmente se encuentran vigentes han sido
            suscritos diferentes países entre los cuales tenemos: Alemania,
            Barbados, Bélgica, Canadá, Dinamarca, España, Estados Unidos,
            Francia, Indonesia, Italia, Noruega, Países Bajos, países
            pertenecientes a la Comunidad Andina, Portugal, Reino Unido,
            República Checa, Suecia, Suiza, Trinidad y Tobago, Cuba y la
            República Popular China para Evitar la Doble Tributación y Prevenir
            la Evasión Fiscal en materia de Impuesto sobre la Renta y sobre el
            Patrimonio.
          </p>

          <p>
            Fuentes:{" "}
            <a
              href="https://www.bancaynegocios.com/los-tratados-de-doble-tributacion-y-la-planificacion-fiscal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Banca y Negocios
            </a>{" "}
            |{" "}
            <a
              href="http://noticias.seniat.gob.ve/images/documentos/glosario_tributario.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Noticias SENIAT
            </a>{" "}
            |{" "}
            <a
              href="https://www.boveda.com/METODOS_PARA_EVITAR_LA_DOBLE_TRIBUTACION_EN_VENEZUELA._ALGUNOS_COMENTARIOS.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boveda.com
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article2;
