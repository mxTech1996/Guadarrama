// En tu archivo: /components/WhyChooseUsSection.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Íconos para la lista de ventajas
// import { LuDraftingCompass, LuPieChart, LuHandshake } from 'react-icons/lu';

import { FaDraftingCompass, FaChartArea, FaHandshake } from 'react-icons/fa';
// --- Datos para la sección ---
const whyChooseUsData = [
  {
    icon: <FaDraftingCompass size={20} />,
    text: "We don't use templates. Every strategy is custom-built to fit your unique business context and goals.",
  },
  {
    icon: <FaChartArea size={20} />,
    text: 'Our recommendations are backed by rigorous data analysis, providing you with actionable, intelligent insights.',
  },
  {
    icon: <FaHandshake size={20} />,
    text: 'We are committed to your long-term success, acting as a trusted advisor long after the initial project is complete.',
  },
];

const WhyChooseUsSection = () => {
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
              src={dataSite.services[1].image} // Reemplaza con tu nueva imagen
              alt='Team collaborating on a project'
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
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className='text-4xl md:text-5xl font-bold mb-6'
            >
              Your Success Is Our Business.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className='text-gray-300 mb-8 leading-relaxed'
            >
              We believe that true consulting goes beyond just giving advice.
              It&apos;s about becoming a vested partner in your journey. We
              immerse ourselves in your world to deliver solutions that are not
              only innovative but also practical and sustainable.
            </motion.p>

            <motion.ul variants={itemVariants} className='space-y-4'>
              {whyChooseUsData.map((item, index) => (
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

export default WhyChooseUsSection;
