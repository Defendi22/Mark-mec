import { motion } from 'framer-motion';

const stats = [
  { label: "Anos de Experiência", value: "8+" },
  { label: "Scooters Consertadas", value: "2.5k+" },
  { label: "Acessórios Vendidos", value: "5k+" },
  { label: "Clientes Satisfeitos", value: "100%" }
];

const Stats = () => {
  return (
    <section className="bg-orange-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-orange-100 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
