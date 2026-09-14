import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Proprietário de Xiaomi M365",
    content: "Excelente atendimento! Minha scooter estava com problema na bateria e eles resolveram em tempo recorde. Preço justo e peças de qualidade.",
    rating: 5
  },
  {
    name: "Mariana Silva",
    role: "Usuária Diária",
    content: "O melhor lugar para acessórios. Comprei meu capacete e travas aqui. A equipe é super atenciosa e entende muito de mobilidade elétrica.",
    rating: 5
  },
  {
    name: "Roberto Fontes",
    role: "Entusiasta de Mobilidade",
    content: "Fiz a revisão completa na minha scooter Foston e sinto ela muito mais segura e silenciosa. Recomendo fortemente a MarkMec!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">DEPOIMENTOS</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            O QUE NOSSOS <span className="text-orange-600">CLIENTES DIZEM</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 relative"
            >
              <Quote className="absolute top-6 right-6 text-orange-100" size={48} />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 relative z-10">"{t.content}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
