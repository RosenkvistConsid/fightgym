import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul className="footer-links">
          <li>
            <div>
              <span className='mr-10'>Sociala medier</span>
              <a href="https://www.facebook.com/people/%C3%96rebro-Fight-Gym/100062853135030/" target='_blank' className='mr-10'><FontAwesomeIcon icon={faFacebook} /> </a>
              <a href="https://www.instagram.com/Orebro_Fightgym/" target='_blank'><FontAwesomeIcon icon={faInstagram} /> </a> <br/>
              <span className='small-text'>Följ oss på facebook och instagram</span>
            </div>
          </li>
          <li><a href='https://www.google.com/maps/search/?api=1&query=%22%C3%96rebro%20Fightgym%2C%20Radiatorv%C3%A4gen%207%2C%2070227%20%C3%96rebro%2C%20Sweden%22' target='_blank'><span className='mr-10'>Hitta hit</span> <FontAwesomeIcon icon={faMapMarkerAlt} /> </a> <br />
          <span className='small-text'>Radiatorvägen 7 <br/> 70227 Örebro</span></li>
          <li><a href="mailto:orebrofightgym@outlook.com"><span className='mr-10'>Kontakta oss</span> <FontAwesomeIcon icon={faEnvelope} /></a> <br /> <span className='small-text'>orebrofightgym@outlook.com</span></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;