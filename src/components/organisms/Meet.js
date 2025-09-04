// En tu archivo: /components/ExpertsSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

import Image from 'next/image';
// Íconos para la lista de experiencia
import { FaTasks, FaHandshake, FaBolt } from 'react-icons/fa';

// --- Datos para la sección ---
const expertiseData = [
  {
    icon: <FaTasks size={20} />,
    text: 'Over 20 years of experience in high-level corporate strategy.',
  },
  {
    icon: <FaHandshake size={20} />,
    text: 'Led over 50 successful merger and acquisition transactions.',
  },
  {
    icon: <FaBolt size={20} />,
    text: 'Specializes in helping established companies navigate market disruption.',
  },
];

const FounderSection = () => {
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
    <section className='py-20 md:py-28 bg-gray-900 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* --- Columna de Imagen (Izquierda) --- */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='w-full h-auto'
          >
            <Image
              src={dataSite.services[1].image} // Usa la misma imagen del socio fundador
              alt='Portrait of Ricardo Guadarrama'
              width={500}
              height={600}
              className='rounded-lg object-cover mx-auto'
            />
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
              className='font-semibold text-indigo-400 mb-2 uppercase'
            >
              A Word From Our Founder
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className='text-4xl md:text-5xl font-bold mb-6'
            >
              Ricardo Guadarrama
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className='text-gray-300 mb-8 leading-relaxed'
            >
              &quot;Our philosophy is simple: we succeed when you succeed. We
              are more than just consultants; we are dedicated partners invested
              in your long-term growth. We bring clarity to complexity and
              deliver strategies that are not only visionary but
              actionable.&quot;
            </motion.p>

            <motion.ul variants={itemVariants} className='space-y-4'>
              {expertiseData.map((item, index) => (
                <li key={index} className='flex items-start gap-4'>
                  <div className='flex-shrink-0 text-indigo-400 mt-1'>
                    {item.icon}
                  </div>
                  <span className='text-gray-300'>{item.text}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Datos para la sección ---
const expertsData = [
  {
    image: '/images/expert-guadarrama.jpg', // Reemplaza con tus imágenes
    name: 'Ricardo Guadarrama',
    title: 'Founding Partner & Chief Strategist',
  },
  {
    image: '/images/expert-vargas.jpg',
    name: 'Elena Vargas',
    title: 'Head of Financial Consulting',
  },
  {
    image: '/images/expert-morales.jpg',
    name: 'Javier Morales',
    title: 'Director of Operations',
  },
  {
    image: '/images/expert-reyes.jpg',
    name: 'Sofia Reyes',
    title: 'Market Growth Specialist',
  },
];

const ExpertsSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
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
    <>
      <section className='py-20 md:py-28 bg-gray-900 text-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold'>
              Meet Our Lead Consultants
            </h2>
            <p className='mt-4 text-lg text-gray-400 max-w-2xl mx-auto'>
              The experienced minds behind our strategic solutions.
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            {expertsData.map((expert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='text-center flex flex-col items-center'
              >
                {/* <div className='relative w-32 h-32 mb-4'>
                  <Image
                    src={expert.image}
                    alt={`Portrait of ${expert.name}`}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-full'
                  />
                </div> */}
                <h3 className='text-xl font-bold text-white'>{expert.name}</h3>
                <p className='text-indigo-400 font-medium'>{expert.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Parte 2: Banner CTA --- */}
      <section className='bg-indigo-600 text-white'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className='container mx-auto px-4 py-16'
        >
          <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8'>
            <div>
              <h3 className='text-3xl md:text-4xl font-bold'>
                Ready to Transform Your Business?
              </h3>
              <p className='text-indigo-200 mt-2'>
                Let&#39;s discuss how we can help you achieve your goals.
              </p>
            </div>
            <a
              href='/contact'
              className='flex-shrink-0 px-8 py-3 bg-white text-indigo-600 font-bold rounded-md hover:bg-gray-200 transition-colors'
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </section>
      <FounderSection />
    </>
  );
};

export default ExpertsSection;
