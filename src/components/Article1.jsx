import React from 'react';

const Article1 = () => {
    return (
        <div id='post1' className="card article">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content has-text-centered">
                                    <p className="title article-title">¿Qué son los impuestos?</p>
                                    <div className="tags has-addons level-item">
                                        <span className="tag is-rounded is-info">@pmartinez & @marian</span>
                                        <span className="tag is-rounded">Nov 24, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="content article-body">
                                <p>Una parte de los recursos económicos que utilizan las Administraciones públicas para su funcionamiento, y cubrir distintas necesidades en la población, proviene del dinero que las personas y empresas están obligados a pagar en forma de impuestos.</p>
                                <p>La mayoría de las veces no somos conscientes de ello, los impuestos son una parte muy importante de las transacciones financieras que realizamos a diario. Cuando pagamos la compra en los abastos, licorería, supermercados, cuando compramos una casa, entre otros, estamos contribuyendo con una porción de nuestro dinero al funcionamiento de la administración pública de esa locación.</p>
                                <h3 className="has-text-centered">¿Qué es esto que pagamos?</h3>
                                <p> Esto que pagamos vienen a ser los impuestos, entendiendo los impuestos como aquellas cantidades de dinero que una persona o empresa está obligada a pagar a favor del Servicio Nacional Integrado de Administración Aduanera y Tributaria (SENIAT) para contribuir con la financiación del gasto y la inversión pública en el lugar donde vive. </p>
                                <img src="https://consultasvenezuela.com/wp-content/uploads/2020/04/seniat.jpg" alt="foto seniar" />
                            </div>
                        </div>
                    </div>
    );
};

export default Article1;