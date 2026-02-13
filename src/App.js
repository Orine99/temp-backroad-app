import React from 'react';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import About from "./components/About";



function App() {
  
  return (
    <>
      <Navbar />
      <About/>
      <Services/>
      <Tours/>
      <Hero />
      <Footer/>
  </>
  
  );
}
export default App;
