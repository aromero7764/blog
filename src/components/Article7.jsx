import React from 'react';

const Article7 = () => {
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
          <p className="title article-title">Proceso de pago 💸</p>
          <p className="subtitle is-6 article-subtitle">
            <a href="#">Niorka Martinez</a> Noviembre 22, 20222
          </p>
        </div>
      </div>
      <div className="content article-body">
        <p>
        El pago de impuestos se realizará con base al impuesto declarado dividido entre días hábiles y pago de anticipo de 1% sobre las ventas diarias de los contribuyentes especiales, con el excepción del sector financiero y asegurador que será de 2%.– El anticipo del pago del IVA se realizará con base al impuesto declarado semanalmente dividido entre los días hábiles de la semana.
        </p>
        <p>
          En el siguiente video podemos ver las formalidades para realizar dicho pago
       </p>
        <figure className="image is-16by9">
          <iframe
            className="has-ratio"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/DvH_LyMtT3Q"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </figure>

        <p>
          Fuente:{" "}
          <a
            href="https://www.youtube.com/@marthaeconomistaemprendedor"
            target="_blank"
            rel="noopener noreferrer"
          >
            @marthaeconomistaemprendedor
          </a>{" "}
        </p>

        <h3 className="has-text-centered">¿Quiénes son considerados contribuyentes?</h3>
        <p>
        Al IVA podrán estar sujetos tanto las personas naturales como las jurídicas, incluidos los consorcios u otra entidad económica, que realicen actividades sujetas relativas a la prestación de servicios a título oneroso, a la venta de bienes muebles corporales o a la importación definitiva de bienes.
        </p>
        <p>
         <b>Los contribuyentes formales</b>, son aquellos que realizan exclusivamente hechos que califican como sujetos al IVA, pero que gozan de la exención o exoneración del tributo. 
        </p>
        <p>
        Venden bienes o prestan servicios sujetos al IVA, pero gozan de la dispensa tributaria sobre todas sus operaciones sujetas.
        </p>
        <p>
        Se trata de quienes realizan exclusivamente operaciones exentas o exoneradas del IVA, tal es el caso de una droguería que exclusivamente comercialice productos farmacéuticos que están exentos del IVA o el caso del prestador exclusivamente del servicio de transporte terrestre de pasajeros, que también tiene exención del tributo.
        </p>
        <p>
          <b>Los Contribuyentes Ordinarios</b>,  que califican como tales una vez que realizan hechos imponibles gravados respecto al tributo en cuestión. Todo aquél que realice hechos imponibles del IVA, que no sean de forma exclusiva relativos a operaciones exentas o exoneradas, calificará como contribuyente ordinario del tributo.
        </p>

        <p>
          <b>Los contribuyentes ocasionales</b>, que se atribuye a los que no siendo ni contribuyentes ordinarios, ni contribuyentes formales, realizan importaciones de bienes para el consumo propio. Es decir, no venden, ni prestan servicios independientes sujetos al IVA, pero sí hacen importaciones de bienes
        </p>
        <p>
        Es decir, estos últimos no realizan operaciones sujetas al IVA, con la excepción de la importación de bienes. Estando obligados a pagar el IVA al estado en dicha operación. En sus demás compras pagan el IVA al proveedor. Y en todos los casos, no tienen derecho a crédito fiscal, y no están obligados a realizar declaración del tributo.
        </p>

        <p>
          Información adicional en:
        </p>
        
        <figure className="image is-16by9">
          <iframe
            className="has-ratio"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/sYMlMEqbRlk"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </figure>

        <p>
          Fuentes:{" "}
          <a
            href="https://www.youtube.com/watch?v=sYMlMEqbRlk"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mariarosales271
          </a>{" "}
          |{" "}
          <a
            href="https://gerenciaytributos.blogspot.com/2012/06/tipos-de-contribuyentes-y-no.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gerencia y Tributos
          </a>{" "}
         
        </p>
      </div>
    </div>
  </div>
  );
};

export default Article7;