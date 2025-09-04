// En tu archivo: /components/TestimonialsSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
// Íconos para las comillas y las estrellas
import { LuQuote, LuStar } from 'react-icons/lu';

// --- DATA: La información de testimonios que proporcionaste ---
const testimonialsData = dataSite.references;

const TestimonialsSection = () => {
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
    <section className='py-20 md:py-28 bg-gray-900 text-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-indigo-400 mb-2 uppercase'>
            Testimonials
          </p>
          <h2 className='text-4xl md:text-5xl font-bold'>
            What Our Clients Are Saying
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-gray-800/50 border border-gray-700/50 rounded-lg p-8 h-full flex flex-col'
            >
              <LuQuote className='text-indigo-500 text-4xl mb-4' />
              <p className='text-gray-300 italic leading-relaxed flex-grow'>
                &quot;{testimonial.description}&quot;
              </p>
              <div className='mt-6 pt-6 border-t border-gray-700/50'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-bold text-white'>
                      {testimonial.name.split(',')[0]}
                    </p>
                    <p className='text-indigo-400 text-sm'>
                      {testimonial.name.split(',')[1] || 'Client'}
                    </p>
                  </div>
                  {/* Rating de estrellas */}
                  <div className='flex items-center text-pink-500'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <LuStar key={i} fill='currentColor' strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
