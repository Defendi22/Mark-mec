import { useState, useEffect } from "react";
import {
  Wrench,
  Zap,
  Shield,
  MapPin,
  Phone,
  Clock,
  ChevronDown,
  Star,
  CheckCircle,
  Menu,
  X,
  Battery,
  Settings,
  Package,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real

function WhatsAppButton({ message = "Olá! Vim pelo site e gostaria de mais informações.", className = "" }) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <svg viewBox="0 0 32 32" className="inline-block w-5 h-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.773L0 32l8.489-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 01-6.763-1.853l-.485-.29-5.037 1.188 1.233-4.912-.317-.503A13.223 13.223 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667c7.363 0 13.333 5.97 13.333 13.333 0 7.363-5.97 13.333-13.333 13.333zm7.293-9.987c-.4-.2-2.363-1.165-2.729-1.299-.366-.133-.632-.2-.898.2-.266.4-1.032 1.299-1.265 1.565-.233.267-.466.3-.866.1-.4-.2-1.688-.622-3.216-1.983-1.188-1.06-1.989-2.37-2.222-2.77-.233-.4-.025-.616.175-.815.18-.18.4-.466.6-.699.2-.233.266-.4.4-.666.133-.267.066-.5-.033-.699-.1-.2-.898-2.165-1.23-2.965-.325-.777-.655-.672-.898-.684-.233-.012-.5-.015-.766-.015-.266 0-.699.1-1.065.5-.366.4-1.398 1.365-1.398 3.33s1.432 3.863 1.632 4.13c.2.266 2.82 4.304 6.832 6.03 4.013 1.724 4.013 1.149 4.736 1.077.723-.073 2.363-.967 2.696-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z" />
      </svg>
      Falar no WhatsApp
    </a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#services" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Avaliações", href: "#reviews" },
    { label: "Localização", href: "#localizacao" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/95 shadow-lg shadow-black/50" : "bg-black/70 backdrop-blur-md"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 md:w-6 md:h-6 text-black" strokeWidth={3} />
          </div>
          <div className="leading-tight">
            <span className="block text-white font-black text-sm md:text-base tracking-wider">MARKMEC</span>
            <span className="block text-orange-500 font-semibold text-[10px] md:text-xs tracking-widest uppercase">Mobility</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <WhatsAppButton
            message="Olá! Vim pelo site da MARKMEC MOBILITY e gostaria de agendar um serviço."
            className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-2 px-4 rounded-lg flex items-center transition-all duration-200 text-sm"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-900 transition-colors font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-3">
              <WhatsAppButton
                message="Olá! Vim pelo site da MARKMEC MOBILITY e gostaria de agendar um serviço."
                className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200 w-full"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Orange glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,165,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,165,0,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
          <Zap className="w-4 h-4 text-orange-400" />
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">
            Especialistas em Scooters Elétricas
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Sua Scooter Elétrica
          <br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #f97316, #fb923c)" }}>
            Merece o Melhor
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Manutenção especializada, peças originais e acessórios premium para scooters elétricas. 
          Atendimento rápido, diagnóstico preciso e garantia no serviço.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            message="Olá! Vim pelo site da MARKMEC MOBILITY e gostaria de agendar um serviço urgente!"
            className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 text-base w-full sm:w-auto"
          />
          <a
            href="#services"
            className="border border-gray-600 hover:border-orange-500 text-white hover:text-orange-400 font-semibold py-4 px-8 rounded-xl flex items-center justify-center transition-all duration-300 text-base w-full sm:w-auto gap-2"
          >
            Ver Serviços
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Clientes Atendidos" },
            { value: "5 anos", label: "de Experiência" },
            { value: "98%", label: "Satisfação" },
            { value: "30 min", label: "Diagnóstico" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
              <p className="text-2xl md:text-3xl font-black text-orange-400">{stat.value}</p>
              <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-orange-400 transition-colors animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manutenção Preventiva",
      desc: "Revisão completa de freios, pneus, bateria, motor e sistema elétrico. Mantenha sua scooter sempre em dia.",
      items: ["Revisão de freios", "Calibração de pneus", "Verificação elétrica", "Lubrificação geral"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Diagnóstico Elétrico",
      desc: "Identificamos falhas no sistema elétrico com equipamentos de última geração e software especializado.",
      items: ["Teste de bateria", "Verificação do motor", "Diagnóstico BMS", "Análise do controlador"],
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Troca de Bateria",
      desc: "Substituição de células e packs de bateria com peças de alta qualidade e garantia de 12 meses.",
      items: ["Baterias originais", "Montagem profissional", "Teste de capacidade", "Garantia incluída"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Reparo de Motor",
      desc: "Manutenção e substituição de motores hub e motores centrais com técnicos certificados.",
      items: ["Motores hub", "Motores centrais", "Rolamentos e vedações", "Ajuste de potência"],
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Acessórios & Peças",
      desc: "Loja completa com peças originais, acessórios e upgrades para sua scooter elétrica.",
      items: ["Capacetes homologados", "Luzes e sinalização", "Bags e suportes", "Peças de reposição"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Funilaria & Estética",
      desc: "Restauração de carenagens, pintura e personalização para deixar sua scooter nova em folha.",
      items: ["Restauro de plásticos", "Pintura automotiva", "Adesivos e wrapping", "Polimento e cristalização"],
    },
  ];

  return (
    <section id="services" className="bg-[#0f0f0f] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-widest uppercase text-sm">O Que Fazemos</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4">
            Serviços <span className="text-orange-500">Especializados</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Soluções completas para manter sua scooter elétrica funcionando com máxima performance e segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-[#1a1a1a] border border-gray-800 hover:border-orange-500/50 rounded-2xl p-6 transition-all duration-300 hover:bg-[#1f1f1f] hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-orange-500/10 group-hover:bg-orange-500/20 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-500 mb-5 transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Atendimento Rápido",
      desc: "Diagnóstico em até 30 minutos e reparos expressos para não deixar você parado.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Garantia nos Serviços",
      desc: "Todos os serviços possuem garantia. Sua segurança e tranquilidade são nossa prioridade.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Técnicos Certificados",
      desc: "Equipe altamente treinada e especializada em veículos elétricos de duas rodas.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Peças Originais",
      desc: "Utilizamos apenas peças originais e de procedência garantida para preservar sua scooter.",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Suporte Pós-Serviço",
      desc: "Acompanhamento via WhatsApp após o serviço. Estamos disponíveis para tirar suas dúvidas.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Tecnologia Avançada",
      desc: "Equipamentos modernos para diagnóstico elétrico preciso e eficiente.",
    },
  ];

  return (
    <section id="diferenciais" className="bg-black py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 50%, #f97316 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-semibold tracking-widest uppercase text-sm">Por que nos escolher</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-6">
              Nossos <span className="text-orange-500">Diferenciais</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A MARKMEC MOBILITY nasceu da paixão por mobilidade elétrica. Somos referência em manutenção de scooters elétricas com atendimento humanizado e qualidade garantida.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton
                message="Olá! Gostaria de agendar uma visita na MARKMEC MOBILITY."
                className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-orange-500/20"
              />
              <a href="#localizacao" className="border border-gray-700 hover:border-orange-500 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300">
                <MapPin className="w-4 h-4 text-orange-500" />
                Ver Localização
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div key={item.title} className="bg-[#111] border border-gray-800 hover:border-orange-500/30 rounded-xl p-5 transition-all duration-300 group">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-3 group-hover:bg-orange-500/20 transition-all">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold mb-1 text-sm">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScooterBanner() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 100%)" }}>
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/26708106/pexels-photo-26708106.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt="Scooters elétricas"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.95) 100%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">Oferta Especial</p>
        <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
          Primeira Revisão com <span className="text-orange-500">20% OFF</span>
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Traga sua scooter elétrica para a primeira revisão e ganhe desconto especial. Válido para novos clientes.
        </p>
        <WhatsAppButton
          message="Olá! Vi no site que tem 20% de desconto na primeira revisão. Gostaria de agendar!"
          className="inline-flex bg-orange-500 hover:bg-orange-400 text-black font-bold py-4 px-8 rounded-xl items-center justify-center transition-all duration-300 shadow-lg shadow-orange-500/30 hover:-translate-y-1 text-base"
        />
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Lucas Ferreira",
      rating: 5,
      text: "Atendimento impecável! Trouxe minha scooter com problema na bateria e em menos de 2 horas estava pronta. Serviço de primeira qualidade!",
      location: "São Paulo, SP",
      avatar: "LF",
    },
    {
      name: "Mariana Costa",
      rating: 5,
      text: "Melhor oficina de scooter elétrica que já fui! Técnicos muito experientes, me explicaram tudo que foi feito e o preço foi justo. Super recomendo!",
      location: "Guarulhos, SP",
      avatar: "MC",
    },
    {
      name: "Rafael Souza",
      rating: 5,
      text: "Comprei vários acessórios e fiz a manutenção preventiva. Ótima variedade de produtos e preços competitivos. Voltarei com certeza!",
      location: "Santo André, SP",
      avatar: "RS",
    },
    {
      name: "Juliana Almeida",
      rating: 5,
      text: "Rápidos e profissionais! Diagnóstico preciso e honesto. Não tentaram me vender serviço desnecessário. Equipe de confiança!",
      location: "São Paulo, SP",
      avatar: "JA",
    },
    {
      name: "Carlos Mendes",
      rating: 5,
      text: "Minha scooter voltou a rodar como nova! Motor estava falhando e eles resolveram no mesmo dia. Recomendo a MARKMEC para todos!",
      location: "Osasco, SP",
      avatar: "CM",
    },
    {
      name: "Fernanda Lima",
      rating: 5,
      text: "Excelente suporte pós-serviço! Tive uma dúvida depois e me atenderam prontamente pelo WhatsApp. Isso faz toda a diferença!",
      location: "São Paulo, SP",
      avatar: "FL",
    },
  ];

  return (
    <section id="reviews" className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-widest uppercase text-sm">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4">
            O Que Nossos <span className="text-orange-500">Clientes</span> Dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
            ))}
            <span className="text-gray-300 text-sm ml-2">4.9/5 · Mais de 200 avaliações</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-[#141414] border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                  {r.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    scooterModel: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é *${formData.name}*.%0A📱 Telefone: ${formData.phone}%0A🛵 Modelo da Scooter: ${formData.scooterModel}%0A🔧 Serviço desejado: ${formData.service}%0A📝 Mensagem: ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="bg-[#0f0f0f] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <span className="text-orange-500 font-semibold tracking-widest uppercase text-sm">Entre em Contato</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-6">
              Agende seu <span className="text-orange-500">Serviço</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Preencha o formulário e envie direto para nosso WhatsApp. Respondemos em menos de 5 minutos durante o horário de atendimento!
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">WhatsApp</p>
                  <p className="text-gray-400 text-sm">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">Horário de Atendimento</p>
                  <p className="text-gray-400 text-sm">Seg–Sex: 8h às 18h · Sáb: 8h às 13h</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">Endereço</p>
                  <p className="text-gray-400 text-sm">Rua das Scooters, 123 – São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 md:p-8">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-green-500" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.773L0 32l8.489-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 01-6.763-1.853l-.485-.29-5.037 1.188 1.233-4.912-.317-.503A13.223 13.223 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667c7.363 0 13.333 5.97 13.333 13.333 0 7.363-5.97 13.333-13.333 13.333zm7.293-9.987c-.4-.2-2.363-1.165-2.729-1.299-.366-.133-.632-.2-.898.2-.266.4-1.032 1.299-1.265 1.565-.233.267-.466.3-.866.1-.4-.2-1.688-.622-3.216-1.983-1.188-1.06-1.989-2.37-2.222-2.77-.233-.4-.025-.616.175-.815.18-.18.4-.466.6-.699.2-.233.266-.4.4-.666.133-.267.066-.5-.033-.699-.1-.2-.898-2.165-1.23-2.965-.325-.777-.655-.672-.898-.684-.233-.012-.5-.015-.766-.015-.266 0-.699.1-1.065.5-.366.4-1.398 1.365-1.398 3.33s1.432 3.863 1.632 4.13c.2.266 2.82 4.304 6.832 6.03 4.013 1.724 4.013 1.149 4.736 1.077.723-.073 2.363-.967 2.696-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z" />
              </svg>
              Enviar pelo WhatsApp
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Nome completo *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-[#111] border border-gray-700 focus:border-orange-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-[#111] border border-gray-700 focus:border-orange-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Modelo da Scooter</label>
                <input
                  type="text"
                  name="scooterModel"
                  value={formData.scooterModel}
                  onChange={handleChange}
                  placeholder="Ex: Xiaomi Mi Pro 2, Ninebot, etc."
                  className="w-full bg-[#111] border border-gray-700 focus:border-orange-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Serviço Desejado *</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#111] border border-gray-700 focus:border-orange-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                >
                  <option value="" className="text-gray-600">Selecione um serviço...</option>
                  <option value="Manutenção Preventiva">Manutenção Preventiva</option>
                  <option value="Diagnóstico Elétrico">Diagnóstico Elétrico</option>
                  <option value="Troca de Bateria">Troca de Bateria</option>
                  <option value="Reparo de Motor">Reparo de Motor</option>
                  <option value="Acessórios e Peças">Acessórios e Peças</option>
                  <option value="Funilaria e Estética">Funilaria e Estética</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Descreva o Problema / Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Descreva o que está acontecendo com sua scooter ou o que precisa..."
                  className="w-full bg-[#111] border border-gray-700 focus:border-orange-500 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-base"
              >
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.773L0 32l8.489-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 01-6.763-1.853l-.485-.29-5.037 1.188 1.233-4.912-.317-.503A13.223 13.223 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667c7.363 0 13.333 5.97 13.333 13.333 0 7.363-5.97 13.333-13.333 13.333zm7.293-9.987c-.4-.2-2.363-1.165-2.729-1.299-.366-.133-.632-.2-.898.2-.266.4-1.032 1.299-1.265 1.565-.233.267-.466.3-.866.1-.4-.2-1.688-.622-3.216-1.983-1.188-1.06-1.989-2.37-2.222-2.77-.233-.4-.025-.616.175-.815.18-.18.4-.466.6-.699.2-.233.266-.4.4-.666.133-.267.066-.5-.033-.699-.1-.2-.898-2.165-1.23-2.965-.325-.777-.655-.672-.898-.684-.233-.012-.5-.015-.766-.015-.266 0-.699.1-1.065.5-.366.4-1.398 1.365-1.398 3.33s1.432 3.863 1.632 4.13c.2.266 2.82 4.304 6.832 6.03 4.013 1.724 4.013 1.149 4.736 1.077.723-.073 2.363-.967 2.696-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z" />
                </svg>
                Enviar pelo WhatsApp
              </button>

              <p className="text-gray-500 text-xs text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem já preenchida. 🚀
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="localizacao" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold tracking-widest uppercase text-sm">Onde Estamos</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4">
            Nossa <span className="text-orange-500">Localização</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Venha nos visitar! Estamos prontos para atender você e sua scooter com toda atenção que merece.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: <MapPin className="w-5 h-5 text-orange-500" />,
              title: "Endereço",
              lines: ["Rua das Scooters, 123", "Bairro Eletro – São Paulo, SP", "CEP: 01310-100"],
            },
            {
              icon: <Clock className="w-5 h-5 text-orange-500" />,
              title: "Horários",
              lines: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 13h", "Domingo: Fechado"],
            },
            {
              icon: <Phone className="w-5 h-5 text-orange-500" />,
              title: "Contato",
              lines: ["WhatsApp: (11) 99999-9999", "Tel: (11) 3333-4444", "contato@markmec.com.br"],
            },
          ].map((info) => (
            <div key={info.title} className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  {info.icon}
                </div>
                <h4 className="text-white font-bold">{info.title}</h4>
              </div>
              {info.lines.map((line) => (
                <p key={line} className="text-gray-400 text-sm leading-relaxed">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975070395254!2d-46.65426982376986!3d-23.560627061405927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização MARKMEC MOBILITY"
            className="grayscale contrast-125 opacity-90"
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.google.com/maps/dir//Av.+Paulista,+São+Paulo+-+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 hover:border-orange-500 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
          >
            <MapPin className="w-4 h-4 text-orange-500" />
            Abrir no Google Maps
          </a>
          <WhatsAppButton
            message="Olá! Gostaria de mais informações sobre como chegar à MARKMEC MOBILITY."
            className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" strokeWidth={3} />
              </div>
              <div>
                <span className="block text-white font-black text-sm tracking-wider">MARKMEC</span>
                <span className="block text-orange-500 font-semibold text-[10px] tracking-widest uppercase">Mobility</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Especialistas em manutenção e acessórios para scooters elétricas. Qualidade, confiança e agilidade para sua mobilidade elétrica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm">Serviços</h5>
            <ul className="space-y-2 text-sm text-gray-500">
              {["Manutenção Preventiva", "Diagnóstico Elétrico", "Troca de Bateria", "Reparo de Motor", "Acessórios"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-orange-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Social / CTA */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm">Fale Conosco</h5>
            <p className="text-gray-500 text-sm mb-4">Atendimento rápido e especializado. Entre em contato agora!</p>
            <WhatsAppButton
              message="Olá! Vim pelo site da MARKMEC MOBILITY e gostaria de mais informações."
              className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-5 rounded-xl flex items-center justify-center transition-all duration-300 text-sm w-full"
            />
          </div>
        </div>

        <div className="border-t border-gray-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} MARKMEC MOBILITY. Todos os direitos reservados.</p>
          <p>Feito com ⚡ para sua mobilidade elétrica</p>
        </div>
      </div>
    </footer>
  );
}

// Floating WhatsApp Button
function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da MARKMEC MOBILITY!")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 hover:scale-110 group"
      title="Falar no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.773L0 32l8.489-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 01-6.763-1.853l-.485-.29-5.037 1.188 1.233-4.912-.317-.503A13.223 13.223 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667c7.363 0 13.333 5.97 13.333 13.333 0 7.363-5.97 13.333-13.333 13.333zm7.293-9.987c-.4-.2-2.363-1.165-2.729-1.299-.366-.133-.632-.2-.898.2-.266.4-1.032 1.299-1.265 1.565-.233.267-.466.3-.866.1-.4-.2-1.688-.622-3.216-1.983-1.188-1.06-1.989-2.37-2.222-2.77-.233-.4-.025-.616.175-.815.18-.18.4-.466.6-.699.2-.233.266-.4.4-.666.133-.267.066-.5-.033-.699-.1-.2-.898-2.165-1.23-2.965-.325-.777-.655-.672-.898-.684-.233-.012-.5-.015-.766-.015-.266 0-.699.1-1.065.5-.366.4-1.398 1.365-1.398 3.33s1.432 3.863 1.632 4.13c.2.266 2.82 4.304 6.832 6.03 4.013 1.724 4.013 1.149 4.736 1.077.723-.073 2.363-.967 2.696-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z" />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-16 bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Falar no WhatsApp
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Differentials />
      <ScooterBanner />
      <Reviews />
      <ContactForm />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
