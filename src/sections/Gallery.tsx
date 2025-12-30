
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // Added IDs to images to link to dynamic route
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 2, url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 3, url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 4, url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 5, url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 6, url: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <section id="gallery" className="py-32 bg-wedding-sand">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
             <span className="text-wedding-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Portfólio</span>
             <h2 className="text-4xl md:text-5xl font-serif text-wedding-charcoal mb-4">Histórias Reais</h2>
          </div>
          <div className="mt-6 md:mt-0">
             <span className="text-wedding-charcoal border-b border-wedding-charcoal/20 pb-1 text-sm tracking-widest uppercase">Clique para ver detalhes</span>
          </div>
        </div>

        {/* Standardized Grid - 3 columns, consistent aspect ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <Link to={`/project/${item.id}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
              >
                <img 
                  src={item.url} 
                  alt={`Casamento ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                
                {/* Border Frame Effect */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/50 transition-all duration-500 scale-95 group-hover:scale-100"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white font-serif text-2xl italic tracking-wider">Ver Detalhes</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
