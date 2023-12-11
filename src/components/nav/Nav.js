import React, { useState } from 'react';
import './nav.css';
import logo from '../../media/logo.jpg';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
      setShowMenu(false);
      
    }

    return (
        <div className="nav">
            <div id='menu-wrapper'>
                <div>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="hamburger-icon" onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul className={showMenu ? 'show' : ''}>
                    <li>
                        <div className="dropdown-container">
                            <span className='dropdown'> <Link to="/groups/top" onClick={toggleMenu}>Vi erbjuder</Link></span>
                            <ul className={`dropdown-list ${showMenu ? '' : 'hidden'} dropdownlist`}>
                                <li><Link to="/groups/MMA-nyborjare" onClick={closeMenu}> MMA nybörjare</Link></li>
                                <li><Link to="/groups/MMA-ungdom-nyborjare" onClick={closeMenu}> MMA ungdom nybörjare</Link></li>
                                <li><Link to="/groups/MMA-fortsattare" onClick={closeMenu}> MMA fortsättare</Link></li>
                                <li><Link to="/groups/MMA-team" onClick={closeMenu}> MMA team</Link></li>
                                <li><Link to="/groups/Kickboxning" onClick={closeMenu}> Kickboxning</Link></li>
                                <li><Link to="/groups/Grappling" onClick={closeMenu}> Grappling</Link></li>
                                <li><Link to="/groups/Event" onClick={closeMenu}> Event</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li onClick={closeMenu}><Link to="/training">Träning</Link> </li>
                    <li onClick={closeMenu}><Link to="/about">Om oss</Link></li>
                    <li onClick={closeMenu}><Link to="/schedule">Schema</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;