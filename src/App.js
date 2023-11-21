import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CarouselComponent from './component/Carousel';
import Card from './pages/card';
import Stack from './pages/stack';
import ContactUs from './component/Formulaire';
import Nav from './component/Nav';
import Header from './pages/header';

import './App.css';
import './script/nav'
import './style/carousel.css';
import './style/solarSystem.css';
import './style/nav.css';
import './style/stack.css';
import './style/card.css';
import './style/formulaire.css';

import '@mantine/carousel/styles.css';


import { MantineProvider, createTheme } from '@mantine/core';



const theme = createTheme({
});
function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Nav/>
        <Header />
        <Stack  />
        <CarouselComponent />
        <Card />
        <ContactUs/>
      </Router>
    </MantineProvider>
  );
}

export default App;
