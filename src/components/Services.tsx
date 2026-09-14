import { Wrench, Battery, ShieldCheck, Zap, Gauge, PenTool as Tool } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Revisão Completa",
    description: "Checkup detalhado de todos os componentes de segurança e performance.",
    color: "bg-orange-500"
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Saúde da Bateria",
    description: "Diagnóstico e reparo de células, aumento de autonomia e vida útil.",
    color: "bg-gray-800"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Freios e Segurança",
    description: "Ajuste e troca de pastilhas, discos e sangria de freios hidráulicos.",
    color: "bg-orange-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Parte Elétrica",
    description: "Reparo em controladores, motores, displays e iluminação LED.",
    color: "bg-gray-800"
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Customização",
    description: "Upgrade de velocidade, suspensão e personalização visual.",
    color: "bg-orange-500"
  },
  {
    icon: <Tool className="w-8 h-8" />,
    title: "Pneus e Rodas",
    description: "Troca de pneus, instalação de pneus maciços e balanceamento.",
    color: "bg-gray-800"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">NOSSOS SERVIÇOS</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            MANUTENÇÃO DE <span className="text-orange-600">ALTA PERFORMANCE</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Temos tecnologia de ponta e especialistas treinados para garantir que sua mobilidade nunca pare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-start"
            >
              <div className={`${service.color} p-4 rounded-xl text-white mb-6`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href="#contato" className="text-orange-600 font-bold inline-flex items-center hover:underline">
                Saber mais
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
