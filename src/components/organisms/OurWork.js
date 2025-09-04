// En tu archivo: /components/ProjectsSlider.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Importa los componentes y estilos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Íconos para los botones de navegación
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

// --- Datos para la sección ---
const projectsData = [
  {
    image: '/images/project-skyscraper.jpg', // Reemplaza con tus imágenes
    avatar: '/images/avatar-rojas.jpg', // Reemplaza con tus avatares
    category: 'Structural Design',
    title: 'Quantum Tower - A New City Landmark',
    status: 'Completed: 2024',
    lead: 'Maria Rojas',
  },
  {
    image: '/images/project-bridge.jpg',
    avatar: '/images/avatar-smith.jpg',
    category: 'Civil Engineering',
    title: 'Seismic Retrofit of Golden Valley Bridge',
    status: 'In Progress',
    lead: 'John Smith',
  },
  {
    image: '/images/project-industrial.jpg',
    avatar: '/images/avatar-ivanova.jpg',
    category: 'Industrial Projects',
    title: 'LogiCorp Mega-Warehouse Facility',
    status: 'Completed: 2023',
    lead: 'Elena Ivanova',
  },
  {
    image: '/images/project-bim.jpg',
    avatar: '/images/avatar-wei.jpg',
    category: 'BIM Coordination',
    title: 'Metropolis General Hospital BIM',
    status: 'Completed: 2025',
    lead: 'Chen Wei',
  },
];

const ProjectsSlider = () => {
  return (
    <section className='relative py-20 md:py-28 bg-gray-50'>
      {/* Divisor ondulado superior */}
      <div className='absolute top-0 left-0 w-full'>
        <svg
          viewBox='0 0 1440 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 100C334.295 100 482.22 28.3333 720 28.3333C957.78 28.3333 1157.43 100 1440 100V0H0V100Z'
            fill='white'
          />
        </svg>
      </div>

      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <p className='font-semibold text-pink-600 mb-2 uppercase'>Our Work</p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Project Showcase
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='relative'
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='!pb-4' // Padding bottom para la sombra
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index} className='h-full pb-8'>
                <div className='bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col h-full transition-shadow duration-300'>
                  <div className='w-full h-56 relative'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <div className='p-6 flex flex-col flex-grow'>
                    <p className='text-sm text-pink-600 font-medium'>
                      {project.category}
                    </p>
                    <h3 className='text-xl font-bold text-gray-800 mt-2 flex-grow'>
                      {project.title}
                    </h3>
                    <div className='mt-4 pt-4 border-t border-gray-200 flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        <Image
                          src={project.avatar}
                          alt={project.lead}
                          width={40}
                          height={40}
                          className='rounded-full'
                        />
                        <div>
                          <p className='font-semibold text-gray-700 text-sm'>
                            {project.lead}
                          </p>
                          <p className='text-xs text-gray-500'>Lead Engineer</p>
                        </div>
                      </div>
                      <p className='text-sm font-semibold text-gray-600'>
                        {project.status}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- Botones de Navegación Personalizados --- */}
          <div className='swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 -left-4 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors'>
            <LuChevronLeft className='text-gray-700' size={24} />
          </div>
          <div className='swiper-button-next-custom absolute top-1/2 -translate-y-1/2 -right-4 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors'>
            <LuChevronRight className='text-gray-700' size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
