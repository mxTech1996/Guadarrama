'use client';

import { useState } from 'react';
import { map } from 'lodash';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { categoriesData } from '@/data';

// --- Variantes para las animaciones ---

// Animación para el contenedor principal (efecto escalonado)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animación para cada item de categoría
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Animación para la lista de subcategorías
const listVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

// --- Componente ---

const AnimatedCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='w-full py-28 border-y-black border-y-4 flex flex-col items-center'>
      <motion.div
        className='flex flex-wrap justify-center w-full gap-16' // Aumenté el gap para dar espacio a la lista
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {map(categoriesData, (item, i) => (
          <motion.div
            key={i}
            className='flex flex-col items-center w-48 cursor-pointer' // Aumenté el ancho
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src={item.image}
              width={200}
              height={200}
              className='w-36 h-36 object-cover'
              alt='category logo'
            />
            <p className='mt-5 text-base font-bold text-center'>{item.name}</p>

            {/* Lista animada que aparece al hacer hover */}
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.ul
                  className='mt-4 w-full text-center list-none p-0'
                  variants={listVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                >
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className='text-gray-600 text-sm py-1'>
                      {subItem}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedCategories;
