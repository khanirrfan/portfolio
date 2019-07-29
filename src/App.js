import React from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Expereince from './Experience/Experience';
import Skills from './Skills/Skills.js';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
function App() {
  return (
    <div className = "content">
      <Header />
      <Home />
      <About />
      <Expereince />
      <Skills />
      <Education />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
