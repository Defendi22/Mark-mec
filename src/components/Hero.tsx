import { ChevronRight, Zap, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-scooter.jpg" 
          alt="Electric Scooter" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-600/20 border border-orange-600/30 px-3 py-1 rounded-full text-orange-500 text-sm font-bold mb-6">
            <Zap size={16} />
            <span>A MAIOR ESPECIALISTA EM SCOOTERS DA REGIÃO</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            SUA SCOOTER EM <br />
            <span className="text-orange-600">PERFEITO ESTADO.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Manutenção especializada, peças originais e os melhores acessórios para sua mobilidade elétrica. Performance e segurança em cada quilômetro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contato" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105">
              Agendar Manutenção
              <ChevronRight className="ml-2" />
            </a>
            <a href="#acessorios" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all">
              Ver Acessórios
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-orange-600 font-bold text-2xl flex items-center">
                <Clock size={20} className="mr-2" /> 24h
              </span>
              <span className="text-gray-400 text-sm">Entrega Rápida</span>
            </div>
            <div className="flex flex-col">
              <span className="text-orange-600 font-bold text-2xl flex items-center">
                <Shield size={20} className="mr-2" /> 100%
              </span>
              <span className="text-gray-400 text-sm">Peças Originais</span>
            </div>
            <div className="flex flex-col">
              <span className="text-orange-600 font-bold text-2xl flex items-center">
                <Zap size={20} className="mr-2" /> +500
              </span>
              <span className="text-gray-400 text-sm">Clientes Satisfeitos</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
