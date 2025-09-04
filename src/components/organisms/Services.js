// En tu archivo: /components/ServicesSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// --- Datos para la sección ---
const servicesDataFirst = dataSite.services.slice(0, 3); // Tomamos solo los primeros 4 servicios para mostrar
const allServicesData = dataSite.services; // Todos los servicios

const ServicesSection = () => {
  const [viewAll, setViewAll] = useState(false);
  // Variantes para animación escalonada
  const servicesData = viewAll ? allServicesData : servicesDataFirst;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
    <section id='services' className='py-20 md:py-28 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-pink-600 mb-2 uppercase'>
            Services We Provide
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Our Engineering Expertise
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='visible'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className='bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-shadow duration-300'
            >
              <div className='w-full h-56 relative overflow-hidden'>
                <Image
                  src={service.image}
                  alt={service.title}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-500 ease-in-out hover:scale-105'
                />
              </div>
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>
                  {service.title}
                </h3>
                <p className='text-gray-600 text-sm flex-grow'>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center mt-16'
        >
          <button
            onClick={() => setViewAll(!viewAll)}
            className='font-semibold text-pink-600 hover:text-pink-700 transition-colors'
          >
            {viewAll ? 'View Less Services' : 'View All Services'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
