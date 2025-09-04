// En tu archivo: /components/AboutSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// Íconos para la lista y el botón de play
import { LuCheckCircle, LuPlay } from 'react-icons/lu';

// --- Datos para la sección ---
const coreValues = [
  {
    title: 'Innovation',
    description:
      'Pushing the boundaries of modern engineering with cutting-edge technology.',
  },
  {
    title: 'Precision',
    description:
      'Meticulous attention to detail in every calculation, design, and execution.',
  },
  {
    title: 'Integrity',
    description:
      'Building lasting structures and relationships on a foundation of absolute trust.',
  },
];

const AboutSection = () => {
  // Variantes para animación escalonada del texto
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id='about'
      className='relative py-20 md:py-28 bg-white overflow-hidden'
    >
      {/* Formas decorativas en el fondo */}
      <div className='absolute top-10 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -translate-x-1/4'></div>
      <div className='absolute bottom-10 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-x-1/4'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* --- Columna de Imagen (Izquierda) --- */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative w-full aspect-square max-w-lg mx-auto'
          >
            <Image
              src='/images/about.png' // Reemplaza con tu imagen generada
              alt='Engineers reviewing a project'
              layout='fill'
              objectFit='cover'
              className='rounded-lg shadow-2xl'
            />
            {/* <div className='absolute inset-0 flex items-center justify-center'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className='w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50'
              >
                <LuPlay size={32} className='text-white ml-1' />
              </motion.button>
            </div> */}
          </motion.div>

          {/* --- Columna de Texto (Derecha) --- */}
          <motion.div
            variants={textContainerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={itemVariants}
              className='font-semibold text-pink-600 mb-2 uppercase'
            >
              Who We Are
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
            >
              About Mirazul Proyecciones
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className='text-gray-600 mb-6 leading-relaxed'
            >
              We are a forward-thinking engineering firm committed to
              integrating cutting-edge technology with time-tested structural
              principles. Our goal is to provide our clients with innovative,
              efficient, and resilient solutions that stand the test of time.
            </motion.p>

            <motion.div variants={itemVariants} className='space-y-4 mb-8'>
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className='p-4 bg-gray-50 rounded-md border border-gray-200'
                >
                  <h4 className='font-bold text-gray-800'>{value.title}</h4>
                  <p className='text-sm text-gray-500'>{value.description}</p>
                </div>
              ))}
            </motion.div>

            {/* <motion.div variants={itemVariants}>
              <button className='px-8 py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition-colors'>
                More About Us
              </button>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
