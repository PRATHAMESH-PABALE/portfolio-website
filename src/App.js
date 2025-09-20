import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Internships from './pages/Internships';
import Certifications from './pages/Certifications';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
