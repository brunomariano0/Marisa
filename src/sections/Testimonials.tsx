
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'A Marisa transformou nosso sonho em uma celebração impecável. Cada detalhe foi pensado com carinho e sofisticação.',
    name: 'Juliana & Marcos',
    role: 'Casamento ',
  },
  {
    quote:
      'Profissionalismo exemplar do início ao fim. Vivemos um dia inesquecível, sem preocupações, apenas felicidades.',
    name: 'Fernanda & Ricardo',
    role: 'Casamento',
  },
  {
    quote:
      'Equipe atenciosa, organização perfeita e um toque de elegância que nos encantou. Superou expectativas.',
    name: 'Bianca & André',
    role: 'Casamento',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 bg-wedding-champagne">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-wedding-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Depoimentos
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-wedding-charcoal">
              Amor que fala por si
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white p-8 border border-gray-100 shadow-sm"
            >
              <div className="mb-8">
                <div className="w-10 h-10 rounded-full bg-wedding-gold/20 flex items-center justify-center text-wedding-gold text-xl">
                  “
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-light mb-8">
                {item.quote}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-wedding-charcoal font-serif text-xl">{item.name}</p>
                  <p className="text-gray-500 text-sm tracking-widest uppercase">{item.role}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-wedding-gold"></span>
                  <span className="w-2 h-2 rounded-full bg-wedding-gold"></span>
                  <span className="w-2 h-2 rounded-full bg-wedding-gold"></span>
                  <span className="w-2 h-2 rounded-full bg-wedding-gold"></span>
                  <span className="w-2 h-2 rounded-full bg-wedding-gold"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

