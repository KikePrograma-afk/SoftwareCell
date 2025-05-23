import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  delay: number;
}

const ProjectCard: React.FC<Project> = ({ title, category, description, imageUrl, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-xl transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-teal-300 text-sm font-medium mb-1">{category}</span>
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm mb-4">{description}</p>
        <button className="flex items-center gap-2 text-white bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-md transition-colors w-fit">
          Ver proyecto <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-commerce para Boutique de Ropa",
      category: "Tienda Online",
      description: "Plataforma completa de compras con carrito, pasarela de pagos y gestión de inventario.",
      imageUrl: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 100
    },
    {
      title: "Sistema de Tickets para Festival",
      category: "Ticketera",
      description: "Plataforma de venta y gestión de entradas con códigos QR e impresión integrada.",
      imageUrl: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 200
    },
    {
      title: "App de Control de Stock",
      category: "Sistema de Inventario",
      description: "Gestión integral de inventario con seguimiento de productos, alertas y reportes.",
      imageUrl: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 300
    },
    {
      title: "Videojuego Móvil Educativo",
      category: "Desarrollo Unity",
      description: "Juego interactivo de aprendizaje para niños con mecánicas divertidas y contenido pedagógico.",
      imageUrl: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 400
    },
    {
      title: "Portal Inmobiliario",
      category: "Aplicación Web",
      description: "Plataforma de búsqueda y gestión de propiedades con filtros avanzados y mapas interactivos.",
      imageUrl: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 500
    },
    {
      title: "Landing Page Corporativa",
      category: "Diseño Web",
      description: "Sitio web de alto impacto visual con animaciones y formularios de contacto integrados.",
      imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 600
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">Proyectos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra selección de trabajos recientes que muestran nuestras capacidades y soluciones a medida para diversos clientes y sectores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;