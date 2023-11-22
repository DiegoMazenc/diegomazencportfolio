import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import githubLogo from '../img/githubLogo.png';
import linkedin from '../img/linkedin.png';

const Nav = () => {
  const [selectorPosition, setSelectorPosition] = useState(1);

  const handleSelectorClick = (position) => {
    setSelectorPosition(position);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsetBefore = 300;
      // Vous pouvez ajuster ces valeurs en fonction de la disposition de votre page
      const aboutPosition = document.getElementById('stack').offsetTop;
      const portfolioPosition = document.getElementById('portFolio').offsetTop;
      const contactPosition = document.getElementById('footer').offsetTop;
      const currentPosition = window.scrollY;

      if (currentPosition < portfolioPosition-offsetBefore) {
        setSelectorPosition(1);
      } else if (currentPosition < contactPosition-offsetBefore && currentPosition > aboutPosition-offsetBefore) {
        setSelectorPosition(2);
      } else {
        setSelectorPosition(3);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur d'événements lorsqu'un composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Le tableau vide en tant que deuxième argument signifie que cet effet ne dépend d'aucune variable

  return (
    <nav className="barNav">
      <div className="navi">
        <div className={`selector selectorPosition${selectorPosition}`} id="selectorDiv"></div>
        <ul>
          <li>
            <a href="#stack" id="about">
              About
            </a>
          </li>
          <li>
            <a href="#portFolio" id="portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#footer" id="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="social">
        <a href="https://github.com/DiegoMazenc?tab=repositories" target="_blank">
          <img className='imgLink' src={githubLogo} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/di%C3%A9go-mazenc-89811313b/" target="_blank" >
          <img className='linkedin' src={linkedin} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
