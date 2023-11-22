import React, { useState, useEffect } from 'react';
import { Transition } from '@mantine/core';
import { useSpring, animated } from 'react-spring';
import front from '../img/front.png';
import back from '../img/back.png';
import design from '../img/design.png';
import astroboyComput from '../img/astroboyComput.png'; 
import astroboyComputMobile from '../img/astroboyComputMobile.png'; 
import astroboySpaceship from '../img/astroboySpaceship.png'; 




  const Stack = () => {
    const [isElementCentered, setIsElementCentered] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const element = document.querySelector('.textFront');
        if (element) {
          const rect = element.getBoundingClientRect();
          const isCentered = rect.top + rect.height / 1.2 <= window.innerHeight / 1.2;
          setIsElementCentered(isCentered);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    
  
    const frontAnimation = useSpring({
      opacity: isElementCentered ? 1 : 0,
      transform: isElementCentered ? 'translateY(0)' : 'translateY(100%)',
      from: { opacity: 0, transform: 'translateY(100%)' },
      delay: 100, 
    });
  
    const backAnimation = useSpring({
      opacity: isElementCentered ? 1 : 0,
      transform: isElementCentered ? 'translateY(0)' : 'translateY(100%)',
      from: { opacity: 0, transform: 'translateY(100%)' },
      delay: 400, 
    });
  
    const designAnimation = useSpring({
      opacity: isElementCentered ? 1 : 0,
      transform: isElementCentered ? 'translateY(0)' : 'translateY(100%)',
      from: { opacity: 0, transform: 'translateY(100%)' },
      delay: 900, 
    });
  
  
    return (
      <div className='stacks' id="stack">
        <div className='front'>
          <div className='imgFront'>
            <h3 className='titleImgBloc titleStyle'>Stacks</h3>
            <img className='imgComputUn' src={astroboyComput} alt="HTML" />
            <img className='imgComputDeux'src={astroboyComputMobile} alt="HTML" />
          </div>

          <div className='stackText'>
            <div className='barre'></div>
            <div className='texte'>

              <animated.div style={frontAnimation}>
                <div className='textFront'>
                  <img className='imgStack' src={front} alt="" />
                  <div className='pointText'></div>
                  <div className='listStack'>
                    <h3>Front-End</h3>
                    <p>Réalisation de site internet Responsive</p>
                    <p>Manipulation de DOM</p>
                    <p>Rendu dynamique</p>
                    <p>Maîtrise des Frameworks</p>
                    <p>Répond aux normes W3C</p>
                  </div>
                </div>
                 </animated.div>

                 <animated.div style={backAnimation}>
              <div className='textFront'>
                <img className='imgStack' src={back} alt="" />
                <div className='pointText'></div>
                <div className='listStack'>
                  <h3>Back-End</h3>
                  <p>Création de base de données</p>
                  <p>Manipulation des données</p>
                  <p>Sécurisation des données</p>
                  <p>Création et appel d'API</p>
                  <p>Programmation Orientée Objet</p>
                </div>
              </div>
              </animated.div>

              <animated.div style={designAnimation}>
              <div className='textFront'>
                <img className='imgStack' src={design} alt="" />
                <div className='pointText'></div>
                <div className='listStack'>
                  <h3>Design</h3>
                  <p>Création de visuels Graphiques</p>
                  <p>Zoning, Wireframe, Maquettage</p>
                  <p>Charte graphique</p>
                  <p>Illustration</p>
                </div>
              </div>
              </animated.div>

            </div>
          </div>
        </div>
      </div>
    );
  };


export default Stack;
