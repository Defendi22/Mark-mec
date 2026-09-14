import { Battery } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-black tracking-tighter">
              MARK<span className="text-orange-600">MEC</span> <span className="text-gray-400 font-light text-xl">MOBILITY</span>
            </span>
            <p className="text-gray-500 mt-2">© 2026 Markmec Mobility. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <div className="mt-8 md:mt-0 flex items-center text-gray-500 text-sm">
            <Battery size={16} className="mr-2 text-green-500" />
            Especialistas em Energia Limpa
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
