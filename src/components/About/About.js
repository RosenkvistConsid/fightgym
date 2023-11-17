import React from 'react';
import './About.css';
import pdf from '../../media/membershiprules.pdf';
import mmaClass from '../../media/class.jpeg';

const About = () => (
  <div className="about-wrapper">
    <h1>Om oss</h1>
    <h2>Örebro Fight Gym</h2>
    <div className='block'>
      <p>Under senaste åren har intresset för MMA, både som träningsform och tävlingsform växt. Därför finns nu Örebro Fight gym.</p>
    </div>
    <div className='block'>
      <p>
        Här tränar motionärer i olika åldrar, ungdomar, aktiva amatörer & proffsfighters under samma tak.
        En klubb där utveckling och gemenskap är i fokus, men även där satsande idrottare får ta plats och växa med rätt förutsättningar.
      </p>
    </div>
    <div className='block'>
      <p>Utöver MMA erbjuder även Örebro Fight Gym grappling & kickboxning för alla nivåer. Vi har både ett eget grappling program för dem som enbart vill träna grappling och även ett striking program för de som enbart vill träna striking.</p>
    </div>
    <img src={mmaClass} alt='group class teaching striking'></img>
    <div className='block'>
      <h3>Riktlinjer och stadgar</h3>
      <p><strong>En del av våra riktlinjer som står med i våra medlemsstadgar men även i våra medlemsavtal;</strong><br/></p>
      <p>
        - Hos oss tolereras ingen diskriminering.<br/>
        Till exempel gällande kön, sexualitet, etnicitet, religös eller politiskt tillhörighet etc.
      </p>
      <p>- Vi har noll tolerans mot droger.</p>
      <p>- Vi har noll tolerans mot hot och våld.</p>
      <p>Vi strävar efter en trevlig miljö för alla!</p>
      <h4><a href={pdf} target='blank'>Läs fullständiga medlemsavtalet här</a></h4>
    </div>
  </div>
);

export default About;