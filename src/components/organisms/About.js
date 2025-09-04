// En tu archivo: /components/AboutSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  // Variantes para animación escalonada
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='about' className='py-20 md:py-28 bg-gray-900 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* --- Columna de Imagen (Izquierda) --- */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className='text-5xl md:text-6xl font-extrabold mb-6'>
              WHO <br /> WE ARE
              <span className='block h-1 w-20 bg-indigo-500 mt-4' />
            </h2>
            <div className='relative w-full h-[350px]'>
              <div className='absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden'>
                <Image
                  src={dataSite.services[0].image} // Reemplaza con tu imagen principal
                  alt='Guadarrama Consultants team'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='absolute -bottom-8 -right-8 w-48 h-32 rounded-lg overflow-hidden border-4 border-gray-800 shadow-2xl'>
                <Image
                  src={dataSite.image_hero2} // Reemplaza con tu imagen secundaria
                  alt='Data visualization'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </motion.div>

          {/* --- Columna de Texto (Derecha) --- */}
          <motion.div
            variants={textContainerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            className='pt-4'
          >
            <motion.p
              variants={itemVariants}
              className='font-semibold text-indigo-400 mb-2 uppercase'
            >
              About Guadarrama Consultants
            </motion.p>
            <motion.p
              variants={itemVariants}
              className='text-gray-300 mb-6 leading-relaxed'
            >
              We are a collective of seasoned industry experts dedicated to
              navigating the complexities of the modern business landscape. Our
              mission is to provide strategic clarity and data-driven solutions
              that empower our clients to achieve sustainable growth and a
              decisive competitive edge.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className='text-gray-300 mb-8 leading-relaxed'
            >
              By integrating deep industry knowledge with innovative
              methodologies, we transform challenges into opportunities,
              ensuring your business is not just prepared for the future, but is
              actively shaping it.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href='/contact'
                className='px-8 py-3 bg-indigo-600 font-semibold rounded-md hover:bg-indigo-700 transition-colors'
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
