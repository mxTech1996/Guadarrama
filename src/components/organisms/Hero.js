// CÓDIGO COMPLETO Y CORREGIDO PARA LA PRIMERA SECCIÓN
// Guárdalo en un archivo como: /components/Hero.js

'use client';

import { motion } from 'framer-motion';
// Íconos para la sección
import { LuCompass, LuCog, LuTrendingUp, LuChevronDown } from 'react-icons/lu';

// --- Componente Principal de la Sección Hero ---
const HeroSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    { icon: <LuCompass size={24} />, text: 'Strategic Planning' },
    { icon: <LuCog size={24} />, text: 'Operational Efficiency' },
    { icon: <LuTrendingUp size={24} />, text: 'Market Growth' },
  ];

  return (
    <section className='relative w-full h-screen bg-gray-900 text-white flex flex-col justify-center items-center overflow-hidden'>
      {/* Patrones decorativos */}
      <div className='absolute top-1/4 left-1/4 w-24 h-24 text-indigo-500/10 text-6xl font-thin transform rotate-45'>
        +
      </div>
      <div className='absolute bottom-1/4 right-1/4 w-24 h-24 text-indigo-500/10 text-6xl font-thin transform -rotate-45'>
        +
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          className='text-center max-w-4xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.p
            variants={itemVariants}
            className='font-semibold text-indigo-400 mb-4 uppercase tracking-widest'
          >
            Expert Management Consulting
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className='text-5xl md:text-7xl font-extrabold leading-tight mb-8'
          >
            Unlocking Your Business's True Potential.
          </motion.h1>

          {/* --- Cajas de Características --- */}
          <motion.div
            variants={itemVariants}
            className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto'
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-indigo-600/20 border border-indigo-500/30 rounded-lg p-6 flex flex-col items-center justify-center'
              >
                <div className='text-indigo-300 mb-3'>{feature.icon}</div>
                <span className='font-semibold'>{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Flecha animada para invitar al scroll */}
      <motion.div
        className='absolute bottom-10'
        initial={{ y: 0, opacity: 0.7 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <LuChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
