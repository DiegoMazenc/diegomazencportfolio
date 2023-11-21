import React, { useState } from 'react';

const YourComponent = () => {
  const [selectorPosition, setSelectorPosition] = useState(1);

  const handleAboutClick = () => {
    setSelectorPosition(1);
  };

  const handlePortfolioClick = () => {
    setSelectorPosition(2);
  };

  const handleContactClick = () => {
    setSelectorPosition(3);
  };

  return (
    <div>
      <button id="about" onClick={handleAboutClick}>About</button>
      <button id="portfolio" onClick={handlePortfolioClick}>Portfolio</button>
      <button id="contact" onClick={handleContactClick}>Contact</button>

      <div id="selectorDiv" className={`selectorPosition${selectorPosition}`}></div>
    </div>
  );
};

export default YourComponent;
