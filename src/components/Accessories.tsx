import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Capacete Ultra-Lite",
    price: "R$ 349,00",
    image: "/accessories.jpg", // Using the same placeholder image for now
    rating: 5
  },
  {
    id: 2,
    name: "Trava de Segurança Digital",
    price: "R$ 199,00",
    image: "/accessories.jpg",
    rating: 4
  },
  {
    id: 3,
    name: "Mochila Pro-Scooter",
    price: "R$ 289,00",
    image: "/accessories.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Luz de LED Inteligente",
    price: "R$ 129,00",
    image: "/accessories.jpg",
    rating: 5
  }
];

const Accessories = () => {
  return (
    <section id="acessorios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">LOJA ONLINE</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">
              EQUIPAMENTOS <span className="text-orange-600">PREMIUM</span>
            </h3>
          </div>
          <a href="#" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
            Ver Loja Completa
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ShoppingCart className="text-orange-600" size={20} />
                </button>
              </div>
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < product.rating ? "fill-orange-500 text-orange-500" : "text-gray-300"} 
                  />
                ))}
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-1">{product.name}</h4>
              <p className="text-orange-600 font-black text-xl">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
