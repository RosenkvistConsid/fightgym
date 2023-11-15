import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import armbar from '../../media/armbar.jpeg';
import advanced from '../../media/fight.jpeg';
import groundpound from '../../media/groundpound2.jpeg';
import striking from '../../media/kick.jpeg';
import grappling from '../../media/cagewrestling.jpeg';
import './Groups.css';

const Groups = (props) => {
  const { group } = useParams();

  useEffect(() => {
    if (group) {
      const targetElement = document.getElementById(group);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [group]);

  return (
    <div id="outmost-wrapper">
      <h1>Grupper</h1>
      <div className='group-wrapper' id="MMA-nyborjare">
        <h2>MMA NYBÖRJARE</h2>
        <p>
          Från året man fyller 15 år, ingen förkunskap krävs. <br/>
          En kurs där man får lära sig grunderna i MMA. <br/>
          Variationsrik och allsidig träning för dig som inte har någon tidigare erfarenhet av MMA och/eller för dig som tränat 1 termin och vill ha mer grunder. <br/>
          Striking, brottning och grappling. Vårt upplägg för MMA kräver att du tränar både striking-passen och grappling-passen utöver MMA passen, då dessa lägger en grund tillsammans.
        </p>
        <img src={armbar} className='group-image'></img>
        <h3>TRÄNINGSTIDER-NYBÖRJARE MMA</h3>
        <p>
          Måndag 17.00-18.10 MMA <br/>
          Tisdag 16.50-18.00 Kickboxning nybörjare<br/>
          Onsdag 16.50-18.00 Grappling/MMA<br/>
          Torsdag 16.50-18.00 MMA<br/>
          Lördag 11.00-13.00 Öppen matta<br/>
          Söndag 14.00-15.20 Grappling alla nivåer<br/>
          Söndag 15.30-16.45 Kickboxning alla nivåer
        </p>
        <p>
          Prova på passen gäller måndag-torsdag. <br/>
          Öppen matta och söndagens pass kräver medlemskap.<br/>
          De första 2 veckorna av terminen innehåller mycket introduktion.
        </p>
      </div>

      <div className='group-wrapper' id="MMA-ungdom-nyborjare">
        <h2>MMA UNGDOM NYBÖRJARE</h2>
        <p>
          Variationsrika pass utan krav på förkunskap, vi lär ut grunderna i de olika delarna i MMA. Man kan börja i denna grupp när man fyllt 12 år, upp till att man fyller 15 år. <br/>
          <i>Vi ber föräldrar/anhöriga att inte uppehålla sig i lokalen under ungdomspasset/nybörjarpasset, detta pga vi har begränsat antal platser som måste prioteras till tränande som väntar in sina pass.</i><br/>
        </p>
        <h3>FORTSÄTTNINGSGRUPP-AVANCERAD</h3>
        <p>
          13-15 år<br/>
          Förkunskap alla distanser gäller i denna grupp, egen utrustning krävs. <br/>
          Kontakta oss vid frågor.
        </p>
      </div>

      <div className='group-wrapper' id='MMA-fortsattare'>
        <h2>MMA FORTSÄTTARE - AVANCERAD</h2>
        <p>
          Denna grupp är till för dig som har tidigare erfarenhet av MMA, eller tidigare erfarenhet av striking och grappling. <br/>
          Behärska samtliga distanser är krav. <br/>
          Tränare avgör vid vilken termin man flyttas från nybörjare upp till denna grupp. Full utrustning krävs i denna grupp.
        </p>
        <img src={advanced} className='group-image'></img>
        <h3>TRÄNINGSTIDER</h3>
        <p>
          Måndag 18.10 Brottning <br/>
          Tisdag 18.05 -19.15 MMA/Kickboxning<br/>
          Onsdagar 18.05-19.20 Grappling avancerad<br/>
          Torsdag 18.05-19.15 MMA <br/>
          Fredag 16.30-17.30 Boxning/Kickboxning<br/>
          Lördagar 11.00-13.00 Öppenmatta<br/>
          Söndag 13.00-14.30 Grappling all levels<br/>
          Söndag 15.00-16.15 Kickboxning alla nivåer
        </p>
      </div>

      <div className='group-wrapper' id='MMA-team'>
        <h2>MMA TEAM</h2>
        <p>
          I denna grupp tränar de som tävlar i MMA eller som ska tävla inom snar framtid, samt inbjudna.<br/>
          C, B & A-KLASS, samt Professionella fighters.<br/>
          Vår huvudcoach i MMA avgör vilka som tränar i denna grupp.
        </p>
        <img src={groundpound} className='group-image'></img>
      </div>

      <div className='group-wrapper' id='Kickboxning'>
        <h2>KICKBOXNING</h2>
        <h3>Vad är kickboxning?</h3>
        <p>Kickboxning innehåller boxning och sparkar, och i vissa fall även knän/clich, beroende på regelverk. På ÖFG använder vi oss av sparkar mot ben och ovanför midjan samt clinch. K1/lowkick regelverk.</p>
        <h3>Kickboxning för alla nivåer</h3>
        <p>
          från året man fyller 15 år<br/>
          Ett intensivt pass med fokus på kondition, teknik och intensitiet. Vi använder oss av handskar/mitsar att slå i, samt drillar mot varandra och kroppsviktsövningar kan förekomma.<br/> 
          Sparring förekommer för de som vill. Passar samtliga nivåer oavsett nybörjare, motionär eller fortsättare. Ingen förkunskap krävs.<br/>
          Kickboxning & Boxningspassen är en del av vårat striking program. Passar de som är inriktade på MMA eller de som enbart vill träna striking.
        </p>
        <img src={striking} className='group-image'></img>
        <h3>TRÄNINGSTIDER</h3>
        <p>
          Kickboxning - alla nivåer<br/>
          Tisdag 16.50-18.00<br/>
          Söndag 15.30-16.40<br/>
          Tisdag 18.05-19.15 - MMA striking fortsättare-avancerad<br/>
        </p>
        <p>
          Boxning<br/>
          Fredag 16.30-17.30 - fortsättare-avancerad
        </p>
      </div>
      <div className='group-wrapper' id='Grappling'>
        <h2>Grappling</h2>
        <h3>Vad är grappling?</h3>
        <p>
          Grappling är ett samlingsnamn för alla olika stilar där man brottas både stående och markkamp och gör olika former av grepp, strypningar och lås. <br/>
          Genom olika grepptekniker kan kast, strypningar och olika ledlås utföras. Brasiliansk jiu-jitsu och submission wrestling tillhör grapplinggenren.<br/>
          Ett pass även för de som tränar MMA, då grappling är en del i MMA.
        </p>
        <img src={grappling} className='group-image'></img>
        <h3>Tider - nybörjare</h3>
        <p>
          Onsdag 16.50-18.00<br/>
          Söndag 14.00-15.20 alla nivåer
        </p>
        <h3>Tider - avancerade</h3>
        <p>
          Måndag 18.10 brottning<br/>
          Onsdag 18.05-19.30<br/>
          Lördag 11.00-13.00 sparring öppenmatta<br/>
          Söndag 14.00-15.20 alla nivåer <br/>
        </p>
      </div>
      <div className='group-wrapper' id='Event'>
        <h2>Event</h2>
        <h3>PRIVATPASS, FÖRETAGSKLASSER, SVENSEXA/MÖHIPPA</h3>
        <p>Vi erbjuder allt från privatpass, företagsklasser, privata gruppass, skolklasser och träning vid svensexa/möhippa.</p>
        <h3>PRIVATPASS</h3>
        <p>
          Privatpass /individuell träning.<br/>
          Träna enskilt med vår rutinerade instruktör med professionell erfarenhet med enbart fokus på utövaren och den individuella utvecklingen.<br/>
          Passar samtliga ambitionsnivåer, oavsett om det är motionsnivå/nybörjare eller satsande utövande och du vill träna ett pass enskilt med instruktör.<br/>
          Skräddarsydda program efter önskemål.
        </p>
        <h3>FÖRETAGSKLASS / KICKOFFER / PRIVATA GRUPPASS</h3>
        <p>
          Testa våra populära kickboxningspass med arbetslaget, kompisgänget eller kollegorna.<br/>
          Kickboxningsklass med fokus på kondition och styrka.<br/>
          Lett av meriterade instruktörer med personligtränar utbildning.<br/>
          Roliga, intensiva och positivt utmanande träningspass.<br/>
          Skräddarsytt pass efter önskemål.
        </p>
        <h3>SVENSEXA/MÖHIPPA/FÖDELSEDAG</h3>
        <p>
          Någon som fyller jämnt eller gifter sig?<br/>
          Låt den utvalde testa sig genom att träna/sparra MMA tillsammans med något av våra proffs och träna ett MMA pass.<br/>
          Vi står för utrusting som krävs vid träningen. För mer info om passen eller vid frågor kontakta oss via: orebrofightgym@outlook.com
        </p>
      </div>
    </div>
  );
};

export default Groups;