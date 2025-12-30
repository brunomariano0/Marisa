import { motion } from 'framer-motion';

import Equipe from '../assets/Equipe.jpg';
const About = () => {
  return (
    <section id="about" className="py-32 bg-wedding-champagne overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <img 
                src={Equipe} 
                alt="Equipe Marisa Assessoria" 
                className="w-[100%] rounded-lg shadow-lg object-cover border-4 border-wedding-gold"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute top-12 right-0 w-[60%] h-[90%] border border-wedding-gold/30 z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-wedding-gold/10 rounded-full blur-3xl z-0"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-wedding-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl font-serif text-wedding-charcoal mb-8 leading-tight">
              Paixão por criar <br />
              <span className="italic text-wedding-gold">momentos únicos</span>
            </h2>
            
            <div className="space-y-6 text-wedding-charcoal/70 font-light leading-relaxed text-lg">
              <p>
                A Marisa Assessoria nasceu do desejo genuíno de transformar sonhos em realidade. Com uma abordagem boutique, limitamos o número de eventos que realizamos para garantir uma dedicação exclusiva a cada casal.
              </p>
              <p>
                Acreditamos que o luxo está nos detalhes e na personalização. Nossa curadoria de fornecedores e nosso olhar atento garantem que seu evento não seja apenas bonito, mas que tenha a sua essência em cada pormenor.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-wedding-gold/20">
              <div className="text-center lg:text-left">
                <span className="block text-4xl font-serif text-wedding-gold mb-2">5+</span>
                <span className="text-xs uppercase tracking-widest text-wedding-gray">Anos</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-4xl font-serif text-wedding-gold mb-2">100+</span>
                <span className="text-xs uppercase tracking-widest text-wedding-gray">Eventos</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-4xl font-serif text-wedding-gold mb-2">100%</span>
                <span className="text-xs uppercase tracking-widest text-wedding-gray">Satisfação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
