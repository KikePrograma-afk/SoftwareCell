import React from 'react';
import { Code2, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">DevSolutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluciones digitales a medida, construidas con pasión y precisión para transformar tu visión en realidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Páginas Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Aplicaciones Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Gestores de Stock</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Sistemas de Ticketeras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Videojuegos Unity</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Equipo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Casos de Éxito</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Carreras</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Catamarca</p>
              <p className="mb-2">Argentina</p>
              <p className="mb-2">programadorescatamarca@gmail.com</p>
              <p className="mb-2">+54 3834 997640</p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DevSolutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;