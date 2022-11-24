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
                        <a className="navbar-item is-active">
                                Inicio 
                            </a>
                        <a className="navbar-item">
                                Post
                            </a>
                        <a className="navbar-item">
                                Features
                            </a>
                        <a className="navbar-item">
                                Team
                            </a>
                        <a className="navbar-item">
                                Archives
                            </a>
                        <a className="navbar-item">
                                Help
                            </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                    Account
                                </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                        Dashboard
                                    </a>
                                <a className="navbar-item">
                                        Profile
                                    </a>
                                <a className="navbar-item">
                                        Settings
                                    </a>
                                <hr className="navbar-divider"/>
                                <div className="navbar-item">
                                    Logout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
      
    );
};

export default NavBar;