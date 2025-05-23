import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatarUrl: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      quote: "Espere 8 años que alguien desarrollara ese sistema de control de stock y ticketera para mi local de comida y gracias a ellos lo tuve en tan solo 3 dias !!",
      author: "Burgergrills",
      position: "", // Puesto no especificado
      company: "", // Empresa no especificada
      avatarUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Mantengo la imagen por defecto
    },
    {
      quote: "Excelente trabajo de los chicos en el poncho impecable ante cientos de miles de personas !!",
      author: "Natalia Duzzo",
      position: "", // Puesto no especificado
      company: "", // Empresa no especificada
      avatarUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Mantengo la imagen por defecto
    },
    {
      quote: "Gracias por ayudarme y por su excelente trabajo estan invitados al siguien viaje a las estrellas !!",
      author: "Viaje a las estrellas",
      position: "", // Puesto no especificado
      company: "", // Empresa no especificada
      avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Mantengo la imagen por defecto
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const goToSlide = (index: number) => {
    if (index !== activeIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className={`text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Descubre por qué empresas de diversos sectores confían en nosotros para sus soluciones digitales.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Testimonial Slider */}
            <div className="overflow-hidden">
              <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-white/20">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-teal-400 flex-shrink-0">
                      <img 
                        src={testimonials[activeIndex].avatarUrl} 
                        alt={testimonials[activeIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <Quote className="h-10 w-10 text-teal-400 mb-4 opacity-80" />
                      <p className="text-xl md:text-2xl text-white mb-6 italic">
                        "{testimonials[activeIndex].quote}"
                      </p>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {testimonials[activeIndex].author}
                        </h4>
                        <p className="text-teal-300">
                          {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex justify-between mt-8">
              <div className="flex items-center">
                <button 
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition mr-4"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full transition-all ${
                      index === activeIndex ? 'bg-teal-400 w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;