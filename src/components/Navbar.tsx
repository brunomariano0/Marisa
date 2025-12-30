import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (isHome) {
      // Just scroll to id
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {      
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
           <span className={`text-2xl font-serif tracking-widest font-bold transition-colors duration-300 ${
             scrolled ? 'text-wedding-charcoal' : 'text-white'
           }`}>
             MARISA ASSESSORIA
             <span className="text-wedding-gold">.</span>
           </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className={`text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 hover:text-wedding-gold relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-wedding-gold after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? 'text-wedding-charcoal' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavigation(e, '#contact')}
            className={`px-6 py-2 border text-sm tracking-widest uppercase transition-all duration-300 ${
              scrolled 
                ? 'border-wedding-charcoal text-wedding-charcoal hover:bg-wedding-charcoal hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-wedding-charcoal'
            }`}
          >
            Agendar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className={scrolled ? 'text-wedding-charcoal' : 'text-white'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-wedding-charcoal' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 w-full bg-wedding-champagne z-40 flex flex-col items-center justify-center md:hidden"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 text-wedding-charcoal"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className="text-2xl font-serif text-wedding-charcoal hover:text-wedding-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
