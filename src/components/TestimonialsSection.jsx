import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Marina Silva',
      age: 28,
      profession: 'Executiva',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Em 3 meses consegui resultados que nunca imaginei possíveis. O acompanhamento é realmente personalizado e a personal entende exatamente o que preciso.',
      result: 'Perdeu 12kg e ganhou massa muscular'
    },
    {
      name: 'Carla Mendes',
      age: 35,
      profession: 'Médica',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Como médica, sei a importância de um treino bem estruturado. Aqui encontrei a excelência que procurava. Metodologia científica e resultados comprovados.',
      result: 'Melhorou condicionamento em 200%'
    },
    {
      name: 'Ana Carolina',
      age: 24,
      profession: 'Influencer',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Não é só sobre o físico, é sobre como me sinto. A confiança que ganhei é incomparável. Cada treino é uma experiência única e motivadora.',
      result: 'Definição muscular em 8 semanas'
    },
    {
      name: 'Juliana Costa',
      age: 31,
      profession: 'Empresária',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Agenda corrida, mas aqui consegui encaixar perfeitamente. O app é incrível e posso acompanhar minha evolução em tempo real. Vale cada centavo.',
      result: 'Rotina fitness sustentável'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-black via-purple-900/20 to-black py-20 px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Histórias de <span className="text-gradient">Transformação</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça mulheres que transformaram suas vidas e alcançaram resultados extraordinários 
            com nosso método exclusivo.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-pink-500/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].profession}, {testimonials[currentIndex].age} anos
                  </p>
                  <div className="flex justify-center mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Quote className="h-8 w-8 text-pink-400 mb-4" />
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="bg-pink-500/20 rounded-lg p-4 border border-pink-500/30">
                    <p className="text-pink-300 font-semibold">
                      Resultado: {testimonials[currentIndex].result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-pink-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '500+', label: 'Clientes transformadas' },
            { number: '98%', label: 'Taxa de satisfação' },
            { number: '3 anos', label: 'De experiência' },
            { number: '24/7', label: 'Suporte disponível' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
