import React from 'react';

const NavBar = () => {
    return (
      
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="../">
                        <img src="https://campusvirtual.iutecp.com.ve/pluginfile.php/1/theme_eguru/logo/1664247570/logo_iutecpDIGITAL-300x103.png" alt="Logo"/>
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                    <span></span>
                    <span></span>
                    </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                    Temas
                                </a>
                            <div className="navbar-dropdown">
                               <a href='#post1' className="navbar-item">
                                ¿Qué son los impuestos?
                                    </a> 
                                 <a href='#post2' className="navbar-item">
                                ¿Qué es el ISRL?
                                    </a> 
                                <a href='#article3' className="navbar-item">
                                ¿Qué es el enriquecimiento neto?
                                    </a>
                                    <a href='#article5' className="navbar-item">
                                    Proceso de pago del ISLR
                                    </a>
                                    <a href='#article6' className="navbar-item">
                                    Impuesto al Valor Agregado
                                    </a>
                                
                            </div>
                        </div>
                        <a href='/' className="navbar-item is-active">
                                Inicio del Blog
                            </a>
                       
                        
                        
                    </div>
                </div>
            </div>
        </nav>
      
    );
};

export default NavBar;