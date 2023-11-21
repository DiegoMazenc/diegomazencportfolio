import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import astroboySpaceship from '../img/astroboySpaceship.png';
import flame from '../img/flame.png';

const TypingText = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const animationDelay = 100; // Délai entre chaque lettre
    let interval;

    const animateText = () => {
      interval = setInterval(() => {
        if (currentIndex < text.length-1) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayText('');
            currentIndex = 0;
            animateText(); // Répéter l'animation
          }, delay);
        }
      }, animationDelay);
    };

    animateText();

    return () => {
      clearInterval(interval);
    };
  }, [text, delay]);

  return <p>{displayText}</p>;
};

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5bn38qj', 'template_xc3iie9', form.current, 'tU5x-6cN0oZf7QHdu')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='footer' id="footer">
      <div className='topFooter'>
        <div className='textFooter'>
          <div className='textAnimate'>
          <TypingText text=" Houston, est-ce que vous me recevez?" delay={2000} />

          </div>
          <p className='textForm'>Contactez-moi, j'ai plein de nouvelles ressources ! Houston ?</p>
        <div className='contactNumCv'>
<p>06.27.79.49.77</p>
<a> Voir mon CV</a>
        </div>
        </div>
        <div className='imgAnim'>
          <img src={flame} alt='' className='flame' />
          <img src={astroboySpaceship} alt='' className='astroboySpaceship' />
        </div>
      </div>

      <form className='formContact' ref={form} onSubmit={sendEmail}>
        <input className='nameForm' type="text" name="user_name" placeholder="Votre Nom" />
        <input className='mailForm' type="email" name="user_email" placeholder="Votre Email" />
        <textarea name="message" placeholder="Votre Message" />
        <input className='btnForm' type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs;
