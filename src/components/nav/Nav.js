import React, { useState } from 'react';
import './nav.css';
import logo from '../../media/logo.jpg';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="nav">
            <div id='menu-wrapper'>
                <div>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="hamburger-icon" onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul className={showMenu ? 'show' : ''}>
                    <li>
                        <div className="dropdown-container">
                            <span className='dropdown'> <Link to="/groups/top">Vi erbjuder</Link></span>
                            <ul className="dropdown-list">
                                <li><Link to="/groups/MMA-nyborjare"> MMA nybörjare</Link></li>
                                <li><Link to="/groups/MMA-ungdom-nyborjare"> MMA ungdom nybörjare</Link></li>
                                <li><Link to="/groups/MMA-fortsattare"> MMA fortsättare</Link></li>
                                <li><Link to="/groups/MMA-team"> MMA team</Link></li>
                                <li><Link to="/groups/Kickboxning"> Kickboxning</Link></li>
                                <li><Link to="/groups/Grappling"> Grappling</Link></li>
                                <li><Link to="/groups/Event"> Event</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to="/training">Träning</Link> </li>
                    <li><Link to="/about">Om oss</Link></li>
                    <li><Link to="/schedule">Schema</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;