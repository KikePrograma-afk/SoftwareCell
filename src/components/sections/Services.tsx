import React, { useEffect, useRef, useState } from 'react';
import { Code2, Globe, BarChart3, Ticket, Gamepad2, Zap } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  whatsappMessage: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, whatsappMessage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneNumber = "543834997640";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        ref={cardRef}
        className={`bg-white rounded-xl shadow-xl p-6 border border-purple-100 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 w-16 h-16 rounded-lg flex items-center justify-center mb-5 shadow-md">
          <div className="text-white">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe size={28} />,
      title: "Páginas Web Personalizadas",
      description: "Diseño y desarrollo de sitios web responsivos, modernos y a medida para tu negocio o proyecto personal.",
      delay: 100,
      whatsappMessage: "¡Hola! Me interesa el servicio de páginas web personalizadas 💻 ¿Podés contarme más?"
    },
    {
      icon: <Code2 size={28} />,
      title: "Aplicaciones Web",
      description: "Desarrollo de aplicaciones web completas con interfaz intuitiva y funcionalidades avanzadas para cualquier sector.",
      delay: 200,
      whatsappMessage: "¡Hola! Estoy interesado en desarrollar una aplicación web 🚀 ¿Podemos hablar al respecto?"
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Gestores de Stock",
      description: "Sistemas de inventario personalizados para controlar eficientemente tus productos, proveedores y ventas.",
      delay: 300,
      whatsappMessage: "¡Hola! Me interesa implementar un sistema de gestión de stock 📦 ¿Me contás más detalles?"
    },
    {
      icon: <Ticket size={28} />,
      title: "Sistemas de Ticketeras",
      description: "Soluciones para gestión y emisión de tickets con impresión integrada para eventos, servicios o atención al cliente.",
      delay: 400,
      whatsappMessage: "¡Hola! Necesito un sistema de ticketera 🎫 ¿Podemos discutir las funcionalidades?"
    },
    {
      icon: <Gamepad2 size={28} />,
      title: "Videojuegos Unity",
      description: "Desarrollo de videojuegos profesionales con Unity para plataformas móviles, web y escritorio.",
      delay: 500,
      whatsappMessage: "¡Hola! Me gustaría desarrollar un videojuego con Unity 🎮 ¿Podemos conversar sobre el proyecto?"
    },
    {
      icon: <Zap size={28} />,
      title: "Soluciones Rápidas",
      description: "Implementaciones eficaces y a medida para resolver problemas específicos en tiempo récord.",
      delay: 600,
      whatsappMessage: "¡Hola! Necesito una solución rápida para mi negocio ⚡ ¿Podemos hablar sobre mis necesidades?"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desarrollamos soluciones digitales a medida que potencian el crecimiento de tu negocio con tecnologías modernas y enfoque personalizado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              whatsappMessage={service.whatsappMessage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;