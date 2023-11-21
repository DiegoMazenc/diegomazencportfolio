import React, { useState } from 'react';
import front from '../img/front.png';
import back from '../img/back.png';
import design from '../img/design.png';

import sun from '../img/sun.png';
import mercury from '../img/mercury.png';
import venus from '../img/venus.png';
import earth from '../img/earth.png';
import mars from '../img/mars.png';
import jupiter from '../img/jupiter.png';
import saturn from '../img/saturn.png';
import uranus from '../img/uranus.png';
import neptun from '../img/neptun.png';
import pluto from '../img/pluto.png';
import astroboyDab from '../img/astroboyDab.png';

const Header = () => {
    
    return (
<header className='header'>
        <div className='divAstroboy'>
      <img src={astroboyDab} alt="" className='astroboyDab' />
      </div>
        <div className="presentation">
          <h1>Hello World,<br/>I'm Diégo !</h1>
          <h2>Développeur Web & Web Mobile Full Stack</h2>
          <p>Créateur d'expériences numériques, je suis à la recherche d'opportunités stimulantes pour collaborer avec des entreprises innovantes !</p>

          <div className="stackIcons">
            <div className="stackCard">
              <img src={front} alt="HTML" />
              <h5>Front-End</h5>
            </div>
            <div className="stackCard">
              <img src={back} alt="HTML" />
              <h5>Back-End</h5>
            </div>
            <div className="stackCard">
              <img src={design} alt="HTML" />
              <h5>Design</h5>
            </div>
          </div>
        </div>


        <div className='solarSystem'>


          <img className='sun' src={sun} alt="" />
          <div className='merDiv'>
            <img className='mercury' src={mercury} alt="" />
          </div>
          <div className='venDiv'>
            <img className='venus' src={venus} alt="" />
          </div>
          <div className='earDiv'>
            <img className='earth' src={earth} alt="" />
          </div>
          <div className='marDiv'>
            <img className='mars' src={mars} alt="" />
          </div>
          <div className='jupDiv'>
            <img className='jupiter' src={jupiter} alt="" />
          </div>
          <div className='satDiv'>
            <img className='saturn' src={saturn} alt="" />
          </div>
          <div className='uraDiv'>
            <img className='uranus' src={uranus} alt="" />
          </div>
          <div className='nepDiv'>
            <img className='neptun' src={neptun} alt="" />
          </div>
          <div className='pluDiv'>
            <img className='pluto' src={pluto} alt="" />
          </div>

        </div>
      </header>

    );
};

export default Header;
