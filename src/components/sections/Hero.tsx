import React, { useEffect, useState } from 'react';
import { Code2, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="h-10 w-10 text-teal-400" />
              <h2 className="text-2xl font-bold text-teal-400">Tu idea Catamarca</h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transformamos Ideas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Soluciones Digitales</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Desarrollamos software a medida que impulsa tu negocio con soluciones rápidas, eficaces y 100% personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Pedí tu sistema ahora
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md transition-all flex items-center justify-center"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar servicios
              </button>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative bg-gradient-to-tr from-purple-500/20 to-teal-500/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
              <div className="absolute -top-12 -right-12 h-40 w-40 bg-teal-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 h-40 w-40 bg-purple-500/30 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 font-mono">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-gray-300">development.tsx</div>
                </div>
                
                <div className="text-sm text-gray-300 space-y-3">
                  <div><span className="text-pink-400">const</span> <span className="text-blue-400">solution</span> <span className="text-pink-400">=</span> <span className="text-purple-400">createSolution</span><span className="text-gray-300">{'('}</span></div>
                  <div className="pl-6">
                    <span className="text-teal-300">client</span>: <span className="text-yellow-300">"{'{'}yourBusiness{'}'}"</span>,
                  </div>
                  <div className="pl-6">
                    <span className="text-teal-300">technologies</span>: [
                    <span className="text-yellow-300">"React"</span>, 
                    <span className="text-yellow-300">"Node.js"</span>, 
                    <span className="text-yellow-300">"Unity"</span>],
                  </div>
                  <div className="pl-6">
                    <span className="text-teal-300">customization</span>: <span className="text-orange-400">100</span>,
                  </div>
                  <div className="pl-6">
                    <span className="text-teal-300">deliveryTime</span>: <span className="text-orange-400">"{'{'}record{'}'}"</span>,
                  </div>
                  <div><span className="text-gray-300">{'),'}</span></div>
                  <div className="pt-2">
                    <span className="text-pink-400">return</span> <span className="text-blue-400">solution</span>.<span className="text-purple-400">transform</span><span className="text-gray-300">{'('}</span><span className="text-yellow-300">"idea"</span>, <span className="text-yellow-300">"success"</span><span className="text-gray-300">{'),'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;