import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, HeartHandshake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Assessoria Completa",
      description: "Do primeiro rascunho ao último brinde. Cuidamos de todo o planejamento financeiro, criativo e logístico.",
      price: "Acompanhamento Integral"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Assessoria Parcial",
      description: "Para quem já começou a planejar, mas precisa de um olhar profissional para refinar escolhas e gerenciar contratos.",
      price: "Gestão Personalizada"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Assessoria do Dia",
      description: "Coordenação impecável no dia do evento para garantir que o cronograma seja seguido à risca e sem imprevistos.",
      price: "Execução Perfeita"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-wedding-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-charcoal mb-6">Excelência em Cada Detalhe</h2>
          <p className="mt-4 text-wedding-gray max-w-2xl mx-auto font-light text-lg">
            Soluções sob medida para atender às necessidades específicas do seu evento com sofisticação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group p-10 bg-wedding-sand hover:bg-white border border-transparent hover:border-wedding-gold/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-wedding-gold mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-wedding-charcoal mb-4 group-hover:text-wedding-gold transition-colors duration-300">{service.title}</h3>
              <p className="text-wedding-charcoal/60 mb-8 leading-relaxed font-light">
                {service.description}
              </p>
              <div className="w-12 h-[1px] bg-wedding-gold/30 mx-auto group-hover:w-24 transition-all duration-500"></div>
              <p className="mt-6 text-xs uppercase tracking-widest text-wedding-gold font-medium">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
