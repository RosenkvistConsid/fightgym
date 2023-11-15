import React from 'react';
import './Training.css';
import walkout from '../../media/walkout.jpeg';
import hype from '../../media/hype.jpeg';

const Training = () => (
  <div className="training-wrapper">
    <h1>Träning</h1>
    <h2>BÖRJA TRÄNA PÅ ÖREBRO FIGHT GYM</h2>
    <p>
      Vad roligt att du är intresserad av att börja träna hos oss!<br/>
      För att börja träna på Örebro Fight Gym så behöver du först maila en förfrågan om föranmälan.<br/>
      Vi tar endast emot föranmälda utövare och inga drop in pass,<br/>
      har man frågor vänligen kontakta oss via mail eller sociala medier.
    </p>
    <img src={walkout}></img>
    <div className='block'>
      <h3>FÖRANMÄLAN & REGISTRERING</h3>
      <p>
        Oavsett prova på vecka eller enstaka prova på pass, föranmälan krävs via mail.<br/>
        Maila förnamn, efternamn & födelseår till orebrofightgym@outlook.com invänta därefter bekräftelse.<br/>
        När du är på plats registrera dig i receptionen vid första passet.<br/>
        <i>Endast föranmälan via mail.</i>
      </p>
    </div>
    <div className='block'>
      <h3>PROVA PÅ VECKA</h3>
      <p>
        <i><strong>Prova på vecka är nu stängd för ht23</strong></i><br/>
        Vi erbjuder prova på under begränsad tid i samband med terminsstart.<br/>
        1 gratis prova på vecka gäller pass måndag-torsdag, denna kan inte delas upp utan startar vid registrering/första passet.<br/>
        Prova på pass gäller nya medlemmar och kan endast nyttjas 1 gång.<br/>
        Pass fredag-söndag kräver medlemskap. Prova på vecka/pass garenterar ej plats i gruppen.<br/>
        <i>Endast föranmälda utövare/medlemmar vistas i lokalen, inga åskådare under passen.</i>
      </p>
    </div>
    
    <div className='block'>
      <h3>MEDLEMSKAP</h3>
      <p>
        Vill man fortsätta träna efter prov-veckan löpt ut måste man teckna medlemskap.<br/>
        Medlemskap ger garenterad plats i gruppen. <a>Mer om medlemskap finns här</a> 
      </p>
    </div>

    <div className='block'>
      <h3>ÖVRIG INFO</h3>
      <ul className='training-info-list'>
        <li>
          <h4 className='list-header'>Friskvårdsbidrag  </h4>
          <p className='list-text'>Vi ger ut kvitto vid behov för friskvårdsbidrag. Receptionen hjälper er vid bemannade tider.</p>
        </li>
        <li>
          <h4 className='list-header'>Betalning</h4>
          <p className='list-text'>Betalning sker via swish, kontokort eller autogiro. Vi tar ej emot kontanter.</p>
        </li>
        <li>
          <h4 className='list-header'>Ånger medlemskap</h4>
          <p className='list-text'>Betalning är bindande och betalas inte tillbaka vid ånger, flytt eller skador. Mer om detta finns i våra avtalsbestämmelser som finns att ta exemplar av i receptionen.</p>
        </li>
        <li>
          <p className='list-header'>Omklädningsrum</p>
          <p className='list-text'>Det finns omklädningsrum. Vi ber dock utövare om att byta om och duscha hemma för att minska trängsel.</p>
        </li>
        <li>
          <h4 className='list-header'>Hygien/sjukdom</h4>
          <p className='list-text'>
            Våra viktigaste regler lyder:<br/>
            Rena träningskläder varje pass.<br/>
            Klippta naglar och inga öppna sår/utslag.<br/>
            Inga smycken.<br/>
            Vid förkylningssymtom tränar man inte eller vistas i lokalen.<br/>
          </p>
        </li>
        <li>
          <h4 className='list-header'>Parkering/hitta hit</h4>
          <p className='list-text'>
            Vi har vår lokal vid tefatet på aspholmen.<br/> 
            Använd P-skiva på parkeringen.<br/>
            Busshållsplats finns precis utanför lokalen.
          </p>
        </li>
        <li>
          <img src={hype}></img>
          <h4 className='list-header'>Utrustning, detta behöver du för att träna</h4>
          <p className='list-text'><i>Vi säljer utrustning på plats från bla NORDIC FIGHTER & Earnitsports</i></p>
        </li>
        <li>
          <h4 className='list-header'>MMA</h4>
          <p className='list-text'>
            Klädsel: Träningskläder utan dragkedjor eller för stora fickor, tandskydd. Vi tränar barfota.<br/>
            Utrustning: MMA handskar & benskydd behövs så snart som möjligt när man bestämt sig för att fortsätta.<br/>
            Tunna proffs-mma handskar används inte på dessa pass.
          </p>
        </li>
        <li>
          <h4 className='list-header'>Grappling</h4>
          <p className='list-text'>Klädsel/utrustning: Träningskläder utan dragkedjor eller för stora fickor, tandskydd. Vi tränar barfota.</p>
        </li>
        <li>
          <h4 className='list-header'>Kickboxning</h4>
          <p className='list-text'>
            Klädsel: Träningskläder utan fickor, vi tränar barfota.<br/>
            Utrustning: Benskydd, tandskydd, boxningshandskar
          </p>
        </li>
        <li className='footer-text'>
          <p>
          Boxningshandskar finns att låna första terminen,<br/>
          men vi rekommenderar egen utrustning.<br/>
          Vattenflaska krävs till alla pass. Suspensoar rekommenderas till killar.
          </p>
        </li>
      </ul>
    </div>
  </div>
);

export default Training;
