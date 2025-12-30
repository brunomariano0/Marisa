import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-wedding-charcoal to-wedding-charcoal text-white py-20 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-gold/5 via-transparent to-wedding-gold/5"></div>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          
          <div className="text-center md:text-left">
             <a href="#" className="inline-block text-3xl font-serif tracking-widest font-bold mb-6">
             MARISA
             <span className="text-wedding-gold">.</span>
           </a>
           <p className="text-white/40 text-sm font-light max-w-xs leading-relaxed">
             Assessoria exclusiva para casamentos e eventos sociais. Transformando sonhos em memórias eternas.
           </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-center md:text-left">
            <div>
              <h4 className="text-wedding-gold text-xs uppercase tracking-widest font-bold mb-6">Menu</h4>
              <ul className="space-y-4 text-sm font-light text-white/60">
                <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Galeria</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-wedding-gold text-xs uppercase tracking-widest font-bold mb-6">Social</h4>
              <ul className="space-y-4 text-sm font-light text-white/60">
                <li><a href="#" className="hover:text-wedding-gold transition-colors flex items-center gap-2"><FaInstagram size={16} /> Instagram</a></li>
                <li><a href="#" className="hover:text-wedding-gold transition-colors flex items-center gap-2"><FaFacebook size={16} /> Facebook</a></li>
                <li><a href="#" className="hover:text-wedding-gold transition-colors flex items-center gap-2"><FaTiktok size={16} /> TikTok</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl font-serif text-wedding-gold mb-4">Pronto para o seu dia especial?</h3>
          <p className="text-white/60 mb-8 max-w-md mx-auto">Entre em contato e vamos criar juntos o casamento dos seus sonhos.</p>
          <a href="#contact" className="inline-block bg-wedding-gold text-wedding-charcoal px-8 py-3 font-medium uppercase tracking-widest text-sm hover:bg-white transition-colors">
            Fale Conosco
          </a>
        </div>

        <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-light">
          <p>&copy; {new Date().getFullYear()} Marisa Assessoria. Todos os direitos reservados.</p>
          <p>Desenvolvido por  <a href="https://brunomarianodev.com.br" className="text-white/60 hover:text-white transition-colors">Bruno Mariano</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
