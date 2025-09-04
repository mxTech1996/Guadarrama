// En tu archivo: /components/WhoWeWorkWith.js
'use client';

import { motion } from 'framer-motion';

// --- Datos para la sección ---
const clientProfiles = [
  {
    title: 'Ambitious Startups & Scale-ups',
    description:
      'For founders and leaders who need a strategic framework to scale operations, secure funding, and navigate rapid growth.',
    borderColor: 'border-indigo-500',
  },
  {
    title: 'Established Corporations',
    description:
      'For executives aiming to drive innovation, optimize complex operations, and lead their organizations through significant market changes.',
    borderColor: 'border-pink-500',
  },
  {
    title: 'Non-Profit Organizations',
    description:
      'For directors and boards seeking to maximize their impact, streamline governance, and ensure long-term financial sustainability.',
    borderColor: 'border-indigo-500',
  },
];

const WhoWeWorkWith = () => {
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
    <section id='who-we-work-with' className='py-20 md:py-28 bg-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            This Consulting Is For:
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {clientProfiles.map((profile, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gray-900 p-8 rounded-lg border-t-4 ${profile.borderColor} flex flex-col`}
            >
              <h3 className='text-2xl font-bold text-white mb-4 flex-grow'>
                {profile.title}
              </h3>
              <p className='text-gray-400 leading-relaxed'>
                {profile.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
