import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProjectDetails from './pages/ProjectDetails';

// Home Component wrapping the single page sections
const Home = () => (
  <>
    <Navbar />
    <WhatsAppButton />
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="antialiased overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
