
import React, { useState, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import css from '../img/carousel/css.png';
import html from '../img/carousel/html.png';
import javascript from '../img/carousel/javascript.png';
import react from '../img/carousel/react.png';
import figma from '../img/carousel/figma.png';
import git from '../img/carousel/git.png';
import illustrator from '../img/carousel/illustrator.png';
import mysql from '../img/carousel/mysql.png';
import node from '../img/carousel/node.png';
import photoshop from '../img/carousel/photoshop.png';
import indesign from '../img/carousel/indesign.png';
import php from '../img/carousel/php.png';
import vuejs from '../img/carousel/vuejs.png';


const CarouselComponent = () => {
  const [slideSize, setSlideSize] = useState("33%");
  const [slidesToScroll, setSlidesToScroll] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1200) {
        setSlideSize("16%");
        setSlidesToScroll(4);
      } else if (screenWidth > 800) {
        setSlideSize("22%");
        setSlidesToScroll(3);
      } else {
        setSlideSize("33%");
        setSlidesToScroll(2);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
      <Carousel
        withIndicators
        height={200}
        slideSize={slideSize}
        slideGap="md"
        loop
        align="start"
        slidesToScroll={slidesToScroll}
      >
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={html} alt="" /></div> <p>HTML 5</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={css} alt="" /></div> <p>CSS 3</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={javascript} alt="" /></div> <p>JavaScript</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={react} alt="" /></div> <p>React</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={vuejs} alt="" /></div> <p>VueJS</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={php} alt="" /></div> <p>PHP</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={mysql} alt="" /></div> <p>MySQL</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={node} alt="" /></div> <p>Node JS</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={git} alt="" /></div> <p>Git</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={figma} alt="" /></div> <p>Figma</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={illustrator} alt="" /></div> <p>Illustrator</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={photoshop} alt="" /></div> <p>Photoshop</p></div></Carousel.Slide>
        <Carousel.Slide><div className='carouCard'><div className='imgCarou'><img src={indesign} alt="" /></div> <p>InDesign</p></div></Carousel.Slide>

      </Carousel>
    
  );
};

export default CarouselComponent;
