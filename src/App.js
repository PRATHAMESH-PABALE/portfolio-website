import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
