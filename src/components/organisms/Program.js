// En tu archivo: /components/ProgramSection.js
'use client';

import { motion } from 'framer-motion';
// Íconos para cada punto del programa
import { LuBarChart2, LuShield, LuUsers, LuLightbulb } from 'react-icons/lu';

// --- Datos para la sección ---
const programData = [
  {
    icon: <LuBarChart2 size={24} />,
    title: 'Market Analysis & Strategic Positioning',
    description:
      'We analyze market dynamics, competitive landscapes, and internal capabilities to define a powerful strategic position for your company.',
  },
  {
    icon: <LuShield size={24} />,
    title: 'Operational Efficiency & Risk Management',
    description:
      'Our experts identify bottlenecks, streamline workflows, and implement risk mitigation strategies to build a more resilient and efficient organization.',
  },
  {
    icon: <LuUsers size={24} />,
    title: 'Leadership & Team Development',
    description:
      'We provide coaching and frameworks to develop high-performing leaders and foster a culture of collaboration and innovation.',
  },
  {
    icon: <LuLightbulb size={24} />,
    title: 'Innovation & Growth Roadmapping',
    description:
      'Together, we build a clear, actionable roadmap for sustainable growth, identifying new opportunities and driving innovation.',
  },
];

const ProgramSection = () => {
  // Variantes para animación escalonada
  const containerVariants = {
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
    <section id='program' className='py-20 md:py-28 bg-gray-900 text-white'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <motion.div
          className='flex flex-col'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {programData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='flex items-start gap-6 py-6 border-b border-gray-700/50'
            >
              <div className='flex-shrink-0 text-indigo-400 mt-1'>
                {item.icon}
              </div>
              <div>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-400 leading-relaxed'>
                  {item.description}
                </p>
                <a
                  href='#'
                  className='inline-block mt-3 font-semibold text-indigo-400 hover:text-indigo-300 transition-colors'
                >
                  Read More &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;
