import React, { useState, useEffect } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Listo para transformar tu idea en realidad? Estamos aquí para ayudarte. Cuéntanos tu proyecto y te responderemos a la brevedad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="bg-gradient-to-br from-purple-900 to-indigo-800 text-white rounded-xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-700/30 rounded-full translate-x-20 -translate-y-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/30 rounded-full -translate-x-20 translate-y-20 blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Información de Contacto</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-1">Ubicación</h4>
                    <address className="not-italic text-gray-300">
                      Catamarca<br />
                      Argentina
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-1">Email</h4>
                    <a href="mailto:programadorescatamarca@gmail.com" className="text-gray-300 hover:text-white transition">
                      programadorescatamarca@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-1">Teléfono</h4>
                    <a href="tel:+543834997640" className="text-gray-300 hover:text-white transition">
                      +54 3834 997640
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/20 relative z-10">
                <h4 className="text-lg font-semibold mb-3">Horario de Atención</h4>
                <p className="text-gray-300 mb-2">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Sábados: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Envíanos un Mensaje</h3>
              
              <form 
                action="https://formsubmit.co/programadorescatamarca@gmail.com" 
                method="POST" 
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      maxLength={40}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Servicio de Interés
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    defaultValue="" // Usamos defaultValue aquí
                  >
                    <option value="" disabled>Selecciona un servicio</option> {/* Eliminamos el atributo selected */}
                    <option value="Web">Páginas Web</option>
                    <option value="WebApp">Aplicaciones Web</option>
                    <option value="Stock">Gestores de Stock</option>
                    <option value="Tickets">Sistemas de Ticketeras</option>
                    <option value="Games">Videojuegos Unity</option>
                    <option value="Other">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    maxLength={500}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-medium py-3 px-6 rounded-lg hover:from-purple-800 hover:to-indigo-900 transition shadow-md flex items-center justify-center gap-2"
                >
                  Enviar Mensaje <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
    </section>
  );
};

export default Contact;