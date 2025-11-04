// src/components/HeroSection.tsx
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen text-white bg-black overflow-hidden pt-20">
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-800 to-black animate-gradient"
      ></motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
      >
        <div className="relative w-72 h-96 rounded-3xl overflow-hidden border-4 border-pink-500/50 shadow-2xl">
          <img
            src="/brenda-profile.png"
            alt="Personal Brenda"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      </motion.div>

      {/* Hero Text */}
      <motion.div className="max-w-2xl z-10 text-left px-8 lg:px-0">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          {`Transforme seu corpo.
          Eleve sua mente.
          Viva seu auge.`}
        </motion.h1>

        {/* Hero Subtext */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl opacity-90"
        >
          {`Sou Brenda, Personal Trainer especializada em transformação de mulheres reais. 
          Com metodologia comprovada, resultados em 2 semanas e acompanhamento 24/7 via WhatsApp.`}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex gap-8 mt-8"
        >
          <div>
            <div className="text-3xl font-bold text-pink-400">8.762+</div>
            <div className="text-gray-300">Seguidores</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">440+</div>
            <div className="text-gray-300">Transformações</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">2 Semanas</div>
            <div className="text-gray-300">Primeiros Resultados</div>
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          href="https://wa.me/5511954004713?text=Olá%20Brenda!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg transition-colors z-10"
        >
          AGENDE SUA CONSULTA
        </motion.a>
      </motion.div>
    </section>
  );
}
