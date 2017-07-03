import React, { Component } from 'react';
import Header from './components/Header/Header'
import SectionOne from './components/SectionOne/SectionOne'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import AboutMe from './components/AboutMe/AboutMe'

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
      </div>
    );
  }
}

export default App;
