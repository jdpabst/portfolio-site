import React, { Component } from 'react';
import Header from './components/Header/Header'
import SectionOne from './components/SectionOne/SectionOne'
import Portfolio from './components/Portfolio/Portfolio'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <SectionOne />
      <Portfolio />
      </div>
    );
  }
}

export default App;
