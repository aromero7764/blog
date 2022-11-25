import React from 'react';

const Article6 = () => {
  return (
    <div id='article6' className="card article">
                   
    <div className="card-content">
        <div className="media">
            <div className="media-center">
                <img src="https://i.ibb.co/Dtmmz5q/profile-pic-2.png" 
                className="author-image" alt="Placeholder image"/>
            </div>
            <div className="media-content has-text-centered">
                <p className="title article-title">¿Qué es el Impuesto al Valor Agregado?</p>
                <p className="subtitle is-6 article-subtitle">
                    <a href="#">Mariangela Lugo</a> Noviembre 22, 2022
                </p>
            </div>
        </div>
        <div className="content article-body">
            <p>
            En fecha 29 de enero de 2020, fue publicada en Gaceta Oficial Nº 6.507 la reforma parcial de La Ley del Impuesto al Valor Agregado la cual en su Artículo 1º define que:
            </p>
           
            <blockquote><em>
               “..grava la enajenación de bienes muebles, la prestación de servicios y la importación de bienes, según se especifica en esta Ley, aplicable en todo el territorio nacional, que deberán pagar las personas naturales o jurídicas, las comunidades, las sociedades irregulares o de hecho, los consorcios y demás entes jurídicos o económicos, públicos o privados, que en su condición de importadores de bienes, habituales o no, de fabricantes, productores, ensambladores, comerciantes y prestadores de servicios independientes, realicen las actividades definidas como hechos imponibles en esta Ley.”
              </em></blockquote>
           
            <p>Fuente:  
             <a href="http://www.contraloriaestadofalcon.gob.ve/leyes/lvaloragregado.pdf"  target="_blank"
rel="noopener noreferrer"> Ley del Impuesto al Valor Agregado.</a>
            </p>
            
            <h3 className="has-text-centered">
            Alícuotas del Impuesto al Valor Agregado
            </h3>

            <p>
            El Decreto Constituyente contentivo de la Reforma Parcial del Decreto con Rango, Valor y Fuerza de Ley que establece el Impuesto al Valor Agregado vigente, fue publicado en la Gaceta Oficial N° 6.507 Extraordinario, de fecha 29 de enero de 2020 y señala en su artículo 27, que la alícuota impositiva general puede estar comprendida entre el 8% y el 16,5%, y la misma podrá ser modificada por el Ejecutivo Nacional.
            </p>
            <p>
            En esta Reforma Parcial, se incluyó una alícuota adicional, la cual puede ser modificada por el Ejecutivo Nacional, comprendida entre un límite mínimo de cinco por ciento (5%) y un máximo de veinticinco por ciento (25%), aplicable los bienes y prestaciones de servicios pagados en moneda extranjera, criptomoneda o criptoactivo distinto a los emitidos y respaldados por la República Bolivariana de Venezuela.
            </p>
            <p>
            En la Gaceta Oficial N° 41.788, de fecha 26 de diciembre de 2019, se publicó el Decreto N° 4.079, mediante el cual se fijó la alícuota impositiva general vigente, a que hace referencia el Artículo 27 antes mencionado, en dieciséis por ciento (16%), y que entró en vigencia a partir del 1° de enero de 2020.
            </p>
            
            <table>
    <thead>
      <tr>
        <th>Descripción</th>
        <th>Alícuota</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>General (Vigente desde 1°/01/2020)</td>
        <td>16%</td>
      </tr>
      <tr>
        <td>Reducida</td>
        <td>8%</td>
      </tr>
      <tr>
        <td>Exportación de bienes y servicios</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Adicional para Bienes de Consumo Suntuario</td>
        <td>15%</td>
      </tr>
      <tr>
        <td>Venta de Hidrocarburos de Empresas Mixtas a PDVSA y Filiales</td>
        <td>0%</td>
      </tr>
    </tbody>
  </table>
  <p>Fuente:  
             <a href="https://www.ojdt.com.ve/notas-de-interes/alicuotas-del-impuesto-al-valor-agregado-reforma-2020"  target="_blank"
rel="noopener noreferrer"> organización Jurisprudencia del Trabajo.</a>
            </p>
            <h3 className="has-text-centered">
            Rubros exentos y gravables del Impuesto al Valor Agregado
            </h3>

            <p>De acuerdo con el artículo 18 de la reforma parcial de la Ley de Impuesto de Valor Agregado (IVA), la venta de medicamentos, una lista de productos alimenticios, agroquímicos en Venezuela queda exenta del IVA, el cual fue fijado en un mínimo de 8% y un máximo de 16,5%, de su valor original, a discreción del poder ejecutivo.

</p>

            <figure className="image is-16by9">
            <iframe
              className="has-ratio"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/4-09mzUAxfk"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </figure>

          <p>Fuentes:  
             <a href="https://www.bancaynegocios.com/estos-son-los-productos-y-servicios-por-los-que-no-se-pagara-iva/"  target="_blank"
rel="noopener noreferrer"> Banca y Negocios</a> | <a href="https://www.youtube.com/@lacontadora"  target="_blank"
rel="noopener noreferrer"> @lacontadora</a> 
            </p>

        </div>
    </div>
</div>
  );
};

export default Article6;