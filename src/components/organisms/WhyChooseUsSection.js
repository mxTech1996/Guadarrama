// En tu archivo: /components/WhyChooseUsSection.js
'use client';

import { motion } from 'framer-motion';
// Íconos para cada beneficio
import {
  LuCpu,
  LuAward,
  LuClock,
  LuDollarSign,
  LuHardHat,
  LuHeadphones,
} from 'react-icons/lu';

// --- Datos para la sección ---
const benefitsData = [
  {
    icon: <LuCpu size={28} />,
    title: 'Advanced Technology',
  },
  {
    icon: <LuAward size={28} />,
    title: 'Certified Experts',
  },
  {
    icon: <LuClock size={28} />,
    title: 'On-Time Delivery',
  },
  {
    icon: <LuDollarSign size={28} />,
    title: 'Cost-Effective Solutions',
  },
  {
    icon: <LuHardHat size={28} />,
    title: 'Safety First Approach',
  },
  {
    icon: <LuHeadphones size={28} />,
    title: '24/7 Project Support',
  },
];

const WhyChooseUsSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <section id='why-choose-us' className='py-20 md:py-28 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-16'
          >
            <p className='font-semibold text-pink-600 mb-2 uppercase'>
              Our Advantages
            </p>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Why Choose Us
            </h2>
          </motion.div>

          <motion.div
            className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='text-center p-6 flex flex-col items-center'
              >
                <div className='w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-5'>
                  {benefit.icon}
                </div>
                <h3 className='text-lg font-bold text-gray-800'>
                  {benefit.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className='py-20 md:py-28 bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-700'>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='container mx-auto px-4 text-center text-white'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ready to Start Your Next Project?
          </h2>
          <p className='max-w-2xl mx-auto text-indigo-100/90 mb-8 text-lg'>
            Let&#39;s discuss how our engineering expertise can bring your
            vision to life. Contact us today for a free, no-obligation
            consultation.
          </p>
          <a
            href='/contact'
            className='px-10 py-4 bg-white text-pink-600 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105'
          >
            Get a Quote
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default WhyChooseUsSection;
