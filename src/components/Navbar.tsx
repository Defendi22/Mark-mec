import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-white">
              MARK<span className="text-orange-600">MEC</span> <span className="text-gray-400 font-light text-xl">MOBILITY</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-orange-500 transition-colors">Início</a>
            <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors">Manutenção</a>
            <a href="#acessorios" className="text-gray-300 hover:text-orange-500 transition-colors">Acessórios</a>
            <a href="#sobre" className="text-gray-300 hover:text-orange-500 transition-colors">Sobre</a>
            <a href="#contato" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105">
              Agendar Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute w-full top-full left-0 py-6 px-4 space-y-4 border-t border-gray-800">
          <a href="#inicio" className="block text-gray-300 hover:text-orange-500 text-lg" onClick={() => setIsMenuOpen(false)}>Início</a>
          <a href="#servicos" className="block text-gray-300 hover:text-orange-500 text-lg" onClick={() => setIsMenuOpen(false)}>Manutenção</a>
          <a href="#acessorios" className="block text-gray-300 hover:text-orange-500 text-lg" onClick={() => setIsMenuOpen(false)}>Acessórios</a>
          <a href="#sobre" className="block text-gray-300 hover:text-orange-500 text-lg" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="#contato" className="block bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-center" onClick={() => setIsMenuOpen(false)}>
            Agendar Agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
