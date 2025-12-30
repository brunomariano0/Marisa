import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// In a real app, this data would come from an API or a shared data file
const projectsData = [
  {
    id: 1,
    title: "Juliana & Marcos",
    date: "12 de Outubro, 2024",
    location: "Fazenda Vila Rica, SP",
    guests: "250 Convidados",
    description: "Um casamento clássico ao pôr do sol, celebrando o amor com elegância atemporal. A decoração floral em tons de branco e verde criou uma atmosfera etérea, complementada por detalhes em dourado que trouxeram sofisticação ao ambiente rústico da fazenda.",
    mainImage: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519225448526-0ca1299f0557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Fernanda & Ricardo",
    date: "05 de Setembro, 2024",
    location: "Palácio Tangará, SP",
    guests: "180 Convidados",
    description: "Uma celebração moderna e luxuosa no coração de São Paulo. O design contemporâneo se uniu à tradição em uma festa inesquecível.",
    mainImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  // Fallback for other IDs for demo purposes
  {
    id: 3,
    title: "Casamento Exclusivo",
    date: "20 de Novembro, 2024",
    location: "Destination Wedding, Trancoso",
    guests: "120 Convidados",
    description: "Uma experiência única à beira-mar, onde a natureza exuberante serviu de cenário para um 'sim' inesquecível.",
    mainImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  // Simple logic to find project or default to first/generic one
  const project = projectsData.find(p => p.id === Number(id)) || projectsData[2];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Navbar />
      
      <main className="pt-0">
        {/* Hero Banner */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.mainImage})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">{project.title}</h1>
              <p className="text-white/90 text-lg font-light tracking-widest uppercase">{project.location}</p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-wedding-gold hover:text-wedding-charcoal transition-colors mb-12 group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para Home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif text-wedding-charcoal mb-6">Sobre o Evento</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                {project.description}
              </p>
            </div>
            <div className="bg-white p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-serif text-wedding-charcoal mb-6 border-b border-gray-100 pb-4">Detalhes</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <Calendar size={18} className="text-wedding-gold mr-3" />
                  <span>{project.date}</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <MapPin size={18} className="text-wedding-gold mr-3" />
                  <span>{project.location}</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Users size={18} className="text-wedding-gold mr-3" />
                  <span>{project.guests}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Photo Gallery */}
          <h2 className="text-3xl font-serif text-wedding-charcoal mb-10 text-center">Momentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] overflow-hidden group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Momento ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
