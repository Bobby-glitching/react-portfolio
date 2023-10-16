import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Technicalskills from './components/Technicalskills';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Technicalskills />
      <Contact />
    </div>
  );
}

export default App;