import { MapPin, Phone, Mail, Camera, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">CONTATO</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8">
              PRONTO PARA <span className="text-orange-600">ACELERAR?</span>
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Localização</h4>
                  <p className="text-gray-400">Av. das Américas, 5000 - Barra da Tijuca<br />Rio de Janeiro - RJ</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-400">(21) 99999-8888</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-400">Segunda a Sexta: 09h às 18h<br />Sábado: 09h às 13h</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-orange-600 p-4 rounded-full transition-all">
                <Camera size={24} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-green-600 p-4 rounded-full transition-all">
                <MessageSquare size={24} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-orange-600 p-4 rounded-full transition-all">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="bg-gray-900 p-8 md:p-12 rounded-3xl border border-white/10">
            <h4 className="text-2xl font-bold mb-6">Envie uma mensagem</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                  <input type="text" className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
                  <input type="text" className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Modelo da Scooter</label>
                <input type="text" className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="Ex: Xiaomi M365, Foston..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Assunto</label>
                <select className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors">
                  <option>Manutenção Preventiva</option>
                  <option>Reparo de Bateria</option>
                  <option>Troca de Pneu</option>
                  <option>Acessórios</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-600 transition-colors" placeholder="Como podemos te ajudar?"></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-600/20">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
