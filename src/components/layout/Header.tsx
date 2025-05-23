import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-purple-700 dark:text-purple-400" />
            <span className="text-xl font-bold text-purple-900 dark:text-purple-300">DevSolutions</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-gray-800 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-800 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-gray-800 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition"
              >
                Proyectos
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-gray-800 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-4 py-2 bg-purple-700 dark:bg-purple-600 text-white rounded-md hover:bg-purple-800 dark:hover:bg-purple-700 transition"
              >
                Contacto
              </button>
            </nav>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 focus:outline-none" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-gray-800 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition text-left"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-800 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition text-left"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-800 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition text-left"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-800 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition text-left"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-4 py-2 bg-purple-700 dark:bg-purple-600 text-white rounded-md hover:bg-purple-800 dark:hover:bg-purple-700 transition w-full text-center"
            >
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;