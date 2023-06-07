import React from 'react';
import './App.css';
import { Navbar, Home, Features, About, Contact, Footer } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;