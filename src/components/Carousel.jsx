import React from "react";
import "./Carousel.css";
import agaris from '../images/logos/agarisLogo.png';
import barber from '../images/logos/barberLogo.png';
import ekspert from '../images/logos/ekspertLogo.png';
import fizjo from '../images/logos/fizjoLogo.png';
import hattrick from '../images/logos/hattrickLogo.png';
import justin from '../images/logos/justinLogo.png';
import lasy from '../images/logos/lasyLogo.png';
import medi from '../images/logos/mediLogo.png';
import sawo from '../images/logos/sawoLogo.png';
import sfd from '../images/logos/sfdLogo.png';
import tara from '../images/logos/taraLogo.png';
import urban from '../images/logos/urbanLogo.png';
import vitamizu from '../images/logos/vitamizuLogo.png';
import well from '../images/logos/wellLogo.png';
import wish from '../images/logos/wishLogo.png';

const Carousel = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={agaris} />
        <img src={barber} />
        <img src={ekspert} />
        <img src={fizjo} />
        <img src={hattrick} />
        <img src={justin} />
        <img src={lasy} />
        <img src={medi} />
        <img src={sawo} />
        <img src={sfd} />
        <img src={tara} />
        <img src={urban} />
        <img src={vitamizu} />
        <img src={well} />
      </div>

      <div className="logos-slide">
        <img src={agaris} />
        <img src={barber} />
        <img src={ekspert} />
        <img src={fizjo} />
        <img src={hattrick} />
        <img src={justin} />
        <img src={lasy} />
        <img src={medi} />
        <img src={sawo} />
        <img src={sfd} />
        <img src={tara} />
        <img src={urban} />
        <img src={vitamizu} />
        <img src={well} />
      </div>
    </div>
  );
};

export default Carousel;
