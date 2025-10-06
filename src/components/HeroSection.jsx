// src/components/HeroSection.tsx
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-black overflow-hidden">
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-800 to-black animate-gradient"
      ></motion.div>

      {/* Hero Text */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight z-10"
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
        className="mt-6 text-lg md:text-xl max-w-2xl z-10 opacity-90"
      >
        {`Uma experiência premium e tecnológica, criada para mulheres que exigem o máximo. 
        Aqui, sua jornada é interativa, exclusiva e tão intensa quanto seus objetivos.`}
      </motion.p>

      {/* Call-to-Action */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg z-10"
        onClick={() => alert('Agende sua sessão exclusiva')}
      >
        COMEÇAR AGORA
      </motion.button>
    </section>
  );
}
