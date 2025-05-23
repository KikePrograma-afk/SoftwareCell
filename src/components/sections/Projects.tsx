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
    // Puedes agregar tus proyectos aquí siguiendo este formato:
    // {
    //   title: "Nombre de tu proyecto",
    //   category: "Categoría (ej: Web, App, Sistema)",
    //   description: "Breve descripción del proyecto.",
    //   imageUrl: "URL de la imagen del proyecto",
    //   delay: 100 // Ajusta el delay si tienes varios proyectos para la animación
    // },
    // ... más proyectos
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