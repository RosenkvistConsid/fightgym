import React from 'react';
import './Home.css';
import news from '../../media/news.json';

const Home = () => {
  const Article = ({ title, info }) => (
    <div className="article">
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: info }}></p>
    </div>
  );

  return (
    <div className="Home">
      <section>
        <h1>MMA</h1>
        <h2>EN AV VÄRLDENS MEST SNABBAST VÄXANDE SPORTER</h2>
        <p>
          På Örebro Fightgym erbjuder vi kampsporten MMA, Mixed Martial Arts. <br />
          Allt fler har börjat upptäcka MMA både som motionsform och som tävlingsidrott. <br />
          MMA har inslag från såväl boxning, thaiboxning, brottning och submission wrestling.
          Det är en mix av taktik, teknik, kondition och styrka. Oavsett om du vill komma i form
          och träna en varierande träningsform eller om du har som mål att en dag tävla i buren,
          så är vi rätt klubb för dig.
        </p>
        <p>Vi erbjuder även kickboxning & grappling.</p>
        <div id='first-image'>
        </div>
      </section>
      <section>
        <h2>Nyheter</h2>
        <div className="article-list">
          {news.map((article, index) => (
            <Article key={index} {...article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;