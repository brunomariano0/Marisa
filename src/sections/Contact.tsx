import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-wedding-champagne rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-wedding-champagne/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-wedding-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Entre em Contato</span>
            <h2 className="text-4xl md:text-5xl font-serif text-wedding-charcoal mb-8 leading-tight">
              Transforme seu <span className="text-wedding-gold">dia especial</span> em uma <br/> experiência inesquecível
            </h2>
            <p className="text-wedding-gray mb-12 text-lg font-light leading-relaxed max-w-md">
              Cada detalhe importa. Conte-nos sobre seus sonhos e vamos criar juntos o casamento dos seus sonhos. Agende uma consulta gratuita e descubra como podemos tornar realidade a cerimônia perfeita.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="text-wedding-gold group-hover:text-wedding-charcoal transition-colors duration-300 mt-1">
                  <Phone size={24} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-xs text-wedding-gold font-bold uppercase tracking-widest mb-1">Telefone</p>
                  <p className="text-xl text-wedding-charcoal font-serif">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="text-wedding-gold group-hover:text-wedding-charcoal transition-colors duration-300 mt-1">
                  <Mail size={24} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-xs text-wedding-gold font-bold uppercase tracking-widest mb-1">E-mail</p>
                  <p className="text-xl text-wedding-charcoal font-serif">marisadiasassessoria@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="text-wedding-gold group-hover:text-wedding-charcoal transition-colors duration-300 mt-1">
                  <MapPin size={24} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-xs text-wedding-gold font-bold uppercase tracking-widest mb-1">Endereço</p>
                  <p className="text-xl text-wedding-charcoal font-serif">Av. Paulista, 1000 <br/> São Paulo, SP</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-wedding-sand/20 p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-wedding-sand rounded-lg relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-wedding-gold/20">
              <Mail size={40} />
            </div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="name" className="peer w-full border-b border-gray-300 py-2 placeholder-transparent focus:border-wedding-gold focus:outline-none transition-colors" placeholder="Nome" />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-wedding-gray transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-wedding-gold">Nome Completo</label>
                </div>
                <div className="relative">
                  <input type="tel" id="phone" className="peer w-full border-b border-gray-300 py-2 placeholder-transparent focus:border-wedding-gold focus:outline-none transition-colors" placeholder="Telefone" />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-wedding-gray transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-wedding-gold">Telefone</label>
                </div>
              </div>
              
              <div className="relative">
                <input type="email" id="email" className="peer w-full border-b border-gray-300 py-2 placeholder-transparent focus:border-wedding-gold focus:outline-none transition-colors" placeholder="Email" />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-wedding-gray transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-wedding-gold">E-mail</label>
              </div>

              <div className="relative">
                <input type="date" id="date" className="peer w-full border-b border-gray-300 py-2 placeholder-transparent focus:border-wedding-gold focus:outline-none transition-colors text-wedding-charcoal" />
                <label htmlFor="date" className="absolute left-0 -top-3.5 text-xs text-wedding-gray transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-wedding-gold">Data Prevista</label>
              </div>

              <div className="relative">
                <textarea id="message" rows={3} className="peer w-full border-b border-gray-300 py-2 placeholder-transparent focus:border-wedding-gold focus:outline-none transition-colors resize-none" placeholder="Mensagem"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-wedding-gray transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-wedding-gold">Conte um pouco sobre seu evento</label>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-wedding-charcoal to-wedding-gold text-white font-light py-4 px-6 hover:from-wedding-gold hover:to-wedding-charcoal transition-all duration-500 uppercase tracking-[0.2em] text-sm mt-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Send size={18} />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
