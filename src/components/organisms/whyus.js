// src/components/WhyChooseUs.jsx

'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiPenTool, FiTrendingUp } from 'react-icons/fi';

// Datos para las tarjetas. Puedes modificarlos fácilmente aquí.
const features = [
  {
    icon: <FiTarget className='h-8 w-8 text-blue-600' />,
    title: 'Comprehensive Strategy',
    description:
      "We don't just create content; we design complete strategies from concept to distribution, ensuring every piece meets a clear and measurable objective.",
  },
  {
    icon: <FiPenTool className='h-8 w-8 text-blue-600' />,
    title: 'High-Impact Creativity',
    description:
      'Our team specializes in video production, graphic design, and storytelling to create content that not only looks great but also resonates with your audience.',
  },
  {
    icon: <FiTrendingUp className='h-8 w-8 text-blue-600' />,
    title: 'Measurable Results',
    description:
      'We focus on your business growth. Through social media marketing and optimized content, we deliver results you can see and measure.',
  },
];

// Animaciones para Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anima las tarjetas una tras otra
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className='bg-white py-16 sm:py-24'>
      <div className='container mx-auto max-w-6xl px-6'>
        {/* Título de la Sección */}
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-3xl font-bold text-gray-800 sm:text-4xl'>
            Why Choose Us?
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            We combine strategy and creativity to take your brand to the next
            level.
          </p>
        </motion.div>

        {/* Contenedor de las Tarjetas Animadas */}
        <motion.div
          className='grid grid-cols-1 gap-8 md:grid-cols-3'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='text-center p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300'
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Icono */}
              <div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100'>
                {feature.icon}
              </div>
              <h3 className='mb-2 text-xl font-bold text-gray-800'>
                {feature.title}
              </h3>
              <p className='text-gray-600'>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
