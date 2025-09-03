'use client';

import { useState } from 'react';
import { map } from 'lodash';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi'; // Icono de flecha
import { benefitsData } from '@/data';

// --- Variantes para las animaciones ---

const descriptionVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    marginTop: '1rem',
    transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};

// --- Componente ---

const MissionVisionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    // Si se hace clic en el mismo, se cierra. Si no, se abre el nuevo.
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className='w-full flex flex-col items-center gap-6 py-20'>
      <h1 className='text-3xl font-bold font-urbanist uppercase'>
        Mission, Vision & Values
      </h1>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full max-w-6xl'>
        {map(benefitsData, (item) => (
          <motion.div
            key={item.id}
            className='w-full flex flex-col'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: item.id * 0.1 }}
          >
            {/* Imagen */}
            <div className='h-40 w-full flex justify-center'>
              <Image
                src={item.image}
                alt={`${item.title} image`}
                width={200}
                height={200}
                className='h-full w-auto object-contain' // Mejorado para que la imagen no se distorsione
              />
            </div>

            {/* Contenido de texto */}
            <div className='flex-1 flex flex-col mt-5 text-primary border border-gray-200 rounded-lg p-4'>
              <button
                onClick={() => handleClick(item.id)}
                className='w-full flex justify-between items-center text-left'
              >
                <h2 className='font-bold text-xl sm:text-2xl font-urbanist'>
                  {item.title}
                </h2>
                {/* Flecha animada */}
                <motion.div
                  animate={{ rotate: activeIndex === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className='h-6 w-6' />
                </motion.div>
              </button>

              {/* Descripción animada y colapsable */}
              <AnimatePresence>
                {activeIndex === item.id && (
                  <motion.p
                    className='text-sm sm:text-base font-light overflow-hidden'
                    variants={descriptionVariants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionSection;
