import React, { Component } from 'react';
import Header from './components/Header/Header'
import SectionOne from './components/SectionOne/SectionOne'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Scroll from './components/ScrollTop/ScrollTop'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <SectionOne />
      <Portfolio />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer/>
      <Scroll />
      
      </div>
    );
  }
}

export default App;
