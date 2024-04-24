import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faFirefox, faEdge, faSafari, faOpera } from '@fortawesome/free-brands-svg-icons';

const MainPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    return (
        <nav className={`circular-menu ${menuOpen ? 'open' : ''}`}>
            <input id="circular-menu" className="circular-menu__button" type="checkbox" checked={menuOpen} onChange={toggleMenu} />
            <label htmlFor="circular-menu" className="circular-menu__icon" onClick={toggleMenu}>
                <div className="hamburger hamburger-bar"></div>
                <div className="hamburger hamburger-bar"></div>
                <div className="hamburger hamburger-bar"></div>
            </label>
            {menuOpen && (
                <>
                    <a className="circular-menu__item" href="#"><FontAwesomeIcon icon={faChrome} /></a>
                    <a className="circular-menu__item" href="#"><FontAwesomeIcon icon={faFirefox} /></a>
                    <a className="circular-menu__item" href="#"><FontAwesomeIcon icon={faEdge} /></a>
                    <a className="circular-menu__item" href="#"><FontAwesomeIcon icon={faSafari} /></a>
                    <a className="circular-menu__item" href="#"><FontAwesomeIcon icon={faOpera} /></a>
                </>
            )}
        </nav>
    );
};

export default MainPage;

