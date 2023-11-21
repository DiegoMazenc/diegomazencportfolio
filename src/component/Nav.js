
import { Link } from "react-router-dom";
import React, { useState } from "react";
import githubLogo from '../img/githubLogo.png';
import linkedin from '../img/linkedin.png';


const Nav = () => {
  const [selectorPosition, setSelectorPosition] = useState(1);

  const handleSelectorClick = (position) => {
    setSelectorPosition(position);
  };
  return (
    <nav className="barNav">
      <div   className="navi">
      <div className={`selector selectorPosition${selectorPosition}`} id="selectorDiv"></div>
      <ul>
        <li>
          <a href="#stack" onClick={() => handleSelectorClick(1)} id="about">
            About
          </a>
        </li>
        <li>
          <a href="#portFolio" onClick={() => handleSelectorClick(2)} id="portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#footer" onClick={() => handleSelectorClick(3)} id="contact">
            Contact
          </a>
        </li>
      </ul>
      </div>
      <div className="social">
        
      <a href="https://github.com/DiegoMazenc?tab=repositories" target="_blank"><img className='imgLink' src={githubLogo} alt="" /></a>
      <a href="https://www.linkedin.com/in/di%C3%A9go-mazenc-89811313b/" target="_blank" ><img className='linkedin' src={linkedin} alt="" /></a>
          
        
      </div>
    </nav>
  );
};

export default Nav;
