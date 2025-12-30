
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          // Nova imagem de casamento: Casal elegante ou cerimônia grandiosa
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 flex flex-col items-center"
        >
          <span className="w-[1px] h-16 bg-wedding-gold mb-6 block"></span>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] font-light text-wedding-gold-light">
            Assessoria Exclusiva
          </p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-serif font-medium mb-8 leading-tight tracking-tight"
        >
          Celebrando o <br/>
          <span className="italic font-light">Amor Eterno</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl font-light text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transformamos sua visão em uma experiência inesquecível, cuidando de cada detalhe com sofisticação e excelência.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          <a 
            href="#contact"
            className="inline-block px-10 py-4 bg-transparent border border-white/30 text-white font-light text-sm tracking-[0.2em] hover:bg-white hover:text-wedding-charcoal transition-all duration-500 uppercase"
          >
            Iniciar Planejamento
          </a>
        </motion.div>
      </div>    
    </section>
  );
};

export default Hero;
