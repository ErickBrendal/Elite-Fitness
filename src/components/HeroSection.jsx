// src/components/HeroSection.tsx
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-white bg-black overflow-hidden pt-20">
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-800 to-black animate-gradient"
      ></motion.div>

      {/* Container principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <motion.div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            Transforme seu corpo.
            <br />
            Eleve sua mente.
            <br />
            Viva seu auge.
          </motion.h1>

          {/* Hero Subtext */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl opacity-90 leading-relaxed"
          >
            Sou Brenda, Personal Trainer especializada em transformação de mulheres reais. 
            Com metodologia comprovada, resultados em 2 semanas e acompanhamento 24/7 via WhatsApp.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-8 mt-10 justify-center lg:justify-start"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">8.762+</div>
              <div className="text-gray-300 text-sm mt-2">Seguidores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">440+</div>
              <div className="text-gray-300 text-sm mt-2">Transformações</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">2 Semanas</div>
              <div className="text-gray-300 text-sm mt-2">Primeiros Resultados</div>
            </div>
          </motion.div>

          {/* Call-to-Action */}
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            href="https://wa.me/5511954004713?text=Olá%20Brenda!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg transition-colors"
          >
            AGENDE SUA CONSULTA
          </motion.a>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-4 border-pink-500/50 shadow-2xl">
            <img
              src="/brenda-profile.png"
              alt="Personal Brenda"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
