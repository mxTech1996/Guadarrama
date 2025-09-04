// En tu archivo: /components/ServicesSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// --- DATA: La información de servicios que proporcionaste ---
const servicesData = [
  {
    title: 'Human Resources Management Consulting',
    description:
      'Design of policies, recruitment, training, and talent development.',
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/services/guadarrama._1.png',
  },
  {
    title: 'Performance Evaluation & KPI Development',
    description:
      'Creation of key performance indicators to measure and improve results.',
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/services/guadarrama_2_.png',
  },
  {
    title: 'Risk Management & Compliance Advisory',
    description:
      'Identification of operational and administrative risks, along with prevention and compliance plans.',
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/services/guadarrama_3_.png',
  },
  {
    title: 'CRM Strategies',
    description:
      'Implementation of systems and strategies to enhance customer management.',
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/services/guadarrama_4.png',
  },
  {
    title: 'Digital Transformation & Automation',
    description:
      'Guidance in adopting technologies and digital tools to optimize administrative processes.',
    image:
      'https://cms-webserver-statics.s3.amazonaws.com/media/services/guadarrama_5__COU4WY2.png',
  },
];

const ServicesSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='services' className='py-20 md:py-28 bg-gray-900 text-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-indigo-400 mb-2 uppercase'>
            Our Services
          </p>
          <h2 className='text-4xl md:text-5xl font-bold'>What We Offer</h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className='bg-gray-800/50 border border-gray-700/50 rounded-lg p-8 h-full text-center flex flex-col items-center'
            >
              {/* --- Imagen Redonda --- */}
              <div className='w-40 h-40 relative mb-6 rounded-full overflow-hidden border-4 border-indigo-500/50'>
                <Image
                  src={service.image}
                  alt={service.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <h3 className='text-xl font-bold text-white mb-3 flex-grow'>
                {service.title}
              </h3>
              <p className='text-gray-400 leading-relaxed text-sm'>
                {service.description}
              </p>
              <a
                href='/contact'
                className='mt-6 inline-block font-semibold text-indigo-400 hover:text-indigo-300 transition-colors'
              >
                Learn More &rarr;
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
